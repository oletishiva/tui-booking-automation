export interface BookingData {
  departureAirport: string;
  destinationAirport: string;
  departureDate: string;
  adults: number;
  children: number;
  childAge: number;
}

export class TestDataGenerator {
  private static readonly DEPARTURE_AIRPORTS = [
    'London Heathrow',
    'London Gatwick', 
    'London Stansted',
    'Manchester',
    'Birmingham',
    'Glasgow',
    'Edinburgh',
    'Bristol'
  ];

  private static readonly DESTINATION_AIRPORTS = [
    'Spain - Costa del Sol',
    'Spain - Majorca',
    'Spain - Tenerife',
    'Greece - Crete',
    'Greece - Rhodes',
    'Turkey - Antalya',
    'Cyprus - Paphos',
    'Portugal - Algarve'
  ];

  private static readonly CHILD_AGES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  static generateBookingData(): BookingData {
    const departureAirport = this.getRandomDepartureAirport();
    const destinationAirport = this.getRandomDestinationAirport();
    const departureDate = this.getFutureDate(30); // 30 days from now
    const adults = 2;
    const children = 1;
    const childAge = this.getRandomChildAge();

    return {
      departureAirport,
      destinationAirport,
      departureDate,
      adults,
      children,
      childAge
    };
  }

  static getRandomDepartureAirport(): string {
    return this.DEPARTURE_AIRPORTS[Math.floor(Math.random() * this.DEPARTURE_AIRPORTS.length)];
  }

  static getRandomDestinationAirport(): string {
    return this.DESTINATION_AIRPORTS[Math.floor(Math.random() * this.DESTINATION_AIRPORTS.length)];
  }

  static getRandomChildAge(): number {
    return this.CHILD_AGES[Math.floor(Math.random() * this.CHILD_AGES.length)];
  }

  static getFutureDate(days: number): string {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0];
  }

  static logBookingData(data: BookingData): void {
    console.log('📋 Generated Booking Data:');
    console.log(`   ✈️  Departure Airport: ${data.departureAirport}`);
    console.log(`   🏖️  Destination Airport: ${data.destinationAirport}`);
    console.log(`   📅  Departure Date: ${data.departureDate}`);
    console.log(`   👥  Adults: ${data.adults}`);
    console.log(`   👶  Children: ${data.children} (age ${data.childAge})`);
  }
}
