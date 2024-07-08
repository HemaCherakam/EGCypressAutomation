class TaskPageObjects {
  //Dropdown field locators
  getDropdown() {
    return cy.get("#dropdown-class-example");
  }

  //Upload file locators - upload file
  getUploadFile() {
    return cy.get('input[type="file"]');
  }

  //Upload file locators - After File upload
  getAfterFileUpload() {
    return cy.get('input[oninput="uploadImage()"]');
  }

  //Open tab locators
  getOpenTab() {
    return cy.get("#opentab");
  }

  //Alert locators - Alert Input text
  getAlertInputText() {
    return cy.get('input[id="name"]');
  }

  //Alert locators - Alert button
  getAlertButton() {
    return cy.get('input[id="alertbtn"]');
  }

  //Alert locators - confirm button
  getAlertConfirm() {
    return cy.get('[value="Confirm"]');
  }

  //Text Box visibility locators - Text box
  getDisplayTextBox() {
    return cy.get("#displayed-text");
  }

  //Text Box visibility locators - Hide Text box
  getHideTextBox() {
    return cy.get("#hide-textbox");
  }

  //Text Box visibility locators - Show Text box
  getShowTextBox() {
    return cy.get("#show-textbox");
  }

  //Mousehover locator
  getMouseHover() {
    return cy.get("div.hover-content");
  }

  //iframe locator
  getiframe()
  {
    return cy.get("#courses-iframe")
  }

  //iframe url
  getiframeURL()
  {
    return cy.get('iframe[src="https://easygenerator.com/"]')
  }

  //Locators on navigated URL
  getPricing()
  {
    return cy.get("#menu-item-100599 > a");
  }
}

export default TaskPageObjects;
