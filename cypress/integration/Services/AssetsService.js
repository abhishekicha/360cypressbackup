import AssetsPageImplementation from "../../support/pages/AssetsPageImplementation";
import AdvertisementPageImplementation from "../../support/pages/AdvertisementPageImplementation";

class AssetsService{

    AssetCategoryTest(){

        AdvertisementPageImplementation.management()
        AssetsPageImplementation.AssetsCategory()


    }

    AssetCategoryNegativeTest(){

        AssetsPageImplementation.AssetsCategoryNegativeTestCase()

    }

    AssetRegistrationTest(){

        AssetsPageImplementation.AssetRegistration()

    }

    AssetRegistrationNegativeTest(){

        AssetsPageImplementation.AssetRegistrationWithNegativeValues()
    }

    UpdateAssetRegistrationTest(){

        AssetsPageImplementation.UpdateAssetsRegistration()
    }

    UpdateAssetRegistrationNegativeTest(){

        AssetsPageImplementation.UpdateAssetsRegistrationWithNegativeValues()

    }

    ServicingDetailsTest(){

        AssetsPageImplementation.ServicingDetails()

    }

}

export default new AssetsService;