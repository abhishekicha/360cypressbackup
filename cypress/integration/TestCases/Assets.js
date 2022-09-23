/// <reference types="Cypress" />

import BaseSpecService from '../Services/BaseSpecService';
import AssetsService from '../Services/AssetsService';

describe('Assets fuctionality', function () {

  it('Open The 360',BaseSpecService.init)
  it('Assets Category',AssetsService.AssetCategoryTest)
  it('Assets Category Negative Test',AssetsService.AssetCategoryNegativeTest)
  it('Asset Registration', AssetsService.AssetRegistrationTest)
  it('Asset Registration Negative Test', AssetsService.AssetRegistrationNegativeTest)
  it('Update Asset Registration', AssetsService.UpdateAssetRegistrationTest)
  it('update Registration Negative Test', AssetsService.UpdateAssetRegistrationNegativeTest)
  it('servicing details', AssetsService.ServicingDetailsTest)



});