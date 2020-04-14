import { element, by, ElementFinder } from 'protractor';

export class ParticipantEntryComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-participant-entry div table .btn-danger'));
  title = element.all(by.css('jhi-participant-entry div h2#page-heading span')).first();

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

export class ParticipantEntryUpdatePage {
  pageTitle = element(by.id('jhi-participant-entry-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  individualCodeInput = element(by.id('field_individualCode'));
  firstNameInput = element(by.id('field_firstName'));
  lastNameInput = element(by.id('field_lastName'));
  countrySelect = element(by.id('field_country'));
  genderSelect = element(by.id('field_gender'));
  titleSelect = element(by.id('field_title'));
  dateOfBirthInput = element(by.id('field_dateOfBirth'));
  organizationInput = element(by.id('field_organization'));
  sectorSelect = element(by.id('field_sector'));
  positionInput = element(by.id('field_position'));
  contactAddressInput = element(by.id('field_contactAddress'));
  workPhoneInput = element(by.id('field_workPhone'));
  faxNumberInput = element(by.id('field_faxNumber'));
  homePhoneInput = element(by.id('field_homePhone'));
  emailInput = element(by.id('field_email'));
  previousEmploymentInput = element(by.id('field_previousEmployment'));
  specialGeneralSelect = element(by.id('field_specialGeneral'));
  specialDisasterManagementSelect = element(by.id('field_specialDisasterManagement'));
  educationLevelSelect = element(by.id('field_educationLevel'));
  trainerSelect = element(by.id('field_trainer'));
  commentsInput = element(by.id('field_comments'));
  sessionCodeSelect = element(by.id('field_sessionCode'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setIndividualCodeInput(individualCode: string): Promise<void> {
    await this.individualCodeInput.sendKeys(individualCode);
  }

  async getIndividualCodeInput(): Promise<string> {
    return await this.individualCodeInput.getAttribute('value');
  }

  async setFirstNameInput(firstName: string): Promise<void> {
    await this.firstNameInput.sendKeys(firstName);
  }

  async getFirstNameInput(): Promise<string> {
    return await this.firstNameInput.getAttribute('value');
  }

  async setLastNameInput(lastName: string): Promise<void> {
    await this.lastNameInput.sendKeys(lastName);
  }

  async getLastNameInput(): Promise<string> {
    return await this.lastNameInput.getAttribute('value');
  }

  async setCountrySelect(country: string): Promise<void> {
    await this.countrySelect.sendKeys(country);
  }

  async getCountrySelect(): Promise<string> {
    return await this.countrySelect.element(by.css('option:checked')).getText();
  }

  async countrySelectLastOption(): Promise<void> {
    await this.countrySelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async setGenderSelect(gender: string): Promise<void> {
    await this.genderSelect.sendKeys(gender);
  }

  async getGenderSelect(): Promise<string> {
    return await this.genderSelect.element(by.css('option:checked')).getText();
  }

  async genderSelectLastOption(): Promise<void> {
    await this.genderSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async setTitleSelect(title: string): Promise<void> {
    await this.titleSelect.sendKeys(title);
  }

  async getTitleSelect(): Promise<string> {
    return await this.titleSelect.element(by.css('option:checked')).getText();
  }

  async titleSelectLastOption(): Promise<void> {
    await this.titleSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async setDateOfBirthInput(dateOfBirth: string): Promise<void> {
    await this.dateOfBirthInput.sendKeys(dateOfBirth);
  }

  async getDateOfBirthInput(): Promise<string> {
    return await this.dateOfBirthInput.getAttribute('value');
  }

  async setOrganizationInput(organization: string): Promise<void> {
    await this.organizationInput.sendKeys(organization);
  }

  async getOrganizationInput(): Promise<string> {
    return await this.organizationInput.getAttribute('value');
  }

  async setSectorSelect(sector: string): Promise<void> {
    await this.sectorSelect.sendKeys(sector);
  }

  async getSectorSelect(): Promise<string> {
    return await this.sectorSelect.element(by.css('option:checked')).getText();
  }

  async sectorSelectLastOption(): Promise<void> {
    await this.sectorSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async setPositionInput(position: string): Promise<void> {
    await this.positionInput.sendKeys(position);
  }

  async getPositionInput(): Promise<string> {
    return await this.positionInput.getAttribute('value');
  }

  async setContactAddressInput(contactAddress: string): Promise<void> {
    await this.contactAddressInput.sendKeys(contactAddress);
  }

  async getContactAddressInput(): Promise<string> {
    return await this.contactAddressInput.getAttribute('value');
  }

  async setWorkPhoneInput(workPhone: string): Promise<void> {
    await this.workPhoneInput.sendKeys(workPhone);
  }

  async getWorkPhoneInput(): Promise<string> {
    return await this.workPhoneInput.getAttribute('value');
  }

  async setFaxNumberInput(faxNumber: string): Promise<void> {
    await this.faxNumberInput.sendKeys(faxNumber);
  }

  async getFaxNumberInput(): Promise<string> {
    return await this.faxNumberInput.getAttribute('value');
  }

  async setHomePhoneInput(homePhone: string): Promise<void> {
    await this.homePhoneInput.sendKeys(homePhone);
  }

  async getHomePhoneInput(): Promise<string> {
    return await this.homePhoneInput.getAttribute('value');
  }

  async setEmailInput(email: string): Promise<void> {
    await this.emailInput.sendKeys(email);
  }

  async getEmailInput(): Promise<string> {
    return await this.emailInput.getAttribute('value');
  }

  async setPreviousEmploymentInput(previousEmployment: string): Promise<void> {
    await this.previousEmploymentInput.sendKeys(previousEmployment);
  }

  async getPreviousEmploymentInput(): Promise<string> {
    return await this.previousEmploymentInput.getAttribute('value');
  }

  async setSpecialGeneralSelect(specialGeneral: string): Promise<void> {
    await this.specialGeneralSelect.sendKeys(specialGeneral);
  }

  async getSpecialGeneralSelect(): Promise<string> {
    return await this.specialGeneralSelect.element(by.css('option:checked')).getText();
  }

  async specialGeneralSelectLastOption(): Promise<void> {
    await this.specialGeneralSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async setSpecialDisasterManagementSelect(specialDisasterManagement: string): Promise<void> {
    await this.specialDisasterManagementSelect.sendKeys(specialDisasterManagement);
  }

  async getSpecialDisasterManagementSelect(): Promise<string> {
    return await this.specialDisasterManagementSelect.element(by.css('option:checked')).getText();
  }

  async specialDisasterManagementSelectLastOption(): Promise<void> {
    await this.specialDisasterManagementSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async setEducationLevelSelect(educationLevel: string): Promise<void> {
    await this.educationLevelSelect.sendKeys(educationLevel);
  }

  async getEducationLevelSelect(): Promise<string> {
    return await this.educationLevelSelect.element(by.css('option:checked')).getText();
  }

  async educationLevelSelectLastOption(): Promise<void> {
    await this.educationLevelSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async setTrainerSelect(trainer: string): Promise<void> {
    await this.trainerSelect.sendKeys(trainer);
  }

  async getTrainerSelect(): Promise<string> {
    return await this.trainerSelect.element(by.css('option:checked')).getText();
  }

  async trainerSelectLastOption(): Promise<void> {
    await this.trainerSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async setCommentsInput(comments: string): Promise<void> {
    await this.commentsInput.sendKeys(comments);
  }

  async getCommentsInput(): Promise<string> {
    return await this.commentsInput.getAttribute('value');
  }

  async sessionCodeSelectLastOption(): Promise<void> {
    await this.sessionCodeSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async sessionCodeSelectOption(option: string): Promise<void> {
    await this.sessionCodeSelect.sendKeys(option);
  }

  getSessionCodeSelect(): ElementFinder {
    return this.sessionCodeSelect;
  }

  async getSessionCodeSelectedOption(): Promise<string> {
    return await this.sessionCodeSelect.element(by.css('option:checked')).getText();
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

export class ParticipantEntryDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-participantEntry-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-participantEntry'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
