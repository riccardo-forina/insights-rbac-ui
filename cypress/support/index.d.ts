declare namespace Cypress {
  interface Chainable {
    login(enableWorkspaces: boolean): Chainable;
    visitIAMOverview(): Chainable;
    visitIAMWorkspaces(): Chainable;
  }
}
