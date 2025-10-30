import { test } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { ResultsPage } from '../src/pages/ResultsPage';
import { FlightsPage } from '../src/pages/FlightsPage';
import { PassengerDetailsPage } from '../src/pages/PassengerDetailsPage';

test.describe('TUI Booking Flow - E2E (minimal logs)', () => {
  test('Complete flow to Passenger details with validations', async ({ page, context }) => {
    await context.addCookies([
      { name: 'selectedCountry', value: 'GB', domain: '.tui.co.uk', path: '/' }
    ]);

    const home = new HomePage(page);
    await home.navigateToHome();
    await home.acceptCookies();

    await home.selectRandomAvailableDeparture();
    await home.selectRandomAvailableDestination();
    await home.selectFirstAvailableDepartureDate();
    await home.selectFirstAvailableReturnDate();
    await home.setPassengersTwoAdultsOneChild();
    await home.searchForHolidays();

    const results = new ResultsPage(page);
    await results.pickFirstHotelAndContinue();

    const flights = new FlightsPage(page);
    await flights.selectAvailableFlightsAndContinue();

    const pax = new PassengerDetailsPage(page);
    await pax.continueToTriggerValidations();
  });
});


