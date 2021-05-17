/// <reference types="cypress" />


Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Color Pallete Functionality -  scenarios", () => {

  const functionality = "Color_Palette";
  const scenario = ["NoChange","Change"];
  const version = Cypress.config("version");
  const takeScreenshoot = Cypress.config("takeScreenshoot");
  const url = Cypress.config("baseUrl");
  var step = {'step':1};
  var cont = 0

  beforeEach(() => {
    cy.visit(url);

  });

  context("ESCENARIO 1", function () {
    it("should Open Color Pallete website and take a screenshot", () => {
      cy.get("#color1").click({ force: true })
      .then(async()=>{takeScreenshoot ? await cy.screenshot(`${version}/${scenario}_cypress_paso_${step['step']++}`):null});
      cont++;
    });
  });

  context("ESCENARIO 2", function () {
    it("should take screeenshot when there is a change on the screen for the Color Pallete", () => {
      cy.get("#generate").contains('Generar').click({ force: true })
      .then(async()=>{takeScreenshoot ? await cy.screenshot(`${version}/${scenario}_cypress_paso_${step['step']++}`):null});
      cont++;
    });
  });


});
