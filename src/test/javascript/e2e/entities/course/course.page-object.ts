import { element, by, ElementFinder } from 'protractor';

export class CourseComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-course div table .btn-danger'));
  title = element.all(by.css('jhi-course div h2#page-heading span')).first();

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

export class CourseUpdatePage {
  pageTitle = element(by.id('jhi-course-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  courseCodeInput = element(by.id('field_courseCode'));
  courseTitleInput = element(by.id('field_courseTitle'));
  methodSelect = element(by.id('field_method'));
  durationInput = element(by.id('field_duration'));
  periodSelect = element(by.id('field_period'));
  descriptionInput = element(by.id('field_description'));
  commentsInput = element(by.id('field_comments'));
  projectCodeSelect = element(by.id('field_projectCode'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setCourseCodeInput(courseCode: string): Promise<void> {
    await this.courseCodeInput.sendKeys(courseCode);
  }

  async getCourseCodeInput(): Promise<string> {
    return await this.courseCodeInput.getAttribute('value');
  }

  async setCourseTitleInput(courseTitle: string): Promise<void> {
    await this.courseTitleInput.sendKeys(courseTitle);
  }

  async getCourseTitleInput(): Promise<string> {
    return await this.courseTitleInput.getAttribute('value');
  }

  async setMethodSelect(method: string): Promise<void> {
    await this.methodSelect.sendKeys(method);
  }

  async getMethodSelect(): Promise<string> {
    return await this.methodSelect.element(by.css('option:checked')).getText();
  }

  async methodSelectLastOption(): Promise<void> {
    await this.methodSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async setDurationInput(duration: string): Promise<void> {
    await this.durationInput.sendKeys(duration);
  }

  async getDurationInput(): Promise<string> {
    return await this.durationInput.getAttribute('value');
  }

  async setPeriodSelect(period: string): Promise<void> {
    await this.periodSelect.sendKeys(period);
  }

  async getPeriodSelect(): Promise<string> {
    return await this.periodSelect.element(by.css('option:checked')).getText();
  }

  async periodSelectLastOption(): Promise<void> {
    await this.periodSelect
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

  async setCommentsInput(comments: string): Promise<void> {
    await this.commentsInput.sendKeys(comments);
  }

  async getCommentsInput(): Promise<string> {
    return await this.commentsInput.getAttribute('value');
  }

  async projectCodeSelectLastOption(): Promise<void> {
    await this.projectCodeSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async projectCodeSelectOption(option: string): Promise<void> {
    await this.projectCodeSelect.sendKeys(option);
  }

  getProjectCodeSelect(): ElementFinder {
    return this.projectCodeSelect;
  }

  async getProjectCodeSelectedOption(): Promise<string> {
    return await this.projectCodeSelect.element(by.css('option:checked')).getText();
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

export class CourseDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-course-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-course'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
