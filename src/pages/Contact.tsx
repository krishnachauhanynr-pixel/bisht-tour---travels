import type { FormEvent } from 'react';
import { MapPin, Phone } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  const sendInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = [
      'Hello, I would like to make a travel inquiry.',
      `Name: ${formData.get('name')}`,
      `Phone: ${formData.get('phone')}`,
      `Inquiry: ${formData.get('message')}`,
    ].join('\n');

    window.open(`https://wa.me/917895616847?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col w-full bg-editorial-bg min-h-[calc(100vh-64px)] text-editorial-text">
      <SEO 
        title="Contact Us | Soban Bisht Tour and Travel"
        description="Get in touch with Soban Bisht Tour and Travel for inquiries, booking a cab, or planning your Char Dham Yatra. Available 24/7."
        canonicalUrl="https://bishttravels.com/contact" 
      />
      {/* Page Header */}
      <section className="bg-editorial-bg py-12 sm:py-20 border-b border-editorial-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-editorial-text mb-4">Contact Us</h1>
          <p className="text-editorial-subtext font-light">We're here to help you plan your perfect trip.</p>
        </div>
      </section>

      <section className="py-14 sm:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            
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

              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="bg-white p-5 sm:p-8 lg:p-10 border border-editorial-border shadow-sm">
              <h3 className="font-serif text-2xl text-editorial-text mb-8">Send a Message</h3>
              <form className="space-y-6" onSubmit={sendInquiry}>
                <div>
                  <label htmlFor="inquiry-name" className="text-[10px] font-bold text-editorial-text uppercase tracking-widest block mb-2">Full Name</label>
                  <input id="inquiry-name" name="name" type="text" required className="w-full px-4 py-3 bg-white border border-editorial-border focus:border-editorial-accent outline-none text-sm transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="inquiry-phone" className="text-[10px] font-bold text-editorial-text uppercase tracking-widest block mb-2">Phone Number</label>
                  <input id="inquiry-phone" name="phone" type="tel" required className="w-full px-4 py-3 bg-white border border-editorial-border focus:border-editorial-accent outline-none text-sm transition-colors" placeholder="Your Phone" />
                </div>
                <div>
                  <label htmlFor="inquiry-message" className="text-[10px] font-bold text-editorial-text uppercase tracking-widest block mb-2">Message / Inquiry Details</label>
                  <textarea id="inquiry-message" name="message" rows={5} required className="w-full px-4 py-3 bg-white border border-editorial-border focus:border-editorial-accent outline-none text-sm transition-colors resize-none" placeholder="Tell us about your travel plans..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-editorial-text hover:bg-opacity-90 text-white font-bold uppercase text-[10px] tracking-widest transition-colors mt-4">
                  Continue to WhatsApp
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white border-t border-editorial-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-editorial-text mb-2">Find Our Location</h2>
              <p className="text-editorial-subtext">Shyampur, Rishikesh, Uttarakhand, India</p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=30.058361%2C78.226417"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center px-5 py-3 bg-editorial-text text-white text-xs font-bold uppercase tracking-widest transition-colors hover:bg-gray-800"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="overflow-hidden border border-editorial-border bg-editorial-bg">
            <iframe
              title="Map showing Soban Bisht Tour and Travel in Shyampur, Rishikesh"
              src="https://maps.google.com/maps?q=30.058361%2C78.226417&z=15&output=embed"
              className="block h-[320px] w-full sm:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-sm text-editorial-subtext">
            Coordinates: 30°03′30.1″N, 78°13′35.1″E
          </p>
        </div>
      </section>
    </div>
  );
}
