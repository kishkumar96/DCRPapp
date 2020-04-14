import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { CourseComponentsPage, CourseDeleteDialog, CourseUpdatePage } from './course.page-object';

const expect = chai.expect;

describe('Course e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let courseComponentsPage: CourseComponentsPage;
  let courseUpdatePage: CourseUpdatePage;
  let courseDeleteDialog: CourseDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Courses', async () => {
    await navBarPage.goToEntity('course');
    courseComponentsPage = new CourseComponentsPage();
    await browser.wait(ec.visibilityOf(courseComponentsPage.title), 5000);
    expect(await courseComponentsPage.getTitle()).to.eq('trainingApplicationApp.course.home.title');
  });

  it('should load create Course page', async () => {
    await courseComponentsPage.clickOnCreateButton();
    courseUpdatePage = new CourseUpdatePage();
    expect(await courseUpdatePage.getPageTitle()).to.eq('trainingApplicationApp.course.home.createOrEditLabel');
    await courseUpdatePage.cancel();
  });

  it('should create and save Courses', async () => {
    const nbButtonsBeforeCreate = await courseComponentsPage.countDeleteButtons();

    await courseComponentsPage.clickOnCreateButton();
    await promise.all([
      courseUpdatePage.setCourseCodeInput('64c99148-3908-465d-8c4a-e510e3ade974'),
      courseUpdatePage.setCourseTitleInput('courseTitle'),
      courseUpdatePage.methodSelectLastOption(),
      courseUpdatePage.setDurationInput('5'),
      courseUpdatePage.periodSelectLastOption(),
      courseUpdatePage.setDescriptionInput('description'),
      courseUpdatePage.setCommentsInput('comments'),
      courseUpdatePage.projectCodeSelectLastOption()
    ]);
    expect(await courseUpdatePage.getCourseCodeInput()).to.eq(
      '64c99148-3908-465d-8c4a-e510e3ade974',
      'Expected CourseCode value to be equals to 64c99148-3908-465d-8c4a-e510e3ade974'
    );
    expect(await courseUpdatePage.getCourseTitleInput()).to.eq('courseTitle', 'Expected CourseTitle value to be equals to courseTitle');
    expect(await courseUpdatePage.getDurationInput()).to.eq('5', 'Expected duration value to be equals to 5');
    expect(await courseUpdatePage.getDescriptionInput()).to.eq('description', 'Expected Description value to be equals to description');
    expect(await courseUpdatePage.getCommentsInput()).to.eq('comments', 'Expected Comments value to be equals to comments');
    await courseUpdatePage.save();
    expect(await courseUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await courseComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Course', async () => {
    const nbButtonsBeforeDelete = await courseComponentsPage.countDeleteButtons();
    await courseComponentsPage.clickOnLastDeleteButton();

    courseDeleteDialog = new CourseDeleteDialog();
    expect(await courseDeleteDialog.getDialogTitle()).to.eq('trainingApplicationApp.course.delete.question');
    await courseDeleteDialog.clickOnConfirmButton();

    expect(await courseComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
