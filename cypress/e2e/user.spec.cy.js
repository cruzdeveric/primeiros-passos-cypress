import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

const selectorslist = {
usernameField: "[name='username']",
passwordField: "[name='password']",
loginButton: "[type='submit']",
sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
dashboardGrid: ".orangehrm-dashboard-grid",
wrongCredentialAlert: "[role='alert']",
myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
firstNameField: "[name='firstName']",
lastNameField:"[name='lastName']",
nickNameField:".oxd-input--active",
}

  it.only('Login-success', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type(userData.userSucess.username)
    cy.get(selectorslist.passwordField).type(userData.userSucess.password)
    cy.get(selectorslist.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorslist.dashboardGrid)
    cy.get(selectorslist.myInfoButton).click()
  cy.get(selectorslist.nickNameField).eq(4).type('NicknameTest')
})
it('Login-fail', () => {
  cy.visit('/auth/login')
  cy.get(selectorslist.usernameField).type(userData.userFail.username)
  cy.get(selectorslist.passwordField).type(userData.userFail.password)
  cy.get(selectorslist.loginButton).click()
  cy.get(selectorslist.wrongCredentialAlert)
})
})