import AmenitiesPageImplementation from "../../support/pages/AmenitiesPageImplementation";
import AdvertisementPageImplementation from "../../support/pages/AdvertisementPageImplementation";


class AmenitiesService{

    Amenities(){

        AdvertisementPageImplementation.management()
        AmenitiesPageImplementation.SearchAmenities()
        AmenitiesPageImplementation.BookingHistoryFunctionality()
        AmenitiesPageImplementation.AddNewAmenities()
        AmenitiesPageImplementation.EditAmenities()
        AmenitiesPageImplementation.ActiveInactive()
        AmenitiesPageImplementation.AmenityDetails()

    }

}

export default new AmenitiesService;