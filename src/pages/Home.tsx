import { ArrowRight, Calendar, Clock, MapPin, ShieldCheck, Star, User, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Bisht Tour & Travels | 24/7 Cab Service in Rishikesh & Airport Drops" 
        description="Book reliable, 24/7 taxi services in Rishikesh. We offer Char Dham Yatra packages, Delhi Airport transfers, and local one-way drops in our Swift Dzire and Ertiga cabs. Call 7895616847." 
        canonicalUrl="https://bishttravels.com/" 
      />
      {/* Hero Section */}
      <section className="w-full pt-12 pb-20 bg-editorial-bg">
        <div className="container mx-auto px-4 md:px-10 flex flex-col lg:flex-row gap-12">
          
          {/* Hero Content */}
          <div className="flex-1 flex flex-col justify-center max-w-3xl">
            <span className="text-editorial-accent font-semibold text-xs uppercase tracking-[0.2em] mb-4">EST. 2026 • Rishikesh, Uttarakhand</span>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-[64px] lg:text-[72px] leading-[1.1] md:leading-[1.05] text-editorial-text mb-6">
              Top-Rated <span className="italic">Rishikesh Taxi</span> & Cab Services.
            </h1>
            
            <p className="text-lg text-[#4A4A4A] max-w-xl leading-relaxed mb-10">
              24/7 Cabs for Char Dham Yatra, Airport Transfers, & Local Drops. Whether you need a Delhi to Rishikesh taxi, Haridwar cab, or Dehradun taxi, safe and affordable journeys are guaranteed.
            </p>
            
            <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-12 items-center mb-8">
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold text-editorial-text">24/7</span>
                <span className="text-[10px] uppercase tracking-widest text-editorial-subtext mt-1">Availability</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold text-editorial-text">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-editorial-subtext mt-1">Local Guides</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold text-editorial-text">Best</span>
                <span className="text-[10px] uppercase tracking-widest text-editorial-subtext mt-1">Fleet Rates</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start gap-4 mt-2">
              <Link 
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-editorial-accent text-white font-bold uppercase text-xs tracking-widest transition-colors hover:bg-opacity-90 text-center"
              >
                Book Your Ride
              </Link>
              <Link 
                to="/services"
                className="w-full sm:w-auto px-8 py-4 bg-white border border-editorial-border text-editorial-text font-bold uppercase text-xs tracking-widest transition-colors hover:bg-gray-50 text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Quick Booking Widget */}
          <div className="w-full max-w-md lg:w-5/12 flex flex-col gap-6 justify-center mx-auto lg:mx-0 mt-10 lg:mt-0">
            <div className="bg-white/90 backdrop-blur-md p-8 border border-editorial-border shadow-sm rounded-none">
              <h3 className="font-serif text-xl mb-6 text-editorial-text">Quick Inquiry</h3>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full p-3 bg-white border border-editorial-border text-sm outline-none focus:border-editorial-accent transition-colors"
                  />
                </div>
                
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full p-3 bg-white border border-editorial-border text-sm outline-none focus:border-editorial-accent transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Pickup Location" 
                      className="w-full p-3 bg-white border border-editorial-border text-sm outline-none focus:border-editorial-accent transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Drop Location" 
                      className="w-full p-3 bg-white border border-editorial-border text-sm outline-none focus:border-editorial-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-editorial-accent text-white py-4 font-bold uppercase text-xs tracking-widest hover:bg-opacity-90 transition-colors"
                  >
                    Request Call Back
                  </button>
                </div>
              </form>
            </div>

            <div className="border-l-2 border-editorial-text pl-6 py-2">
              <p className="text-xs italic text-editorial-subtext leading-relaxed">
                "Safe, comfortable, and timely journeys for pilgrims and tourists across Chamiyala, Ghansali, and beyond."
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white border-y border-editorial-border">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col text-left">
              <h3 className="font-serif text-2xl text-editorial-text mb-4 border-b border-editorial-border pb-4">24/7 Availability</h3>
              <p className="text-editorial-subtext leading-relaxed text-sm">
                We are always ready. Whether it's a midnight airport transfer or an early morning Yatra start, we're here.
              </p>
            </div>
            
            <div className="flex flex-col text-left">
              <h3 className="font-serif text-2xl text-editorial-text mb-4 border-b border-editorial-border pb-4">Experienced Drivers</h3>
              <p className="text-editorial-subtext leading-relaxed text-sm">
                Our drivers are locals with deep knowledge of Uttarakhand's mountain routes, ensuring your safety at all times.
              </p>
            </div>
            
            <div className="flex flex-col text-left">
              <h3 className="font-serif text-2xl text-editorial-text mb-4 border-b border-editorial-border pb-4">Affordable Pricing</h3>
              <p className="text-editorial-subtext leading-relaxed text-sm">
                Transparent fares with no hidden charges. We provide premium service at the most competitive rates in Rishikesh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-editorial-bg">
        <div className="container mx-auto px-4 md:px-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-editorial-accent font-semibold text-xs uppercase tracking-[0.2em] mb-4">What We Offer</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-editorial-text mb-6">Our Core Services</h3>
            <p className="text-lg text-editorial-subtext leading-relaxed border-l-2 border-editorial-text pl-6">
              Specialized travel solutions tailored for your comfort, safety, and peace of mind across Uttarakhand and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-white border border-editorial-border hover:border-editorial-text transition-colors">
              <div className="h-48 bg-gray-100 border-b border-editorial-border flex items-center justify-center text-editorial-subtext">
                <span className="font-serif italic text-lg">Yatra Focus</span>
              </div>
              <div className="p-8">
                <h4 className="font-serif text-2xl text-editorial-text mb-3">Char Dham Yatra</h4>
                <p className="text-editorial-subtext text-sm mb-6 line-clamp-3">
                  Complete transportation packages for Yamunotri, Gangotri, Kedarnath, and Badrinath with experienced hill drivers.
                </p>
                <Link to="/services" className="inline-flex items-center gap-2 text-editorial-accent font-bold uppercase text-[10px] tracking-widest hover:text-opacity-80 transition-colors">
                  <span>View Details</span>
                  <span className="text-lg leading-none">→</span>
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group bg-white border border-editorial-border hover:border-editorial-text transition-colors">
              <div className="h-48 bg-gray-100 border-b border-editorial-border flex items-center justify-center text-editorial-subtext">
                <span className="font-serif italic text-lg">Seamless Transit</span>
              </div>
              <div className="p-8">
                <h4 className="font-serif text-2xl text-editorial-text mb-3">Airport Transfers</h4>
                <p className="text-editorial-subtext text-sm mb-6 line-clamp-3">
                  Reliable pickup and drop services connecting Delhi IGI Airport, Jolly Grant (Dehradun), to Rishikesh and nearby areas.
                </p>
                <Link to="/services" className="inline-flex items-center gap-2 text-editorial-accent font-bold uppercase text-[10px] tracking-widest hover:text-opacity-80 transition-colors">
                  <span>View Details</span>
                  <span className="text-lg leading-none">→</span>
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group bg-white border border-editorial-border hover:border-editorial-text transition-colors">
              <div className="h-48 bg-gray-100 border-b border-editorial-border flex items-center justify-center text-editorial-subtext">
                <span className="font-serif italic text-lg">Local Routes</span>
              </div>
              <div className="p-8">
                <h4 className="font-serif text-2xl text-editorial-text mb-3">Local Cabs</h4>
                <p className="text-editorial-subtext text-sm mb-6 line-clamp-3">
                  Convenient one-way or round-trip taxi services for local sightseeing, business trips, or daily commuting around Rishikesh.
                </p>
                <Link to="/services" className="inline-flex items-center gap-2 text-editorial-accent font-bold uppercase text-[10px] tracking-widest hover:text-opacity-80 transition-colors">
                  <span>View Details</span>
                  <span className="text-lg leading-none">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-editorial-text text-white">
        <div className="container mx-auto px-4 md:px-10 text-center flex flex-col items-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 max-w-2xl">Ready for your next journey?</h2>
          <p className="text-[#999] text-lg max-w-2xl mb-10 leading-relaxed font-light">
            Contact us today to book your ride or get a custom quote for your specific travel needs in and around Uttarakhand.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="tel:+917895616847"
              className="px-8 py-4 bg-editorial-accent text-white font-bold uppercase text-xs tracking-widest transition-colors hover:bg-opacity-90"
            >
              📞 Call: 7895616847
            </a>
            <Link 
              to="/contact"
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase text-xs tracking-widest transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
