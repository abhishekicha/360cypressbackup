import AssetsPage from "../pageObjects/AssetsPage";

class AssetsPageImplementation{

    AssetsCategory(){

        AssetsPage.getAssets().click()
    
        cy.wait(2000);
    
        AssetsPage.getSearch().eq(0).type('test', { force: true })
    
        AssetsPage.getVerifySearchResult().eq(0).should('contain', 'test')
    
        cy.wait(2000);
    
        AssetsPage.getSearch().eq(0).clear()
    
        cy.wait(2000)
    
        AssetsPage.getAddAssetCategory().click({ force: true })
    
        cy.wait(2000)
    
        AssetsPage.getAssetCategoryName().eq(2).type('test', { force: true })
    
        cy.wait(2000)
    
        AssetsPage.getAssetCategoryDescription().type('this is a test', { force: true })
    
        cy.wait(2000)
    
        AssetsPage.getAddAssetCategoryActivate().click({ force: true })
    
        cy.wait(2000)
    
        AssetsPage.getAssetCategorySubmit().eq(2).click({ force: true })
    
        cy.wait(2000)
    
    }

    AssetsCategoryNegativeTestCase(){

        AssetsPage.getSearch().eq(0).type('//..', { force: true })

        cy.wait(2000);
    
        AssetsPage.getSearch().eq(0).clear()
    
        cy.wait(2000)
    
        AssetsPage.getAddAssetCategory().click({ force: true })
    
        cy.wait(2000)
    
        AssetsPage.getAssetCategoryName().eq(2).type('./..', { force: true })
    
        cy.wait(2000)
    
        AssetsPage.getAssetCategoryDescription().type('...//##', { force: true })
    
        cy.wait(2000)
    
        AssetsPage.getAssetCategorySubmit().eq(2).click({ force: true })
    
        cy.wait(2000)

    }

    AssetRegistration(){

    AssetsPage.getAssetRegistration().click({ force: true })

    cy.wait(2000);

    AssetsPage.getSearchAssetRegistrations().eq(1).type('test', { force: true })

    cy.wait(2000);

    AssetsPage.getVerifySearchAssetRegistrationResult().eq(10).should('contain', 'test')

    cy.wait(2000)

    AssetsPage.getSearchAssetRegistrations().eq(1).clear()

    cy.wait(2000)

    AssetsPage.getRegisterNewAsset().click({ force: true })

    AssetsPage.getAssetRegistrationType().click()

    AssetsPage.getAssetRegistrationTypeName().eq(0).click({ force: true })

    AssetsPage.getSelectAssetCategory().click()

    AssetsPage.getSelectAssetCategoryName().eq(15).click()

    AssetsPage.getSelectVendorType().click({ force: true })

    AssetsPage.getSelectVendorTypeName().each(($e1, index, $list) => {

      if ($e1.text().trim(' ') === 'VN004-Gardener 01') {

        cy.wrap($e1).click({ force: true })
      }
    })



    AssetsPage.getAssetName().type('test Asset', { force: true })

    AssetsPage.getAssesCode().type('test001', { force: true })

    AssetsPage.getPurchasePrice().type('2000', { force: true })

    AssetsPage.getPurchaseDate().type('2022-01-07', { force: true })

    AssetsPage.getInstallationDate().type('2022-07-20', { force: true })

    AssetsPage.getManufactureDate().type('2020-02-08', { force: true })

    AssetsPage.getManufacturerName().type('test', { force: true })

    AssetsPage.getModelNumber().type('test', { force: true })

    AssetsPage.getSerialNumber().type('test007', { force: true })

    AssetsPage.getStatus().eq(0).click({ force: true })

    AssetsPage.getStatusName().each(($e1, index, $list) => {

      if ($e1.text().trim(' ') === 'Active') {

        cy.wrap($e1).click({ force: true })
      }
    })

    AssetsPage.getWarrantyFrom().type('2022-01-07', { force: true })

    AssetsPage.getWarrantyTo().type('2026-01-07', { force: true })

    AssetsPage.getDescription().type('test', { force: true })

    AssetsPage.getSubmit().click({ force: true })

    cy.wait(2000)

    }

    AssetRegistrationWithNegativeValues(){

        AssetsPage.getAssetRegistration().click({ force: true })

        cy.wait(2000);
    
        AssetsPage.getSearchAssetRegistrations().eq(1).type('.../.', { force: true })
    
        cy.wait(2000);
    
        AssetsPage.getSearchAssetRegistrations().eq(1).clear()
    
        cy.wait(2000)
    
        AssetsPage.getRegisterNewAsset().click({ force: true })
    
        AssetsPage.getAssetRegistrationType().click()
    
        AssetsPage.getAssetRegistrationTypeName().eq(0).click({ force: true })
    
        AssetsPage.getSelectAssetCategory().click()
    
        AssetsPage.getSelectAssetCategoryName().eq(15).click()
    
        AssetsPage.getSelectVendorType().click({ force: true })
    
        AssetsPage.getSelectVendorTypeName().each(($e1, index, $list) => {
    
          if ($e1.text().trim(' ') === 'VN004-Gardener 01') {
    
            cy.wrap($e1).click({ force: true })
          }
        })
    
    
    
        AssetsPage.getAssetName().type('..//..//* Asset', { force: true })
    
        AssetsPage.getAssesCode().type('.;,..,\\', { force: true })
    
        AssetsPage.getPurchasePrice().type('//../', { force: true })
    
        AssetsPage.getPurchaseDate().type('2022-01-07', { force: true })
    
        AssetsPage.getInstallationDate().type('2022-07-20', { force: true })
    
        AssetsPage.getManufactureDate().type('2020-02-08', { force: true })
    
        AssetsPage.getManufacturerName().type('..//', { force: true })
    
        AssetsPage.getModelNumber().type('..***-', { force: true })
    
        AssetsPage.getSerialNumber().type('**--22111', { force: true })
    
        AssetsPage.getStatus().eq(0).click({ force: true })
    
        AssetsPage.getStatusName().each(($e1, index, $list) => {
    
          if ($e1.text().trim(' ') === 'Active') {
    
            cy.wrap($e1).click({ force: true })
          }
        })
    
        AssetsPage.getWarrantyFrom().type('2022-01-07', { force: true })
    
        AssetsPage.getWarrantyTo().type('2026-01-07', { force: true })
    
        AssetsPage.getDescription().type('test', { force: true })
    
        AssetsPage.getSubmit().click({ force: true })
    
        cy.wait(2000)

    }

    UpdateAssetsRegistration(){
  
    AssetsPage.getAssetRegistration().click({ force: true })

    cy.wait(2000);

    AssetsPage.getProblemReporting().eq(1).click()

    AssetsPage.getProblemCode().type('test001')

    cy.wait(2000);

    AssetsPage.getProblemRecordDate().type("2022-01-08", { force: true })

    AssetsPage.getObservedBy().type('tester', { force: true })

    AssetsPage.getCheckBox().check()

    AssetsPage.getProblemDetails().type('test')

    AssetsPage.getAdditionalRemarks().type('test')

    AssetsPage.getReportButton().click({ force: true })

    cy.wait(2000)

    }

    UpdateAssetsRegistrationWithNegativeValues(){

        AssetsPage.getAssetRegistration().click({ force: true })

        cy.wait(2000);
    
        AssetsPage.getProblemReporting().eq(1).click()
    
        AssetsPage.getProblemCode().type('/-*--')
    
        cy.wait(2000);
    
        AssetsPage.getProblemRecordDate().type("2029-01-08", { force: true })
    
        AssetsPage.getObservedBy().type('..//../**', { force: true })
    
        AssetsPage.getCheckBox().check()
    
        AssetsPage.getProblemDetails().type('**--/**')
    
        AssetsPage.getAdditionalRemarks().type('**-/--')
    
        AssetsPage.getReportButton().click({ force: true })

    }

    ServicingDetails(){

        cy.wait(2000);

        AssetsPage.getAssetRegistration().click({ force: true })
    
        cy.wait(2000);
    
        AssetsPage.getServicingDetails().click({ force: true })
    
        AssetsPage.getServicingNumber().type('123test', { force: true })
    
        AssetsPage.getServicingAgainsttDropdown().click({ force: true })
    
        AssetsPage.getDropDownSelect().click({ force: true })
    
        AssetsPage.getSelectReferenceCode().click({ force: true })

    }
}

export default new AssetsPageImplementation;