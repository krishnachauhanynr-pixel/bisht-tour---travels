import { Mail, MapPin, Phone } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <div className="flex flex-col w-full bg-editorial-bg min-h-[calc(100vh-64px)] text-editorial-text">
      <SEO 
        title="Contact Us | Bisht Tour & Travels" 
        description="Get in touch with Bisht Tour & Travels for inquiries, booking a cab, or planning your Char Dham Yatra. Available 24/7." 
        canonicalUrl="https://bishttravels.com/contact" 
      />
      {/* Page Header */}
      <section className="bg-editorial-bg py-20 border-b border-editorial-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-editorial-text mb-4">Contact Us</h1>
          <p className="text-editorial-subtext font-light">We're here to help you plan your perfect trip.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="font-serif text-3xl text-editorial-text mb-6">Get In Touch</h2>
                <p className="text-editorial-subtext leading-relaxed">
                  Whether you need a quick airport drop or a complete Char Dham Yatra package, reach out to us. We are available 24/7.
                </p>
              </div>

              <div className="space-y-8 border-l-2 border-editorial-text pl-6 py-2">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-editorial-text" />
                  </div>
                  <div>
                    <h4 className="font-bold text-editorial-text text-sm uppercase tracking-wider mb-2">Office Address</h4>
                    <p className="text-editorial-subtext leading-relaxed">Shyampur, Rishikesh,<br />Uttarakhand, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <Phone className="h-5 w-5 text-editorial-text" />
                  </div>
                  <div>
                    <h4 className="font-bold text-editorial-text text-sm uppercase tracking-wider mb-2">Phone Number</h4>
                    <a href="tel:+917895616847" className="text-editorial-subtext hover:text-editorial-accent transition-colors">+91 7895616847</a>
                    <p className="text-xs text-[#999] mt-2 italic">Available 24/7 for booking and support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <Mail className="h-5 w-5 text-editorial-text" />
                  </div>
                  <div>
                    <h4 className="font-bold text-editorial-text text-sm uppercase tracking-wider mb-2">Email Address</h4>
                    <a href="mailto:info@bishttravels.com" className="text-editorial-subtext hover:text-editorial-accent transition-colors">info@bishttravels.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="bg-white p-10 border border-editorial-border shadow-sm">
              <h3 className="font-serif text-2xl text-editorial-text mb-8">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-[10px] font-bold text-editorial-text uppercase tracking-widest block mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-white border border-editorial-border focus:border-editorial-accent outline-none text-sm transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-editorial-text uppercase tracking-widest block mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 bg-white border border-editorial-border focus:border-editorial-accent outline-none text-sm transition-colors" placeholder="Your Phone" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-editorial-text uppercase tracking-widest block mb-2">Message / Inquiry Details</label>
                  <textarea rows={5} className="w-full px-4 py-3 bg-white border border-editorial-border focus:border-editorial-accent outline-none text-sm transition-colors resize-none" placeholder="Tell us about your travel plans..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-editorial-text hover:bg-opacity-90 text-white font-bold uppercase text-[10px] tracking-widest transition-colors mt-4">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
