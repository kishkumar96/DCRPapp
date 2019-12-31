import { element, by, ElementFinder } from 'protractor';

export class ProjectComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-project div table .btn-danger'));
  title = element.all(by.css('jhi-project div h2#page-heading span')).first();

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

export class ProjectUpdatePage {
  pageTitle = element(by.id('jhi-project-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  projectCodeInput = element(by.id('field_projectCode'));
  projectNameInput = element(by.id('field_projectName'));
  objectiveInput = element(by.id('field_objective'));
  workPlanInput = element(by.id('field_workPlan'));
  kraInput = element(by.id('field_kra'));
  outputInput = element(by.id('field_output'));
  evaluationInput = element(by.id('field_evaluation'));
  budgetInput = element(by.id('field_budget'));
  headOffProjectInput = element(by.id('field_headOffProject'));
  startDateInput = element(by.id('field_startDate'));
  endDateInput = element(by.id('field_endDate'));
  targetAudienceInput = element(by.id('field_targetAudience'));
  overviewAboutProjectInput = element(by.id('field_overviewAboutProject'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setProjectCodeInput(projectCode: string): Promise<void> {
    await this.projectCodeInput.sendKeys(projectCode);
  }

  async getProjectCodeInput(): Promise<string> {
    return await this.projectCodeInput.getAttribute('value');
  }

  async setProjectNameInput(projectName: string): Promise<void> {
    await this.projectNameInput.sendKeys(projectName);
  }

  async getProjectNameInput(): Promise<string> {
    return await this.projectNameInput.getAttribute('value');
  }

  async setObjectiveInput(objective: string): Promise<void> {
    await this.objectiveInput.sendKeys(objective);
  }

  async getObjectiveInput(): Promise<string> {
    return await this.objectiveInput.getAttribute('value');
  }

  async setWorkPlanInput(workPlan: string): Promise<void> {
    await this.workPlanInput.sendKeys(workPlan);
  }

  async getWorkPlanInput(): Promise<string> {
    return await this.workPlanInput.getAttribute('value');
  }

  async setKraInput(kra: string): Promise<void> {
    await this.kraInput.sendKeys(kra);
  }

  async getKraInput(): Promise<string> {
    return await this.kraInput.getAttribute('value');
  }

  async setOutputInput(output: string): Promise<void> {
    await this.outputInput.sendKeys(output);
  }

  async getOutputInput(): Promise<string> {
    return await this.outputInput.getAttribute('value');
  }

  async setEvaluationInput(evaluation: string): Promise<void> {
    await this.evaluationInput.sendKeys(evaluation);
  }

  async getEvaluationInput(): Promise<string> {
    return await this.evaluationInput.getAttribute('value');
  }

  async setBudgetInput(budget: string): Promise<void> {
    await this.budgetInput.sendKeys(budget);
  }

  async getBudgetInput(): Promise<string> {
    return await this.budgetInput.getAttribute('value');
  }

  async setHeadOffProjectInput(headOffProject: string): Promise<void> {
    await this.headOffProjectInput.sendKeys(headOffProject);
  }

  async getHeadOffProjectInput(): Promise<string> {
    return await this.headOffProjectInput.getAttribute('value');
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

  async setTargetAudienceInput(targetAudience: string): Promise<void> {
    await this.targetAudienceInput.sendKeys(targetAudience);
  }

  async getTargetAudienceInput(): Promise<string> {
    return await this.targetAudienceInput.getAttribute('value');
  }

  async setOverviewAboutProjectInput(overviewAboutProject: string): Promise<void> {
    await this.overviewAboutProjectInput.sendKeys(overviewAboutProject);
  }

  async getOverviewAboutProjectInput(): Promise<string> {
    return await this.overviewAboutProjectInput.getAttribute('value');
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

export class ProjectDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-project-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-project'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
