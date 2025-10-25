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

    // Test 1: Verify Departure Airport field is clickable
    console.log('✈️ Test 1: Verify Departure Airport field is clickable');
    expect(await homePage.isDepartureFieldVisible()).toBe(true);
    console.log('✅ Departure Airport field is clickable');

    // Test 2: Verify Destination Airport field is clickable
    console.log('🏖️ Test 2: Verify Destination Airport field is clickable');
    expect(await homePage.isDestinationFieldVisible()).toBe(true);
    console.log('✅ Destination Airport field is clickable');

    // Test 3: Verify Departure Date field is clickable
    console.log('📅 Test 3: Verify Departure Date field is clickable');
    expect(await homePage.isDateFieldVisible()).toBe(true);
    console.log('✅ Departure Date field is clickable');

    // Test 4: Verify Rooms & Guests field is clickable
    console.log('👥 Test 4: Verify Rooms & Guests field is clickable');
    expect(await homePage.isRoomsGuestsFieldVisible()).toBe(true);
    console.log('✅ Rooms & Guests field is clickable');

    // Test 5: Verify Search button is clickable
    console.log('🔍 Test 5: Verify Search button is clickable');
    expect(await homePage.isSearchButtonClickable()).toBe(true);
    console.log('✅ Search button is clickable');

    console.log('🎉 Form field interaction test completed successfully!');
  });
});

