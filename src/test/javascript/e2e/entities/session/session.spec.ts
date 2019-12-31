import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { SessionComponentsPage, SessionDeleteDialog, SessionUpdatePage } from './session.page-object';

const expect = chai.expect;

describe('Session e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let sessionComponentsPage: SessionComponentsPage;
  let sessionUpdatePage: SessionUpdatePage;
  let sessionDeleteDialog: SessionDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Sessions', async () => {
    await navBarPage.goToEntity('session');
    sessionComponentsPage = new SessionComponentsPage();
    await browser.wait(ec.visibilityOf(sessionComponentsPage.title), 5000);
    expect(await sessionComponentsPage.getTitle()).to.eq('trainingApplicationApp.session.home.title');
  });

  it('should load create Session page', async () => {
    await sessionComponentsPage.clickOnCreateButton();
    sessionUpdatePage = new SessionUpdatePage();
    expect(await sessionUpdatePage.getPageTitle()).to.eq('trainingApplicationApp.session.home.createOrEditLabel');
    await sessionUpdatePage.cancel();
  });

  it('should create and save Sessions', async () => {
    const nbButtonsBeforeCreate = await sessionComponentsPage.countDeleteButtons();

    await sessionComponentsPage.clickOnCreateButton();
    await promise.all([
      sessionUpdatePage.setSessionCodeInput('64c99148-3908-465d-8c4a-e510e3ade974'),
      sessionUpdatePage.setNameOfActivityInput('nameOfActivity'),
      sessionUpdatePage.locationSelectLastOption(),
      sessionUpdatePage.setStartDateInput('2000-12-31'),
      sessionUpdatePage.setEndDateInput('2000-12-31'),
      sessionUpdatePage.setAttendeesNumberInput('5'),
      sessionUpdatePage.sessionTypeSelectLastOption(),
      sessionUpdatePage.setDescriptionInput('description'),
      sessionUpdatePage.setCommentInput('comment'),
      sessionUpdatePage.courseCodeSelectLastOption()
    ]);
    expect(await sessionUpdatePage.getSessionCodeInput()).to.eq(
      '64c99148-3908-465d-8c4a-e510e3ade974',
      'Expected SessionCode value to be equals to 64c99148-3908-465d-8c4a-e510e3ade974'
    );
    expect(await sessionUpdatePage.getNameOfActivityInput()).to.eq(
      'nameOfActivity',
      'Expected NameOfActivity value to be equals to nameOfActivity'
    );
    expect(await sessionUpdatePage.getStartDateInput()).to.eq('2000-12-31', 'Expected startDate value to be equals to 2000-12-31');
    expect(await sessionUpdatePage.getEndDateInput()).to.eq('2000-12-31', 'Expected endDate value to be equals to 2000-12-31');
    expect(await sessionUpdatePage.getAttendeesNumberInput()).to.eq('5', 'Expected attendeesNumber value to be equals to 5');
    expect(await sessionUpdatePage.getDescriptionInput()).to.eq('description', 'Expected Description value to be equals to description');
    expect(await sessionUpdatePage.getCommentInput()).to.eq('comment', 'Expected Comment value to be equals to comment');
    await sessionUpdatePage.save();
    expect(await sessionUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await sessionComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Session', async () => {
    const nbButtonsBeforeDelete = await sessionComponentsPage.countDeleteButtons();
    await sessionComponentsPage.clickOnLastDeleteButton();

    sessionDeleteDialog = new SessionDeleteDialog();
    expect(await sessionDeleteDialog.getDialogTitle()).to.eq('trainingApplicationApp.session.delete.question');
    await sessionDeleteDialog.clickOnConfirmButton();

    expect(await sessionComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
