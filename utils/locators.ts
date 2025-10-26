export const selectors = {
    url: "https://www.tui.co.uk/",
    homeScreen: {
        depatureInput: "departure-airport",//id
        depatureCity: (value: string) => `//input[aria-label='${value}']`,
        destination: "destinations",
        destinationValue: (value: string) => `//button[@data-testid='destination-option' and normalize-space(.)='${value}']`,
        doneButton: "button_done",
        cacheButton: "cmCloseBanner",
        calendar: "calendar",
        depatureMonth: "#months",
        duration: "#duration",
        searchButton: "search-button",
    },
    hotelDetails: {
        continueButton: "(//a[@data-test-id='hotel-name'])[1]",
        hotelCountinue: "(//button[text()='Continue'])[1]",
        passengerDetails: "Continue To Passenger Details",
        paymentButton: "//button[text()='Continue To Payment']",
    },
    paymentDetails:{
        paymentButton: "//button[text()='Continue To Payment']",
        firstNameID: (value: number) => `paxInfoFirstName${value}`,
        lastNameTextId: (value: number) => `paxInfoLastName${value}`,
        errorDetails: {
        showMeButton: "SHOW ME",
        titleId: (value: number) => `//label[@for='paxInfoTitle${value}']/following-sibling::span[@class='inputs__errorText']`,
        title: "Please select a title.",
        NameId: (value: number) => `//span[@id='paxInfoFirstName${value}__errorMessage']`,
        lastNameId: (value: number) => `//span[@id='paxInfoLastName${value}__errorMessage']`,
        dOBId: (value: number) => `(//span[@class='inputs__error' and contains(., 'Please use the format DD/MM/YYYY')])[${value}]`,
        addressId: "#paxInfoAddressLookup__errorMessage",
        nameField: "This field is required",
        dateField: "Please use the format DD/MM/YYYY",
        address: "Please enter an address",
        phoneID: "#paxInfoTelephone__errorMessage",
        phone: "Please enter a valid UK phone number with 11 digits.",
        emailID: "#paxInfoEmail__errorMessage",
        email: "Please enter a valid email address. e.g. name@email.com.",
        confirmationErrorId: ".ImportantInformation__error_message_red",
        confirmationMsg: "Don't forget to tick the important information box to confirm you've read and understood it.",
        invalidName: ["@rt56", "123!!", "56789"],
        invalidNameMsg: "Oops, this field does not accept numbers or certain special characters.",
    }
    },
    
}