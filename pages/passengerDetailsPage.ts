import { expect } from '@playwright/test';
import { selectors } from '../utils/locators';
import { Logger } from '../utils/logger';
import { CommonActions } from '../utils/commonActions';

export class PassengerDetailsPage extends CommonActions {
  /**
  * Continues through the booking flow to payment.
  */
  async continueToPayment() {
    await this.interactWithElement("XPATH", selectors.hotelDetails.paymentButton, "click");
  }

  /**
  * Validate error messages for all required passenger fields
  * on the Passenger Details page when clicking Continue without entering data.
  *
  * @param adult - number of adult passengers
  * @param child - number of child passengers
  */
  async passengerErrorValidation(adult: number, child: number) {
    await this.interactWithElement("TEXT", selectors.paymentDetails.errorDetails.showMeButton, "click");
    let count = child + adult;

    for (let i = 0; i < count; i++) {
      await expect(this.page.locator(selectors.paymentDetails.errorDetails.titleId(i))).toHaveText(selectors.paymentDetails.errorDetails.title)
      await expect(this.page.locator(selectors.paymentDetails.errorDetails.NameId(i))).toHaveText(selectors.paymentDetails.errorDetails.nameField)
      await expect(this.page.locator(selectors.paymentDetails.errorDetails.lastNameId(i))).toHaveText(selectors.paymentDetails.errorDetails.nameField)
      await expect(this.page.locator(selectors.paymentDetails.errorDetails.dOBId(i + 1))).toHaveText(selectors.paymentDetails.errorDetails.dateField)
    }
    await expect(this.page.locator(selectors.paymentDetails.errorDetails.addressId)).toHaveText(selectors.paymentDetails.errorDetails.address)
    await expect(this.page.locator(selectors.paymentDetails.errorDetails.phoneID)).toHaveText(selectors.paymentDetails.errorDetails.phone)
    await expect(this.page.locator(selectors.paymentDetails.errorDetails.emailID)).toHaveText(selectors.paymentDetails.errorDetails.email)
    await expect(this.page.locator(selectors.paymentDetails.errorDetails.confirmationErrorId)).toHaveText(selectors.paymentDetails.errorDetails.confirmationMsg)
  }

  /**
   * Validates that invalid name inputs trigger proper error messages
   * for all passengers (adults + children).
   * 
   * @param adult - Number of adult passengers
   * @param child - Number of child passengers
   */
  async validateInValidError(adult: number, child: number) {
    let count = child + adult;
    for (let i = 0; i < count; i++) {
      await this.interactWithElement("ID", selectors.paymentDetails.firstNameID(i), "fill", selectors.paymentDetails.errorDetails.invalidName[i])
      Logger.info(`Invalid names has been entered as ${selectors.paymentDetails.errorDetails.invalidName[i]}`)
      await this.interactWithElement("ID", selectors.paymentDetails.lastNameTextId(i), "fill", selectors.paymentDetails.errorDetails.invalidName[i])
      Logger.info(`Invalid names has been entered as ${selectors.paymentDetails.errorDetails.invalidName[i]}`)
    }
    await this.continueToPayment();
    for (let i = 0; i < count; i++) {
      await expect(this.page.locator(selectors.paymentDetails.errorDetails.NameId(i))).toHaveText(selectors.paymentDetails.errorDetails.invalidNameMsg)
      await expect(this.page.locator(selectors.paymentDetails.errorDetails.lastNameId(i))).toHaveText(selectors.paymentDetails.errorDetails.invalidNameMsg)
    }
  }
}
