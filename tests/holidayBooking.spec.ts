import { test } from "../fixtures/customFixture";
import { selectors } from "../utils/locators"
import { BookingData } from '../utils/bookingData'
import fs from 'fs'

let data: BookingData[] = JSON.parse(fs.readFileSync("testData/data.json", 'utf-8'));
data.forEach((userData, index) => {

  test(`TC_${index + 1} - Validate holiday booking for ${userData.depatureCity} to ${userData.destination.destinationCity}`, async ({ HomePage, HotelDetailsPage, PassengerDetailsPage }) => {
    await HomePage.loadUrl(selectors.url);
    await HomePage.acceptCookie();
    await HomePage.depatureDetails(userData.depatureCity);
    await HomePage.destinationDetails(userData.destination.destinationPartial, userData.destination.destinationCity);
    await HomePage.selectDate(userData.month, userData.date);
    await HomePage.selectDuration(userData.duration);
    await HomePage.roomsAndPerson(userData.rooms, userData.adult, userData.children, userData.childAge);
    await HomePage.searchButton();
    await HotelDetailsPage.selectHotel();
    await HotelDetailsPage.continueFromHotelDetails();
    await HotelDetailsPage.continueToPassenger();
    await PassengerDetailsPage.continueToPayment();
    await PassengerDetailsPage.passengerErrorValidation(userData.adult, userData.children);
    await PassengerDetailsPage.validateInValidError(userData.adult, userData.children);
  });
});