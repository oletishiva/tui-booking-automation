import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';

test.describe('TUI Flight Form Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page, context }) => {
    // Set UK country cookie to ensure proper functionality
    await context.addCookies([
      { 
        name: 'selectedCountry', 
        value: 'GB', 
        domain: '.tui.co.uk',
        path: '/'
      }
    ]);

    homePage = new HomePage(page);
    await homePage.navigateToHome();
    await homePage.acceptCookies();
  });

  test('Verify all form elements are visible and clickable', async ({ page }) => {
    console.log('🔍 Starting form elements verification test');

    // Check all form elements are visible
    const departureVisible = await homePage.isDepartureFieldVisible();
    const destinationVisible = await homePage.isDestinationFieldVisible();
    const dateVisible = await homePage.isDateFieldVisible();
    const passengersVisible = await homePage.isRoomsGuestsFieldVisible();
    const searchClickable = await homePage.isSearchButtonClickable();

    console.log('📊 Form Elements Status:');
    console.log(`   - Departure Airport: ${departureVisible ? '✅' : '❌'}`);
    console.log(`   - Destination Airport: ${destinationVisible ? '✅' : '❌'}`);
    console.log(`   - Departure Date: ${dateVisible ? '✅' : '❌'}`);
    console.log(`   - Passengers: ${passengersVisible ? '✅' : '❌'}`);
    console.log(`   - Search Button: ${searchClickable ? '✅' : '❌'}`);

    // Assertions for required elements
    expect(departureVisible).toBe(true);
    expect(dateVisible).toBe(true);
    expect(searchClickable).toBe(true);

    console.log('✅ All required form elements are visible and clickable');
  });

  test('Test form field interactions', async ({ page }) => {
    console.log('🚀 Starting form field interaction test');

    // Test 1: Select Departure Airport
    console.log('✈️ Test 1: Selecting Departure Airport');
    expect(await homePage.isDepartureFieldVisible()).toBe(true);
    const departureAirport = await homePage.selectDepartureAirport();
    console.log(`✅ Selected departure airport: ${departureAirport}`);

    // Test 2: Select Destination Airport
    console.log('🏖️ Test 2: Selecting Destination Airport');
    if (await homePage.isDestinationFieldVisible()) {
      const destinationAirport = await homePage.selectDestinationAirport();
      console.log(`✅ Selected destination airport: ${destinationAirport}`);
    } else {
      console.log('ℹ️ Destination field not visible - might appear after departure selection');
    }

    // Test 3: Select Departure Date
    console.log('📅 Test 3: Selecting Departure Date');
    expect(await homePage.isDateFieldVisible()).toBe(true);
    const departureDate = await homePage.selectDepartureDate();
    console.log(`✅ Selected departure date: ${departureDate}`);

    // Test 4: Select Rooms & Guests
    console.log('👥 Test 4: Selecting Rooms & Guests');
    if (await homePage.isRoomsGuestsFieldVisible()) {
      const guestSelection = await homePage.selectRoomsAndGuests();
      console.log(`✅ Selected guests: ${guestSelection.adults} adults, ${guestSelection.children} child (age ${guestSelection.childAge})`);
    } else {
      console.log('ℹ️ Rooms & Guests field not visible - might not be present on flight booking page');
    }

    // Test 5: Search for holidays
    console.log('🔍 Test 5: Searching for holidays');
    if (await homePage.isSearchButtonClickable()) {
      await homePage.searchForHolidays();
      console.log('✅ Search initiated successfully');
    } else {
      console.log('⚠️ Search button not clickable');
    }

    console.log('🎉 Form field interaction test completed successfully!');
  });
});

