import AmenitiesPage from "../pageObjects/AmenitiesPage";

class AmenitiesPageImplementation{


    SearchAmenities(){

        AmenitiesPage.getAmenities().click()

        cy.wait(2000)

        AmenitiesPage.getSearch().type('Abacus', {force: true})

        cy.wait(2000)

        AmenitiesPage.getSearch().clear()

        cy.wait(2000)
    }

    BookingHistoryFunctionality(){

        AmenitiesPage.getBookingHistory().click({force: true})

        cy.wait(2000)

        AmenitiesPage.getAcceptedBooking().click({force: true})

        cy.wait(2000)

        AmenitiesPage.getRejectedAmenitiesBooking().click({force: true})

        cy.wait(2000)

        AmenitiesPage.getPastAmenitiesBooking().click({force: true})

        cy.wait(2000)

        AmenitiesPage.getBackToAmentiesPage().click({force: true})

        cy.wait(2000)

    }

  AddNewAmenities(){

        
   AmenitiesPage.getAddNewAmenities().click({force: true})

   cy.wait(2000)

   AmenitiesPage.getAddAminityName().eq(1).type('Newtest007', {force: true})

   cy.wait(2000)

   const p = 'download.png'

   AmenitiesPage.getAddImage().attachFile(p)

   cy.wait(2000)

   AmenitiesPage.getContactPerson().eq(2).type('test new', {force: true})

   cy.wait(2000)

   AmenitiesPage.getContactNumber().eq(0).type('9874239816', {force: true})

   cy.wait(2000)

   AmenitiesPage.getChargeType().check({force: true}).trigger('mousedown' ,{ eventConstructor: 'MouseEvent' }).scrollIntoView().last();

   cy.wait(2000)

   AmenitiesPage.getLedgerType().eq(3).click({force: true}).type('Amenity Opening', {force: true})

   cy.wait(2000)

   AmenitiesPage.getLedgerName().each(($e1, index, $list) => {

    if ($e1.text().trim(' ') === 'Amenity Opening') {

      cy.wrap($e1).click({ force: true })
    }
  })

   cy.wait(2000)

   AmenitiesPage.getDescripton().type('test', {force: true})

   cy.wait(2000)

  AmenitiesPage.getNextStep().click({force: true})

  cy.wait(2000)

  AmenitiesPage.getDailyType().eq(18).check({force: true})

  cy.wait(2000)

  AmenitiesPage.getForPurpose().eq(20).check({force: true})

  cy.wait(2000)

  AmenitiesPage.getAmount().eq(4).type('4000', {force: true})

  cy.wait(2000)

  AmenitiesPage.getAvailableDays().eq(5).click({force: true})
  
  cy.wait(2000)

  
  AmenitiesPage.getDaysName().each(($e1, index, $list) => {

    if ($e1.text().trim(' ') === 'Sunday') {

      cy.wrap($e1).click({ force: true })
    }
  })

  cy.wait(2000)

  AmenitiesPage.getTax().eq(6).click({force: true})

  AmenitiesPage.getTaxName().each(($e1, index, $list) => {

    if ($e1.text().trim(' ') === 'IGST5') {

      cy.wrap($e1).click({ force: true })
    }
  })

 AmenitiesPage.getPayWithin().eq(2).type('2', {force: true})

 cy.wait(2000)

 AmenitiesPage.getSave().click({force: true})

 cy.wait(2000)

    }

EditAmenities(){

AmenitiesPage.getEditAmenities().click({force: true})

cy.wait(2000)

AmenitiesPage.getCloseAmenities().eq(1).click({force: true})

cy.wait(2000)

}

ActiveInactive(){

AmenitiesPage.getActiveInActive().click({force: true})

cy.wait(2000)

AmenitiesPage.getActiveInactiveYesNo().click({force: true})

cy.wait(2000)

AmenitiesPage.getActiveInActive().click({force: true})

cy.wait(2000)

AmenitiesPage.getActiveInactiveYesNo().click({force: true})

cy.wait(2000)

}

AmenityDetails(){
 
AmenitiesPage.getAmenityDetails().click({force: true})

cy.wait(2000)

AmenitiesPage.getAmenityname().trigger('mousedown' ,{ eventConstructor: 'MouseEvent' }).scrollIntoView({ easing: 'linear'}).last();

cy.wait(2000)

AmenitiesPage.getCloseAmenities().eq(1).click({force: true})

cy.wait(2000)
    
}

}

export default new AmenitiesPageImplementation;