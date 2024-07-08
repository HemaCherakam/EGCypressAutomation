/// <reference types = "cypress"/>
/// <reference types = "cypress-iframe"/>
import "cypress-iframe";
import TaskPageObjects from "../Integration/PageObjects/TaskPageObjects";

describe("Automating Task.html Home Page", () => {
  const object = new TaskPageObjects();
  //const Image = "EGLogo.png";
  //const URL= "https://easygenerator.com";

  before(function () {
    cy.fixture("example").then((data) => {
      this.data = data;
    });
  });

  beforeEach(() => {
    cy.visit("/task.html");
  });

  it("Verify Dropdown field", () => {
    //To select an option and verify its value
    object.getDropdown().select("option2");
    object.getDropdown().should("have.value", "option2");
  });

  it("Verify Upload image file", () => {
    //To upload the image from fixtures
    object.getUploadFile().attachFile(this.data.Image);
    //To verify the image uploaded
    object.getAfterFileUpload().should("be.visible");
  });

  it("Verify Opening new tab", () => {
    //To capture the open window url
    cy.window().then((win) => {
      cy.stub(win, "open").as("windowOpen");
    });
    object.getOpenTab().invoke('removeAttr','target').click();
    cy.wait(8000);
    //To verify the expected navigated url
    cy.get("@windowOpen").should("be.calledWith", this.data.URL);
    cy.visit(this.data.NavigateURL);
    //To Perform action on the navigated url
    cy.origin(this.data.NavigateURL, () => {
      cy.wait(5000);
      object.getPricing().click();
    });
  });

  it("Verify Invoking Alert", () => {
    //To Read input from Fixtures - Alert-text.txt file and pass as input
    cy.fixture("alert-text.txt").then((inputText) => {
      object.getAlertInputText().type(inputText);
      //To Click on Alert button and verify the text displayed
      object.getAlertButton().click();
      cy.on("window:alert", (str) => {
        expect(str).to.equal(
          "Hello " + inputText + ", share this practice page and share your knowledge",
        );
      });
      //To Click on confirm button and verify the text displayed
      object.getAlertInputText().type(inputText);
      object.getAlertConfirm().click();
      cy.on("window:confirm", (str) => {
        expect(str).to.equal(
          "Hello " + inputText + ", Are you sure you want to confirm?",
        );
      });
    });
  });

  it("Verify Show/Hide the Input field", () => {
    //To Verify visibility of textbox upon Hide and Show
    object.getDisplayTextBox().should("be.visible");
    object.getHideTextBox().click();
    object.getDisplayTextBox().should("not.be.visible");
    object.getShowTextBox().click();
    object.getDisplayTextBox().should("be.visible");
  });

  it("Verify Mousehover field", () => {
    //To Verify the options should be displayed upon mouse hover and select a option
    object.getMouseHover().invoke("show");
    cy.contains("Top").click();
  });

  it("Verify iframe component", () => {
    //To Verify iframe component and perform action on iframe
    cy.wait(15000);
    object.getiframe().should('be.visible')
    object.getiframeURL().should('have.value', this.data.URL)
    cy.iframe().find(object.getPricing()).click()
    
  });
});
