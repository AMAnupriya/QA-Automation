import { test as baseTest } from '@playwright/test'
import { HomePage } from '../pages/homePage'
import { PassengerDetailsPage } from '../pages/passengerDetailsPage'
import { HotelDetailsPage } from '../pages/HotelDetailsPage'

type customForceFixture = {
    HomePage: HomePage
    PassengerDetailsPage:PassengerDetailsPage
    HotelDetailsPage:HotelDetailsPage
}

export const test = baseTest.extend<customForceFixture>({

    HomePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },

    PassengerDetailsPage: async ({ page }, use) => {
        const passengerDetailsPage = new PassengerDetailsPage(page);
        await use(passengerDetailsPage);
    },
    
    HotelDetailsPage: async ({ page }, use) => {
        const hotelDetailsPage = new HotelDetailsPage(page);
        await use(hotelDetailsPage);
    },
})