import { selectors } from '../utils/locators';
import { CommonActions } from '../utils/commonActions';
import { expect } from '@playwright/test';

export class HotelDetailsPage extends CommonActions {


  /**
   * Selects the first available hotel from the search results.
   */
  async selectHotel() {
    await this.interactWithElement("XPATH", selectors.hotelDetails.continueButton, "click");
    await expect(this.page.locator("//div[@class='Header__headerTitle']//h1//span")).toBeVisible();
  }

  /**
   * Continues from the hotel details page to the summary page.
   */
  async continueFromHotelDetails() {
    await this.interactWithElement("XPATH", selectors.hotelDetails.hotelCountinue, "click");
    await expect(this.page.getByRole('heading', { name: 'Customise your holiday' })).toBeVisible();
  }

  /**
   * Navigates to the passenger details page after hotel selection.
   */
  async continueToPassenger() {
    await this.interactWithElement("TEXT", selectors.hotelDetails.passengerDetails, "click");
    await expect(this.page.getByRole('heading', { name: 'Passenger details' })).toBeVisible();
  }
}
