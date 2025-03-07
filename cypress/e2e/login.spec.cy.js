import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

const selectorslist = {
usernameField: "[name='username']",
passwordField: "[name='password']",
loginButton: "[type='submit']",
sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
dashboardGrid: ".orangehrm-dashboard-grid",
wrongCredentialAlert: "[role='alert']"

}

  it('Login-success', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type(userData.userSucess.username)
    cy.get(selectorslist.passwordField).type(userData.userSucess.password)
    cy.get(selectorslist.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorslist.dashboardGrid)
  })
it('Login-fail', () => {
  cy.visit('/auth/login')
  cy.get(selectorslist.usernameField).type(userData.userFail.username)
  cy.get(selectorslist.passwordField).type(userData.userFail.password)
  cy.get(selectorslist.loginButton).click()
  cy.get(selectorslist.wrongCredentialAlert)
})
})