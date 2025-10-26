import { selectors } from "../utils/locators"
import { CommonActions } from "../utils/commonActions";
import { Logger } from "../utils/logger";
import { expect } from "@playwright/test";

export class HomePage extends CommonActions {

    /**
     * Accepts the cookie if the cache button is visible on the home screen.
     */
    async acceptCookie() {
        if (await this.page.locator(selectors.homeScreen.cacheButton).isVisible()) {
            await this.interactWithElement("ID", selectors.homeScreen.cacheButton, "click");
            Logger.info(`Cookies accepted and navigated to home page`)
        }
    };

    /**
     * Selects the departure details for the trip.
     * @param value - The city to select for departure.
     */
    async depatureDetails(value: string) {
        await this.interactWithElement("ID", selectors.homeScreen.depatureInput, "click");
        await this.page.locator(selectors.homeScreen.depatureCity(value)).check({ force: true });
        await this.interactWithElement("TESTID", selectors.homeScreen.doneButton, "click");
        Logger.info(`depautre details has been entered as ${value}`)
    }

    /**
     * Fills in the destination details.
     * @param destinationInput - The input text for the destination field.
     * @param destinationCity - The exact destination city to select.
     */
    async destinationDetails(destinationInput: string, destinationCity: string) {
        await this.interactWithElement("ID", selectors.homeScreen.destination, "fill", destinationInput);
        await this.page.locator(selectors.homeScreen.destinationValue(destinationCity)).click();
        await this.interactWithElement("TESTID", selectors.homeScreen.doneButton, "click");
        Logger.info(`destination details has been entered as ${destinationCity}`)
    }

    /**
     * Selects a date for the trip.
     * @param month - The month to select in the calendar.
     * @param date - The date to select in the calendar.
     */
    async selectDate(month: string, date: string) {
        await this.interactWithElement("TESTID", selectors.homeScreen.calendar, "click");
        await this.page.selectOption(selectors.homeScreen.depatureMonth, { label: month });
        await this.page.getByText(date, { exact: true }).click();
        await this.interactWithElement("TESTID", selectors.homeScreen.doneButton, "click");
        Logger.info(`Depature date details has been entered as ${date}-${month}`)
    }

    /**
     * Selects the trip duration from a dropdown.
     * @param duration - The duration label to select (eg: 2 nights).
     */
    async selectDuration(duration: string) {
        await this.page.selectOption(selectors.homeScreen.duration, { label: duration });
        Logger.info(`Duration of stay has been entered as ${duration}`)
    }

    /**
     * select the number of rooms and passenger details.
     * @param rooms - Number of rooms to select.
     * @param adult - Number of adults.
     * @param children - Number of children.
     * @param childAge - Array of child ages to select for each child.
     */
    async roomsAndPerson(rooms: string, adult: number, children: number, childAge: string[]) {
        await this.page.selectOption('#rooms', { label: rooms });
        Logger.info(`Rooms for stay has been selected as ${rooms}`)
        await this.addPassengerDetails(adult, "adults plus", "adults minus", "1","Adult");
        await this.addPassengerDetails(children, "nonAdults plus", "nonAdults minus", "2", "Child");
        if (children > 0 && childAge.length > 0) {
            await this.selectChildAges(childAge);
        }
        await this.interactWithElement("TESTID", selectors.homeScreen.doneButton, "click");
    }

    /**
     * Adds or removes passengers to match the desired count.
     * @param count - Desired number of passengers.
     * @param increase - Label for increase button.
     * @param decrease - Label for decrease button.
     * @param countId - Index of the passenger counter to adjust.
     */
    async addPassengerDetails(count: number, increase: string, decrease: string, countId: string,passengerType:string) {
        const passengerCount = count;
        let presentPasserngerCnt = this.page.locator(`(//div//span[@class='stepper-counter'])[${countId}]`)
        let currentValue = parseInt(await presentPasserngerCnt.textContent() || '0');

        if (currentValue === passengerCount) {
            Logger.info(`${passengerType} for stay has been selected as ${currentValue}`)
        } else if (currentValue < passengerCount) {
            for (let i = currentValue; i < passengerCount; i++) {
                await this.interactWithElement("XPATH", `//button[@aria-label='${increase}']`, "click");
                currentValue++;
            }
        Logger.info(`${passengerType} for stay has been selected as ${currentValue}`)
        } else if (currentValue > passengerCount) {
            for (let i = currentValue; i > passengerCount; i--) {
                await this.interactWithElement("XPATH", `//button[@aria-label='${decrease}']`, "click");
                currentValue--;
            }
            Logger.info(`${passengerType} for stay has been selected as ${currentValue}`)
        }
    }

    /**
     * Selects ages for children.
     * @param childAges - Array of ages to select for each child.
     */
    async selectChildAges(childAges: string[]) {
        for (let i = 0; i < childAges.length; i++) {
            const select = this.page.locator('#child-age').nth(i);
            await select.selectOption({ label: childAges[i] });
            Logger.info(`Child${i} age has been selected as ${childAges[i]}`)
        }
    }

    /**
     * Clicks the search button to find trips.
     */
    async searchButton() {
        await this.interactWithElement("TESTID", selectors.homeScreen.searchButton, "click");
        await expect(this.page.locator('.FilterPanelV2__holidayCounts').first()).toContainText('Holidays found');

    }
}
