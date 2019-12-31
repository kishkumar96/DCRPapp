import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { ProjectComponentsPage, ProjectDeleteDialog, ProjectUpdatePage } from './project.page-object';

const expect = chai.expect;

describe('Project e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let projectComponentsPage: ProjectComponentsPage;
  let projectUpdatePage: ProjectUpdatePage;
  let projectDeleteDialog: ProjectDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Projects', async () => {
    await navBarPage.goToEntity('project');
    projectComponentsPage = new ProjectComponentsPage();
    await browser.wait(ec.visibilityOf(projectComponentsPage.title), 5000);
    expect(await projectComponentsPage.getTitle()).to.eq('trainingApplicationApp.project.home.title');
  });

  it('should load create Project page', async () => {
    await projectComponentsPage.clickOnCreateButton();
    projectUpdatePage = new ProjectUpdatePage();
    expect(await projectUpdatePage.getPageTitle()).to.eq('trainingApplicationApp.project.home.createOrEditLabel');
    await projectUpdatePage.cancel();
  });

  it('should create and save Projects', async () => {
    const nbButtonsBeforeCreate = await projectComponentsPage.countDeleteButtons();

    await projectComponentsPage.clickOnCreateButton();
    await promise.all([
      projectUpdatePage.setProjectCodeInput('64c99148-3908-465d-8c4a-e510e3ade974'),
      projectUpdatePage.setProjectNameInput('projectName'),
      projectUpdatePage.setObjectiveInput('objective'),
      projectUpdatePage.setWorkPlanInput('workPlan'),
      projectUpdatePage.setKraInput('kra'),
      projectUpdatePage.setOutputInput('output'),
      projectUpdatePage.setEvaluationInput('evaluation'),
      projectUpdatePage.setBudgetInput('5'),
      projectUpdatePage.setHeadOffProjectInput('headOffProject'),
      projectUpdatePage.setStartDateInput('2000-12-31'),
      projectUpdatePage.setEndDateInput('2000-12-31'),
      projectUpdatePage.setTargetAudienceInput('targetAudience'),
      projectUpdatePage.setOverviewAboutProjectInput('overviewAboutProject')
    ]);
    expect(await projectUpdatePage.getProjectCodeInput()).to.eq(
      '64c99148-3908-465d-8c4a-e510e3ade974',
      'Expected ProjectCode value to be equals to 64c99148-3908-465d-8c4a-e510e3ade974'
    );
    expect(await projectUpdatePage.getProjectNameInput()).to.eq('projectName', 'Expected ProjectName value to be equals to projectName');
    expect(await projectUpdatePage.getObjectiveInput()).to.eq('objective', 'Expected Objective value to be equals to objective');
    expect(await projectUpdatePage.getWorkPlanInput()).to.eq('workPlan', 'Expected WorkPlan value to be equals to workPlan');
    expect(await projectUpdatePage.getKraInput()).to.eq('kra', 'Expected Kra value to be equals to kra');
    expect(await projectUpdatePage.getOutputInput()).to.eq('output', 'Expected Output value to be equals to output');
    expect(await projectUpdatePage.getEvaluationInput()).to.eq('evaluation', 'Expected Evaluation value to be equals to evaluation');
    expect(await projectUpdatePage.getBudgetInput()).to.eq('5', 'Expected budget value to be equals to 5');
    expect(await projectUpdatePage.getHeadOffProjectInput()).to.eq(
      'headOffProject',
      'Expected HeadOffProject value to be equals to headOffProject'
    );
    expect(await projectUpdatePage.getStartDateInput()).to.eq('2000-12-31', 'Expected startDate value to be equals to 2000-12-31');
    expect(await projectUpdatePage.getEndDateInput()).to.eq('2000-12-31', 'Expected endDate value to be equals to 2000-12-31');
    expect(await projectUpdatePage.getTargetAudienceInput()).to.eq(
      'targetAudience',
      'Expected TargetAudience value to be equals to targetAudience'
    );
    expect(await projectUpdatePage.getOverviewAboutProjectInput()).to.eq(
      'overviewAboutProject',
      'Expected OverviewAboutProject value to be equals to overviewAboutProject'
    );
    await projectUpdatePage.save();
    expect(await projectUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await projectComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Project', async () => {
    const nbButtonsBeforeDelete = await projectComponentsPage.countDeleteButtons();
    await projectComponentsPage.clickOnLastDeleteButton();

    projectDeleteDialog = new ProjectDeleteDialog();
    expect(await projectDeleteDialog.getDialogTitle()).to.eq('trainingApplicationApp.project.delete.question');
    await projectDeleteDialog.clickOnConfirmButton();

    expect(await projectComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
