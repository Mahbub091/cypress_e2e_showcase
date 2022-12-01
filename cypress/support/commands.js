/// <reference types="cypress" />
import homePage from "../pages/homePage";

const productCategory = ["Dress", "Jeans", "Tops & Shirts"];
const womenProductCategory = ["Dress ", "Tops ", "Saree "];
const menProductCategory = ["Tshirts ", "Jeans "];
const kidsProductCategory = ["Dress ", "Tops & Shirts "];
const brandsCategory = [
  "Polo",
  "H&M",
  "Madame",
  "Mast & Harbour",
  "Babyhug",
  "Allen Solly Junior",
  "Kookie Kids",
  "Biba",
];

Cypress.Commands.add("validUrl", (partialUrl, fullUrl) => {
  cy.url().then((value) => {
    cy.log("Current Url Is: ", value);
    expect(value).to.contains(partialUrl);
    expect(value).to.eq(fullUrl);
  });

  cy.request(fullUrl).should((response) => {
    expect(response.status).to.eq(200);
  });

  cy.request(fullUrl).should((response) => {
    expect(response.status).to.not.eq(400);
    cy.log("Request Time Out");
  });

  cy.csrfCookies();
});

Cypress.Commands.add("productCategory", (value) => {
  homePage.categoryItems().each((item, index, list) => {
    expect(list).to.have.length.above(value);

    expect(Cypress.$(item).text()).to.contain(productCategory[index]);
  });
});

Cypress.Commands.add("productCategoryClick", (position, containText) => {
  homePage.categoryProducts().then(($ele) => {
    const text = $ele.text();

    cy.wrap($ele).eq(position).should("contain.text", containText).click();
  });
});

Cypress.Commands.add(
  "validatingWomenProductSubcategoryHref",
  (length, hrefAttr) => {
    homePage.womenCategorySubProduct().each((item, index, list) => {
      expect(list).to.exist;

      expect(Cypress.$(item).text()).to.eq(womenProductCategory[index]);
    });

    homePage
      .womenCategorySubProduct()
      .eq(length)
      .should("have.attr", "href")
      .should("match", hrefAttr);
  },
);

Cypress.Commands.add(
  "validatingMenProductSubcategoryHref",
  (length, hrefAttr) => {
    homePage.menCategorySubProduct().each((item, index, list) => {
      expect(list).to.exist;

      expect(Cypress.$(item).text()).to.eq(menProductCategory[index]);
    });

    homePage
      .menCategorySubProduct()
      .eq(length)
      .should("have.attr", "href")
      .should("match", hrefAttr);
  },
);

Cypress.Commands.add(
  "validatingKidsProductSubcategoryHref",
  (length, hrefAttr) => {
    homePage.kidsCategorySubProduct().each((item, index, list) => {
      expect(list).to.exist;

      expect(Cypress.$(item).text()).to.eq(kidsProductCategory[index]);
    });

    homePage
      .kidsCategorySubProduct()
      .eq(length)
      .should("have.attr", "href")
      .should("match", hrefAttr);
  },
);

Cypress.Commands.add("brandsCategory", (value) => {
  homePage.brandsCategory().each((item, index, list) => {
    expect(list).to.exist;

    expect(list).to.have.length.above(value);

    expect(Cypress.$(item).text()).to.contain(brandsCategory[index]);
  });
});

Cypress.Commands.add("validatingBrandsSubcategoryHref", (length, hrefAttr) => {
  homePage.brandsCategory().each((item, index, list) => {
    expect(list).to.exist;

    expect(Cypress.$(item).text()).to.contain(brandsCategory[index]);
  });

  homePage
    .brandsCategory()
    .eq(length)
    .should("have.attr", "href")
    .should("match", hrefAttr);
});

Cypress.Commands.add("isFixtureImage", (subject, fixtureImage) => {
  homePage
    .shirtPic()
    .should(([img]) => {
      expect(img.complete).to.be.true;
    })
    .then(([img]) => {
      cy.fixture("shirt.jpg").then((content) => {
        let fixtureImage = new Image();
        fixtureImage.src = `data:image/jpeg;base64,${content}`;
        return new Promise((resolve) => {
          fixtureImage.onload = () => {
            expect(img.naturalWidth).to.equal(fixtureImage.naturalWidth);
            expect(img.naturalHeight).to.equal(fixtureImage.naturalHeight);
            resolve();
          };
        });
      });
    });
});

Cypress.Commands.add("csrfCookies", () => {
  //adding a new command named login
  Cypress.Cookies.defaults({
    preserve: "csrftoken",
  });
});
