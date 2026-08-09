import { CheckCircle2, Navigation, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="flex flex-col w-full bg-editorial-bg text-editorial-text">
      <SEO 
        title="About Bisht Tour & Travels | Trusted Travel Agency in Shyampur" 
        description="Located near HP Petrol Pump in Shyampur, Rishikesh, Bisht Tour & Travels provides experienced local drivers and 24-hour cab services for pilgrims and tourists." 
        canonicalUrl="https://bishttravels.com/about" 
      />
      {/* Page Header */}
      <section className="bg-editorial-bg py-20 border-b border-editorial-border">
        <div className="container mx-auto px-4 md:px-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl text-editorial-text mb-4">About Us</h1>
          <p className="text-lg text-editorial-subtext max-w-2xl mx-auto font-light">
            Your trusted travel partner in Uttarakhand, committed to providing the safest and most comfortable journeys.
          </p>
        </div>
      </section>

      {/* Intro & Mission */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            <div className="w-full lg:w-1/2 space-y-10">
              <div>
                <h2 className="text-editorial-accent font-semibold text-xs uppercase tracking-[0.2em] mb-4">Our Story</h2>
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-editorial-text mb-6 leading-[1.2] md:leading-[1.1]">
                  Best travel agency for Char Dham yatra in Rishikesh.
                </h3>
                <p className="text-editorial-subtext leading-relaxed">
                  Welcome to Bisht Tour & Travels, a premier Shyampur travel agency. For years, we have been the go-to choice for tourists and pilgrims seeking reliable transportation in and around Rishikesh. As locals, we understand the nuances of mountain travel better than anyone else.
                </p>
              </div>

              <div className="border-l-2 border-editorial-text pl-6 py-2">
                <h4 className="font-serif text-2xl text-editorial-text mb-3">Our Mission</h4>
                <p className="text-editorial-subtext leading-relaxed italic">
                  We are committed to providing safe, comfortable, and timely journeys for all our guests. Whether you are a pilgrim embarking on the sacred Char Dham Yatra or a traveler needing a quick airport drop, your peace of mind is our highest priority.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-200 h-72 relative flex items-center justify-center border border-editorial-border">
                  <span className="text-editorial-subtext font-serif italic">Mountain Roads View</span>
                </div>
                <div className="bg-gray-200 h-72 relative mt-12 flex items-center justify-center border border-editorial-border">
                  <span className="text-editorial-subtext font-serif italic">Happy Travelers</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-24 bg-white border-y border-editorial-border">
        <div className="container mx-auto px-4 md:px-10">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl text-editorial-text mb-6">Deep Local Expertise</h2>
            <p className="text-lg text-editorial-subtext leading-relaxed">
              Navigating the terrains of Uttarakhand requires experience and skill. Our drivers possess deep knowledge of local routes, including Chamiyala, Ghansali, and the challenging paths of the Char Dham circuit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col text-left border border-editorial-border p-8 bg-editorial-bg">
              <h4 className="font-serif text-xl text-editorial-text mb-3">Safe Navigation</h4>
              <p className="text-editorial-subtext text-sm">Expert handling of mountain roads and weather conditions.</p>
            </div>
            <div className="flex flex-col text-left border border-editorial-border p-8 bg-editorial-bg">
              <h4 className="font-serif text-xl text-editorial-text mb-3">Time Optimization</h4>
              <p className="text-editorial-subtext text-sm">Knowing the best routes to avoid traffic and ensure timely arrivals.</p>
            </div>
            <div className="flex flex-col text-left border border-editorial-border p-8 bg-editorial-bg">
              <h4 className="font-serif text-xl text-editorial-text mb-3">Hidden Gems</h4>
              <p className="text-editorial-subtext text-sm">Local insights on the best places to eat and rest during long journeys.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="py-24 bg-editorial-bg">
        <div className="container mx-auto px-4 md:px-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-editorial-accent font-semibold text-xs uppercase tracking-[0.2em] mb-4">Our Vehicles</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-editorial-text mb-6">Well-Maintained Fleet</h3>
            <p className="text-lg text-editorial-subtext border-l-2 border-editorial-text pl-6">
              We offer a range of comfortable, fully-inspected vehicles suited for different group sizes and travel needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Vehicle 1 */}
            <div className="bg-white border border-editorial-border flex flex-col hover:border-editorial-text transition-colors group">
              <div className="h-64 bg-gray-100 border-b border-editorial-border flex items-center justify-center p-8">
                <span className="text-editorial-subtext font-serif italic text-lg group-hover:scale-105 transition-transform duration-500">Swift Dzire Image</span>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-end mb-4 border-b border-editorial-border pb-4">
                  <h4 className="font-serif text-3xl text-editorial-text">Swift Dzire</h4>
                  <span className="text-xs uppercase tracking-widest text-editorial-subtext font-semibold">4 Seats</span>
                </div>
                <p className="text-editorial-subtext text-sm leading-relaxed mb-6">
                  A comfortable sedan perfect for small families, couples, or solo travelers. Ideal for local sightseeing and comfortable airport transfers.
                </p>
                <Link to="/services" className="inline-flex items-center gap-2 text-editorial-accent font-bold uppercase text-[10px] tracking-widest hover:text-opacity-80 transition-colors">
                  View Pricing <span className="text-lg leading-none">→</span>
                </Link>
              </div>
            </div>

            {/* Vehicle 2 */}
            <div className="bg-white border border-editorial-border flex flex-col hover:border-editorial-text transition-colors group">
              <div className="h-64 bg-gray-100 border-b border-editorial-border flex items-center justify-center p-8">
                <span className="text-editorial-subtext font-serif italic text-lg group-hover:scale-105 transition-transform duration-500">Maruti Ertiga Image</span>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-end mb-4 border-b border-editorial-border pb-4">
                  <h4 className="font-serif text-3xl text-editorial-text">Maruti Ertiga</h4>
                  <span className="text-xs uppercase tracking-widest text-editorial-subtext font-semibold">6+1 Seats</span>
                </div>
                <p className="text-editorial-subtext text-sm leading-relaxed mb-6">
                  A spacious MUV ideal for group trips, larger families, and the long journey of the Char Dham Yatra. Offers excellent legroom and luggage space.
                </p>
                <Link to="/services" className="inline-flex items-center gap-2 text-editorial-accent font-bold uppercase text-[10px] tracking-widest hover:text-opacity-80 transition-colors">
                  View Pricing <span className="text-lg leading-none">→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
