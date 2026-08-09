import { ArrowRight, Check, MapPin, Plane, Route } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Services() {
  return (
    <div className="flex flex-col w-full bg-editorial-bg text-editorial-text">
      <SEO 
        title="Char Dham Yatra Taxi & Delhi Airport Transfers | Bisht Travels" 
        description="Affordable taxi rates in Rishikesh. Swift Dzire at ₹4000 and 7-seater Ertiga at ₹6500. We cover Delhi Airport to Rishikesh, Haridwar, Dehradun, and Ghansali." 
        canonicalUrl="https://bishttravels.com/services" 
      />
      {/* Page Header */}
      <section className="bg-editorial-bg py-20 border-b border-editorial-border">
        <div className="container mx-auto px-4 md:px-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl text-editorial-text mb-4">Our Services & Pricing</h1>
          <p className="text-lg text-editorial-subtext max-w-2xl mx-auto font-light">
            Transparent pricing and reliable services for all your travel needs in Uttarakhand.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-24 bg-white border-b border-editorial-border">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Char Dham Yatra */}
            <div className="bg-editorial-bg p-8 border border-editorial-border flex flex-col h-full hover:border-editorial-text transition-colors">
              <h3 className="font-serif text-3xl text-editorial-text mb-4 border-b border-editorial-border pb-4">Char Dham Yatra</h3>
              <p className="text-editorial-subtext text-sm mb-6 flex-grow leading-relaxed">
                Complete transportation packages for the sacred Char Dham circuit (Yamunotri, Gangotri, Kedarnath, Badrinath) or Do Dham. We provide dedicated, well-maintained vehicles with experienced hill drivers for the entire duration of your pilgrimage.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-editorial-accent">→</span>
                  <span className="text-editorial-text text-sm">Expert hill drivers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-editorial-accent">→</span>
                  <span className="text-editorial-text text-sm">Customizable itineraries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-editorial-accent">→</span>
                  <span className="text-editorial-text text-sm">Comfortable seating for long journeys</span>
                </li>
              </ul>
              <a href="tel:+917895616847" className="w-full py-4 bg-white border border-editorial-border text-editorial-text font-bold uppercase text-[10px] tracking-widest text-center transition-colors hover:bg-gray-50">
                Inquire Now
              </a>
            </div>

            {/* Airport Transfers */}
            <div className="bg-editorial-bg p-8 border border-editorial-border flex flex-col h-full hover:border-editorial-text transition-colors">
              <h3 className="font-serif text-3xl text-editorial-text mb-4 border-b border-editorial-border pb-4">Delhi Airport Transfers</h3>
              <p className="text-editorial-subtext text-sm mb-6 flex-grow leading-relaxed">
                Reliable 24/7 pick-up and drop-off services connecting major transit hubs. Start or end your journey comfortably without worrying about schedules.
              </p>
              <div className="mb-8">
                <h4 className="font-semibold text-editorial-text mb-3 text-[10px] uppercase tracking-[0.2em]">Covered Routes</h4>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between text-sm text-editorial-subtext border-b border-editorial-border pb-2">
                    <span>Delhi IGI</span> <span className="text-editorial-accent">→</span> <span>Rishikesh</span>
                  </li>
                  <li className="flex items-center justify-between text-sm text-editorial-subtext border-b border-editorial-border pb-2">
                    <span>Delhi IGI</span> <span className="text-editorial-accent">→</span> <span>Dehradun</span>
                  </li>
                  <li className="flex items-center justify-between text-sm text-editorial-subtext border-b border-editorial-border pb-2">
                    <span>Delhi IGI</span> <span className="text-editorial-accent">→</span> <span>Haridwar</span>
                  </li>
                  <li className="flex items-center justify-between text-sm text-editorial-subtext border-b border-editorial-border pb-2">
                    <span>Delhi IGI</span> <span className="text-editorial-accent">→</span> <span>Chamiyala/Ghansali</span>
                  </li>
                </ul>
              </div>
              <a href="tel:+917895616847" className="w-full py-4 bg-white border border-editorial-border text-editorial-text font-bold uppercase text-[10px] tracking-widest text-center transition-colors hover:bg-gray-50">
                Book Transfer
              </a>
            </div>

            {/* One-Way Cabs */}
            <div className="bg-editorial-bg p-8 border border-editorial-border flex flex-col h-full hover:border-editorial-text transition-colors">
              <h3 className="font-serif text-3xl text-editorial-text mb-4 border-b border-editorial-border pb-4">One-Way Cab Services</h3>
              <p className="text-editorial-subtext text-sm mb-6 flex-grow leading-relaxed">
                Cost-effective one-way taxi services for local and inter-city travel. Pay only for the drop, perfect for flexible travel plans.
              </p>
              <div className="mb-8">
                 <h4 className="font-semibold text-editorial-text mb-3 text-[10px] uppercase tracking-[0.2em]">Service Areas</h4>
                 <div className="flex flex-wrap gap-2">
                   {['Rishikesh', 'Haridwar', 'Bhaniyawala', 'Gumaniwala', 'Chhidderwala', 'Shyampur', 'Dehradun'].map(area => (
                     <span key={area} className="px-3 py-1 bg-white border border-editorial-border text-editorial-subtext text-xs uppercase tracking-wider">
                       {area}
                     </span>
                   ))}
                 </div>
              </div>
              <a href="tel:+917895616847" className="w-full py-4 bg-white border border-editorial-border text-editorial-text font-bold uppercase text-[10px] tracking-widest text-center transition-colors hover:bg-gray-50">
                Get a Quote
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-24 bg-editorial-bg">
        <div className="container mx-auto px-4 md:px-10">
          <div className="max-w-3xl mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-editorial-text mb-6">Transparent Pricing</h2>
            <p className="text-lg text-editorial-subtext border-l-2 border-editorial-text pl-6 leading-relaxed">
              Clear, upfront fares for our most popular vehicles. No hidden charges.
            </p>
          </div>

          <div className="max-w-4xl">
            <div className="overflow-x-auto border-t border-editorial-text pb-4">
              <table className="w-full text-left border-collapse min-w-[500px] md:min-w-0">
                <thead>
                  <tr className="border-b border-editorial-border text-[10px] uppercase tracking-[0.2em] text-[#999]">
                    <th className="py-4 pr-6 font-semibold">Vehicle Type</th>
                    <th className="py-4 px-6 font-semibold text-center">Seating Capacity</th>
                    <th className="py-4 pl-6 font-semibold text-right">Standard Fare</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-editorial-border">
                  <tr className="hover:bg-white transition-colors">
                    <td className="py-6 pr-6">
                      <p className="font-serif text-2xl text-editorial-text">Swift Dzire one way cab</p>
                      <p className="text-xs uppercase tracking-widest text-editorial-subtext mt-1">Sedan</p>
                    </td>
                    <td className="py-6 px-6 text-center text-editorial-text font-medium">4 Seats</td>
                    <td className="py-6 pl-6 text-right">
                      <span className="font-serif text-3xl font-bold text-editorial-text">₹4,000</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white transition-colors">
                    <td className="py-6 pr-6">
                      <p className="font-serif text-2xl text-editorial-text">Ertiga 6-seater</p>
                      <p className="text-xs uppercase tracking-widest text-editorial-subtext mt-1">MUV</p>
                    </td>
                    <td className="py-6 px-6 text-center text-editorial-text font-medium">6+1 Seats</td>
                    <td className="py-6 pl-6 text-right">
                      <span className="font-serif text-3xl font-bold text-editorial-text">₹6,500</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 border-l-2 border-editorial-accent pl-6 py-2">
              <p className="text-sm text-editorial-subtext italic">
                <span className="font-bold text-editorial-text mr-1">Note:</span> Fares mentioned are standard estimates and may vary based on specific routes, seasonality, and fuel price fluctuations. Tolls and parking charges may be extra. Please contact us for a final quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-white border-b border-editorial-border">
        <div className="container mx-auto px-4 md:px-10">
          <div className="max-w-3xl mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-editorial-text mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-editorial-subtext border-l-2 border-editorial-text pl-6 leading-relaxed">
              Common queries about our taxi services, Char Dham Yatra, and airport transfers.
            </p>
          </div>
          
          <div className="max-w-4xl space-y-6">
            <div className="bg-editorial-bg p-8 border border-editorial-border">
              <h3 className="font-serif text-2xl text-editorial-text mb-3">Do you provide night taxis from Delhi Airport to Rishikesh?</h3>
              <p className="text-editorial-subtext leading-relaxed">
                Yes, we operate 24/7. Whether your flight lands at 2 AM or 2 PM, our drivers will be at Delhi Airport to safely drop you in Rishikesh, Haridwar, or Dehradun.
              </p>
            </div>
            
            <div className="bg-editorial-bg p-8 border border-editorial-border">
              <h3 className="font-serif text-2xl text-editorial-text mb-3">Which car is best for the Char Dham Yatra?</h3>
              <p className="text-editorial-subtext leading-relaxed">
                For small families, our Swift Dzire is highly reliable. For groups of 5-6 people, we highly recommend our Maruti Ertiga (6+1 seater) as it provides extra legroom and luggage space for mountain travel.
              </p>
            </div>
            
            <div className="bg-editorial-bg p-8 border border-editorial-border">
              <h3 className="font-serif text-2xl text-editorial-text mb-3">Can I book a one-way cab from Rishikesh to Ghansali?</h3>
              <p className="text-editorial-subtext leading-relaxed">
                Absolutely. We offer one-way drops from Rishikesh to various mountain towns including Chamiyala, Ghansali, and Dehradun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-editorial-text text-white">
        <div className="container mx-auto px-4 md:px-10 text-center flex flex-col items-center">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-8 max-w-2xl">Need a custom itinerary or have specific requirements?</h2>
          <Link 
            to="/contact"
            className="px-8 py-4 bg-white text-editorial-text font-bold uppercase text-xs tracking-widest transition-colors hover:bg-gray-100"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
