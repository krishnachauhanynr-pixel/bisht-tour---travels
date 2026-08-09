import { Construction } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Blog() {
  return (
    <div className="flex flex-col flex-grow py-24 px-4 bg-editorial-bg border-y border-editorial-border">
      <SEO 
        title="Uttarakhand Travel Journal | Bisht Tour & Travels" 
        description="Read our latest travel tips, guides, and stories about Delhi Airport to Rishikesh Taxi Fare, and Ertiga 6 seater for Char Dham yatra." 
        canonicalUrl="https://bishttravels.com/blog" 
      />
      
      <div className="container mx-auto max-w-4xl text-center mb-16">
        <h1 className="font-serif text-5xl text-editorial-text mb-6">Journal</h1>
        <p className="text-lg text-editorial-subtext max-w-2xl mx-auto leading-relaxed">
          Upcoming guides and local tips for your journey across Uttarakhand.
        </p>
      </div>

      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Article 1 */}
          <div className="bg-white border border-editorial-border p-8 flex flex-col text-left hover:border-editorial-text transition-colors">
            <span className="text-editorial-accent font-semibold text-[10px] uppercase tracking-widest mb-3">Upcoming</span>
            <h2 className="font-serif text-2xl text-editorial-text mb-4">How much is the Delhi Airport to Rishikesh Taxi Fare?</h2>
            <p className="text-editorial-subtext text-sm mb-6 flex-grow">
              A comprehensive breakdown of pricing, routes, and what to expect when booking a direct cab from Delhi airport to Rishikesh or Haridwar.
            </p>
            <span className="text-editorial-text font-bold uppercase text-[10px] tracking-widest">Coming Soon</span>
          </div>

          {/* Article 2 */}
          <div className="bg-white border border-editorial-border p-8 flex flex-col text-left hover:border-editorial-text transition-colors">
            <span className="text-editorial-accent font-semibold text-[10px] uppercase tracking-widest mb-3">Upcoming</span>
            <h2 className="font-serif text-2xl text-editorial-text mb-4">Why an Ertiga is the Best Vehicle for Your Char Dham Yatra</h2>
            <p className="text-editorial-subtext text-sm mb-6 flex-grow">
              Discover why an Ertiga 6-seater is the ideal choice for navigating the mountain roads to Kedarnath, Badrinath, Gangotri, and Yamunotri.
            </p>
            <span className="text-editorial-text font-bold uppercase text-[10px] tracking-widest">Coming Soon</span>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link 
            to="/"
            className="px-8 py-4 bg-editorial-text text-white font-bold uppercase text-[10px] tracking-widest transition-colors hover:bg-opacity-90 inline-block"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
