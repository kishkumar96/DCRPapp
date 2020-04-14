import { element, by, ElementFinder } from 'protractor';

export class SessionComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-session div table .btn-danger'));
  title = element.all(by.css('jhi-session div h2#page-heading span')).first();

  async clickOnCreateButton(): Promise<void> {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(): Promise<void> {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons(): Promise<number> {
    return this.deleteButtons.count();
  }

  async getTitle(): Promise<string> {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class SessionUpdatePage {
  pageTitle = element(by.id('jhi-session-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  sessionCodeInput = element(by.id('field_sessionCode'));
  nameOfActivityInput = element(by.id('field_nameOfActivity'));
  locationSelect = element(by.id('field_location'));
  startDateInput = element(by.id('field_startDate'));
  endDateInput = element(by.id('field_endDate'));
  attendeesNumberInput = element(by.id('field_attendeesNumber'));
  sessionTypeSelect = element(by.id('field_sessionType'));
  descriptionInput = element(by.id('field_description'));
  commentInput = element(by.id('field_comment'));
  courseCodeSelect = element(by.id('field_courseCode'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setSessionCodeInput(sessionCode: string): Promise<void> {
    await this.sessionCodeInput.sendKeys(sessionCode);
  }

  async getSessionCodeInput(): Promise<string> {
    return await this.sessionCodeInput.getAttribute('value');
  }

  async setNameOfActivityInput(nameOfActivity: string): Promise<void> {
    await this.nameOfActivityInput.sendKeys(nameOfActivity);
  }

  async getNameOfActivityInput(): Promise<string> {
    return await this.nameOfActivityInput.getAttribute('value');
  }

  async setLocationSelect(location: string): Promise<void> {
    await this.locationSelect.sendKeys(location);
  }

  async getLocationSelect(): Promise<string> {
    return await this.locationSelect.element(by.css('option:checked')).getText();
  }

  async locationSelectLastOption(): Promise<void> {
    await this.locationSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async setStartDateInput(startDate: string): Promise<void> {
    await this.startDateInput.sendKeys(startDate);
  }

  async getStartDateInput(): Promise<string> {
    return await this.startDateInput.getAttribute('value');
  }

  async setEndDateInput(endDate: string): Promise<void> {
    await this.endDateInput.sendKeys(endDate);
  }

  async getEndDateInput(): Promise<string> {
    return await this.endDateInput.getAttribute('value');
  }

  async setAttendeesNumberInput(attendeesNumber: string): Promise<void> {
    await this.attendeesNumberInput.sendKeys(attendeesNumber);
  }

  async getAttendeesNumberInput(): Promise<string> {
    return await this.attendeesNumberInput.getAttribute('value');
  }

  async setSessionTypeSelect(sessionType: string): Promise<void> {
    await this.sessionTypeSelect.sendKeys(sessionType);
  }

  async getSessionTypeSelect(): Promise<string> {
    return await this.sessionTypeSelect.element(by.css('option:checked')).getText();
  }

  async sessionTypeSelectLastOption(): Promise<void> {
    await this.sessionTypeSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async setDescriptionInput(description: string): Promise<void> {
    await this.descriptionInput.sendKeys(description);
  }

  async getDescriptionInput(): Promise<string> {
    return await this.descriptionInput.getAttribute('value');
  }

  async setCommentInput(comment: string): Promise<void> {
    await this.commentInput.sendKeys(comment);
  }

  async getCommentInput(): Promise<string> {
    return await this.commentInput.getAttribute('value');
  }

  async courseCodeSelectLastOption(): Promise<void> {
    await this.courseCodeSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async courseCodeSelectOption(option: string): Promise<void> {
    await this.courseCodeSelect.sendKeys(option);
  }

  getCourseCodeSelect(): ElementFinder {
    return this.courseCodeSelect;
  }

  async getCourseCodeSelectedOption(): Promise<string> {
    return await this.courseCodeSelect.element(by.css('option:checked')).getText();
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class SessionDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-session-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-session'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
