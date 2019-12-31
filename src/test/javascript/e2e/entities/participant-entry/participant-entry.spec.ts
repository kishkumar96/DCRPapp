import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { ParticipantEntryComponentsPage, ParticipantEntryDeleteDialog, ParticipantEntryUpdatePage } from './participant-entry.page-object';

const expect = chai.expect;

describe('ParticipantEntry e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let participantEntryComponentsPage: ParticipantEntryComponentsPage;
  let participantEntryUpdatePage: ParticipantEntryUpdatePage;
  let participantEntryDeleteDialog: ParticipantEntryDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load ParticipantEntries', async () => {
    await navBarPage.goToEntity('participant-entry');
    participantEntryComponentsPage = new ParticipantEntryComponentsPage();
    await browser.wait(ec.visibilityOf(participantEntryComponentsPage.title), 5000);
    expect(await participantEntryComponentsPage.getTitle()).to.eq('trainingApplicationApp.participantEntry.home.title');
  });

  it('should load create ParticipantEntry page', async () => {
    await participantEntryComponentsPage.clickOnCreateButton();
    participantEntryUpdatePage = new ParticipantEntryUpdatePage();
    expect(await participantEntryUpdatePage.getPageTitle()).to.eq('trainingApplicationApp.participantEntry.home.createOrEditLabel');
    await participantEntryUpdatePage.cancel();
  });

  it('should create and save ParticipantEntries', async () => {
    const nbButtonsBeforeCreate = await participantEntryComponentsPage.countDeleteButtons();

    await participantEntryComponentsPage.clickOnCreateButton();
    await promise.all([
      participantEntryUpdatePage.setIndividualCodeInput('64c99148-3908-465d-8c4a-e510e3ade974'),
      participantEntryUpdatePage.setFirstNameInput('firstName'),
      participantEntryUpdatePage.setLastNameInput('lastName'),
      participantEntryUpdatePage.countrySelectLastOption(),
      participantEntryUpdatePage.genderSelectLastOption(),
      participantEntryUpdatePage.titleSelectLastOption(),
      participantEntryUpdatePage.setDateOfBirthInput('2000-12-31'),
      participantEntryUpdatePage.setOrganizationInput('organization'),
      participantEntryUpdatePage.sectorSelectLastOption(),
      participantEntryUpdatePage.setPositionInput('position'),
      participantEntryUpdatePage.setContactAddressInput('contactAddress'),
      participantEntryUpdatePage.setWorkPhoneInput('5'),
      participantEntryUpdatePage.setFaxNumberInput('5'),
      participantEntryUpdatePage.setHomePhoneInput('5'),
      participantEntryUpdatePage.setEmailInput('email'),
      participantEntryUpdatePage.setPreviousEmploymentInput('previousEmployment'),
      participantEntryUpdatePage.specialGeneralSelectLastOption(),
      participantEntryUpdatePage.specialDisasterManagementSelectLastOption(),
      participantEntryUpdatePage.educationLevelSelectLastOption(),
      participantEntryUpdatePage.trainerSelectLastOption(),
      participantEntryUpdatePage.setCommentsInput('comments')
      // participantEntryUpdatePage.sessionCodeSelectLastOption(),
    ]);
    expect(await participantEntryUpdatePage.getIndividualCodeInput()).to.eq(
      '64c99148-3908-465d-8c4a-e510e3ade974',
      'Expected IndividualCode value to be equals to 64c99148-3908-465d-8c4a-e510e3ade974'
    );
    expect(await participantEntryUpdatePage.getFirstNameInput()).to.eq('firstName', 'Expected FirstName value to be equals to firstName');
    expect(await participantEntryUpdatePage.getLastNameInput()).to.eq('lastName', 'Expected LastName value to be equals to lastName');
    expect(await participantEntryUpdatePage.getDateOfBirthInput()).to.eq(
      '2000-12-31',
      'Expected dateOfBirth value to be equals to 2000-12-31'
    );
    expect(await participantEntryUpdatePage.getOrganizationInput()).to.eq(
      'organization',
      'Expected Organization value to be equals to organization'
    );
    expect(await participantEntryUpdatePage.getPositionInput()).to.eq('position', 'Expected Position value to be equals to position');
    expect(await participantEntryUpdatePage.getContactAddressInput()).to.eq(
      'contactAddress',
      'Expected ContactAddress value to be equals to contactAddress'
    );
    expect(await participantEntryUpdatePage.getWorkPhoneInput()).to.eq('5', 'Expected workPhone value to be equals to 5');
    expect(await participantEntryUpdatePage.getFaxNumberInput()).to.eq('5', 'Expected faxNumber value to be equals to 5');
    expect(await participantEntryUpdatePage.getHomePhoneInput()).to.eq('5', 'Expected homePhone value to be equals to 5');
    expect(await participantEntryUpdatePage.getEmailInput()).to.eq('email', 'Expected Email value to be equals to email');
    expect(await participantEntryUpdatePage.getPreviousEmploymentInput()).to.eq(
      'previousEmployment',
      'Expected PreviousEmployment value to be equals to previousEmployment'
    );
    expect(await participantEntryUpdatePage.getCommentsInput()).to.eq('comments', 'Expected Comments value to be equals to comments');
    await participantEntryUpdatePage.save();
    expect(await participantEntryUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await participantEntryComponentsPage.countDeleteButtons()).to.eq(
      nbButtonsBeforeCreate + 1,
      'Expected one more entry in the table'
    );
  });

  it('should delete last ParticipantEntry', async () => {
    const nbButtonsBeforeDelete = await participantEntryComponentsPage.countDeleteButtons();
    await participantEntryComponentsPage.clickOnLastDeleteButton();

    participantEntryDeleteDialog = new ParticipantEntryDeleteDialog();
    expect(await participantEntryDeleteDialog.getDialogTitle()).to.eq('trainingApplicationApp.participantEntry.delete.question');
    await participantEntryDeleteDialog.clickOnConfirmButton();

    expect(await participantEntryComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
