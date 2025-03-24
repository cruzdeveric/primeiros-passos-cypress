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
genericField:".oxd-input--active",
dateField:"[placeholder='yyyy-dd-mm']",
dateclosebutton: ".--close",
saveButton: "[type='submit']"

}

  it.only('Login-success', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type(userData.userSucess.username)
    cy.get(selectorslist.passwordField).type(userData.userSucess.password)
    cy.get(selectorslist.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorslist.dashboardGrid)
    cy.get(selectorslist.myInfoButton).click()
    cy.get(selectorslist.firstNameField).clear().type('Firstnametest')
    cy.get(selectorslist.lastNameField).clear().type('LastnameTest')
    cy.get(selectorslist.genericField).eq(3).clear().type('EmployID')
    cy.get(selectorslist.genericField).eq(4).clear().type('OTHERID')
    cy.get(selectorslist.genericField).eq(5).clear().type('15141822')
    cy.get(selectorslist.genericField).eq(6).type('2024-19-03')
    cy.get(selectorslist.dateclosebutton).click()
    cy.get(selectorslist.saveButton).eq(0).click()

})
it('Login-fail', () => {
  cy.visit('/auth/login')
  cy.get(selectorslist.usernameField).type(userData.userFail.username)
  cy.get(selectorslist.passwordField).type(userData.userFail.password)
  cy.get(selectorslist.loginButton).click()
  cy.get(selectorslist.wrongCredentialAlert)
})
})