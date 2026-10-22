import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

interface TravelPageContent {
  title: string;
  description: string;
  canonicalUrl: string;
  heading: string;
  introduction: string;
  detailsHeading: string;
  details: string;
  highlights: string[];
  questions: { question: string; answer: string }[];
}

export const travelPages: Record<string, TravelPageContent> = {
  airport: {
    title: 'Dehradun Airport Taxi Service | Jolly Grant to Rishikesh',
    description: 'Arrange a taxi from Jolly Grant Airport to Rishikesh with Soban Bisht Tour and Travel. Contact us to confirm your pickup, vehicle and fare.',
    canonicalUrl: 'https://bishttravels.com/airport-transfer',
    heading: 'Dehradun Airport Taxi Service to Rishikesh',
    introduction: 'Book a Jolly Grant Airport to Rishikesh taxi for your arrival or departure. Share your flight timing and destination with us so we can discuss pickup arrangements and confirm availability.',
    detailsHeading: 'Plan your Jolly Grant Airport transfer',
    details: 'Jolly Grant Airport serves the Rishikesh and Dehradun area. We also arrange airport journeys to and from Delhi IGI Airport, subject to route and vehicle confirmation. Contact us before travel with your flight details, number of passengers and luggage requirements.',
    highlights: ['Pickup and drop-off for Rishikesh and nearby destinations', 'Swift Dzire and Ertiga options listed on our services page', 'Confirm the fare, tolls and pickup timing before booking'],
    questions: [
      { question: 'Can I book a taxi from Jolly Grant Airport to Rishikesh?', answer: 'Contact us with your travel date and arrival time to confirm the pickup, vehicle availability and fare.' },
      { question: 'Do you provide airport transfers at night?', answer: 'The site lists 24/7 booking availability. Please confirm your flight time and pickup directly with us.' },
    ],
  },
  sightseeing: {
    title: 'Rishikesh Sightseeing Taxi | Local Cab Booking',
    description: 'Book a Rishikesh sightseeing taxi for local travel. Share your places, schedule and passenger count to confirm a suitable cab and quote.',
    canonicalUrl: 'https://bishttravels.com/rishikesh-sightseeing',
    heading: 'Rishikesh Sightseeing Taxi and Local Cab',
    introduction: 'Explore Rishikesh at your own pace with a local taxi for sightseeing and short trips. Tell us which places you plan to visit and how long you need the vehicle so we can discuss your itinerary.',
    detailsHeading: 'Arrange local sightseeing in Rishikesh',
    details: 'For a Rishikesh local cab booking, share your pickup location, travel date, passenger count and the places you want to include. We will confirm the route, timing, vehicle and price before your trip.',
    highlights: ['Local sightseeing and point-to-point cab requests', 'Swift Dzire sedan and Ertiga MUV options', 'Request a round trip or ask about a one-way drop'],
    questions: [
      { question: 'How do I book a Rishikesh sightseeing taxi?', answer: 'Call or message us with your date, pickup location, passenger count and sightseeing plan for a quote.' },
      { question: 'Can I request a full-day local cab?', answer: 'Contact us with your proposed schedule and destinations to check availability and pricing.' },
    ],
  },
  charDham: {
    title: 'Char Dham Yatra Taxi Service from Rishikesh',
    description: 'Plan Char Dham Yatra travel from Rishikesh with local taxi service. Ask about vehicles, itinerary, dates and a route-specific fare.',
    canonicalUrl: 'https://bishttravels.com/char-dham-yatra',
    heading: 'Char Dham Yatra Taxi Service from Rishikesh',
    introduction: 'Arrange road travel from Rishikesh for the Char Dham Yatra. Share your planned dates, passenger group and pilgrimage itinerary to discuss a vehicle and trip quote.',
    detailsHeading: 'Plan your Uttarakhand pilgrimage journey',
    details: 'The Char Dham circuit includes Yamunotri, Gangotri, Kedarnath and Badrinath. Mountain journeys require route and schedule planning; contact us to confirm which sections can be covered by vehicle and the arrangements for your chosen itinerary.',
    highlights: ['Travel planning for the Char Dham circuit or Do Dham', 'Swift Dzire and 6+1 seat Ertiga options are listed on our services page', 'Confirm route, itinerary, inclusions and additional charges before booking'],
    questions: [
      { question: 'Can I start a Char Dham Yatra taxi trip from Rishikesh?', answer: 'Contact us with your dates and itinerary to discuss a suitable vehicle and confirm the journey details.' },
      { question: 'How much does a Char Dham taxi cost?', answer: 'Fares depend on the itinerary, dates and vehicle. Request a route-specific quote before booking.' },
    ],
  },
  kedarnath: {
    title: 'Kedarnath Taxi Service from Rishikesh | Yatra Travel',
    description: 'Ask about a Kedarnath taxi service from Rishikesh. Share your Yatra dates and itinerary to confirm the road journey and vehicle arrangements.',
    canonicalUrl: 'https://bishttravels.com/kedarnath-taxi',
    heading: 'Kedarnath Taxi Service from Rishikesh',
    introduction: 'Planning a Kedarnath Yatra from Rishikesh? Contact Soban Bisht Tour and Travel to discuss the road journey, your travel dates and the vehicle arrangements for your group.',
    detailsHeading: 'Discuss your Kedarnath Yatra route',
    details: 'Road access and the final approach to Kedarnath involve different travel arrangements. Share your intended route and itinerary so we can clarify the vehicle portion of the trip, pickup point and current fare.',
    highlights: ['Start your enquiry from Rishikesh', 'Ask about available Swift Dzire or Ertiga options for the road journey', 'Confirm route details and any onward arrangements before travel'],
    questions: [
      { question: 'Does the taxi drive all the way to Kedarnath temple?', answer: 'Access and onward travel arrangements vary by route. Confirm the vehicle drop point and the remaining journey details with us before booking.' },
      { question: 'How can I get a fare for a Kedarnath taxi from Rishikesh?', answer: 'Send us your dates, passenger count and itinerary to request a current quote.' },
    ],
  },
  tempoTraveller: {
    title: 'Tempo Traveller in Rishikesh | Check Group Vehicle Availability',
    description: 'Looking for a Tempo Traveller in Rishikesh? Contact Soban Bisht Tour and Travel to check current group vehicle availability and get a quote.',
    canonicalUrl: 'https://bishttravels.com/tempo-traveller',
    heading: 'Tempo Traveller in Rishikesh for Group Travel',
    introduction: 'Looking for a Tempo Traveller in Rishikesh for a family outing, pilgrimage or group trip? Contact us to check current availability, seating options and pricing for your dates.',
    detailsHeading: 'Check vehicle availability for your group',
    details: 'Vehicle availability can vary by date and group size. Tell us your passenger count, luggage needs, route and travel dates. Our currently listed fleet includes an Ertiga with 6+1 seats; ask us directly whether a Tempo Traveller is available for your trip.',
    highlights: ['Availability and seating to be confirmed for your dates', 'Share your route, passenger count and luggage requirements', 'Request a quote before finalizing your group travel plans'],
    questions: [
      { question: 'Is a Tempo Traveller available for every date?', answer: 'Availability is not guaranteed. Contact us with your date and group size to check current options.' },
      { question: 'What group vehicle is currently listed?', answer: 'Our services page lists an Ertiga with 6+1 seats. Ask us about other vehicle availability.' },
    ],
  },
  routes: {
    title: 'Rishikesh to Haridwar Taxi & Mussoorie Cab Routes',
    description: 'Ask for a taxi from Rishikesh to Haridwar or Mussoorie. Share your pickup, dates and trip type to confirm availability and fare.',
    canonicalUrl: 'https://bishttravels.com/taxi-routes',
    heading: 'Taxi Routes from Rishikesh to Haridwar and Mussoorie',
    introduction: 'Arrange an outstation taxi from Rishikesh to Haridwar or ask about a Rishikesh to Mussoorie cab. Contact us with your dates and trip details for a route-specific quote.',
    detailsHeading: 'Get a quote for your route',
    details: 'Tell us whether you need a one-way drop or return trip, your pickup point, travel date and passenger count. We will confirm route availability, vehicle options and any toll or parking charges before you book.',
    highlights: ['Rishikesh to Haridwar taxi enquiries', 'Rishikesh to Mussoorie taxi enquiries', 'Swift Dzire and Ertiga options listed on our services page'],
    questions: [
      { question: 'Can I book a one-way Rishikesh to Haridwar taxi?', answer: 'Contact us with your pickup point and travel date to confirm availability and get a quote.' },
      { question: 'Can I request a Rishikesh to Mussoorie cab?', answer: 'Send us your dates, passenger count and whether you need a one-way or return trip so we can confirm the details.' },
    ],
  },
  carRental: {
    title: 'Car Rental in Rishikesh | Local and Outstation Taxi',
    description: 'Find a car rental in Rishikesh for local or outstation travel. Ask about chauffeur-driven Swift Dzire and Ertiga options and fares.',
    canonicalUrl: 'https://bishttravels.com/car-rental',
    heading: 'Car Rental in Rishikesh for Local and Outstation Trips',
    introduction: 'Need a car rental in Rishikesh? We provide taxi and chauffeur-driven travel enquiries for local trips, airport transfers and outstation journeys.',
    detailsHeading: 'Choose a vehicle for your journey',
    details: 'Our website lists a Swift Dzire sedan and an Ertiga MUV. Share your route, travel date, passenger count and luggage requirements to confirm the right option and get a current quote.',
    highlights: ['Chauffeur-driven cab requests for local and outstation travel', 'Swift Dzire sedan and 6+1 seat Ertiga listed', 'Check route-specific fares and availability before booking'],
    questions: [
      { question: 'Can I rent a self-drive car in Rishikesh?', answer: 'Our listed services are taxi and chauffeur-driven trips. Contact us to confirm the kind of vehicle service available.' },
      { question: 'How do I get a car rental quote?', answer: 'Share your pickup, destination, dates and passenger count with us for a route-specific quote.' },
    ],
  },
};

export function TravelLandingPage({ page }: { page: TravelPageContent }) {
  return (
    <div className="flex flex-col w-full bg-editorial-bg text-editorial-text">
      <SEO title={page.title} description={page.description} canonicalUrl={page.canonicalUrl} />
      <section className="bg-editorial-bg py-20 border-b border-editorial-border">
        <div className="container mx-auto px-4 md:px-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl text-editorial-text mb-6">{page.heading}</h1>
          <p className="text-lg text-editorial-subtext max-w-3xl mx-auto leading-relaxed">{page.introduction}</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+917895616847" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-editorial-text text-white font-bold uppercase text-xs tracking-widest">
              <Phone className="h-4 w-4" aria-hidden="true" /> Call 7895616847
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-editorial-border bg-white font-bold uppercase text-xs tracking-widest">
              Send an enquiry <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-editorial-border">
        <div className="container mx-auto px-4 md:px-10 max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">{page.detailsHeading}</h2>
          <p className="text-editorial-subtext text-lg leading-relaxed mb-8">{page.details}</p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {page.highlights.map((highlight) => (
              <li key={highlight} className="p-5 bg-editorial-bg border border-editorial-border leading-relaxed">{highlight}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-editorial-bg">
        <div className="container mx-auto px-4 md:px-10 max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-8">Frequently asked questions</h2>
          <div className="space-y-5">
            {page.questions.map(({ question, answer }) => (
              <article key={question} className="p-6 md:p-8 bg-white border border-editorial-border">
                <h3 className="font-serif text-xl md:text-2xl mb-3">{question}</h3>
                <p className="text-editorial-subtext leading-relaxed">{answer}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-sm text-editorial-subtext">
            Looking for another trip? Visit our <Link to="/services" className="text-editorial-accent underline">taxi services and pricing page</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
