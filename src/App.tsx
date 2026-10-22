/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { TravelLandingPage, travelPages } from './pages/TravelPages';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="airport-transfer" element={<TravelLandingPage page={travelPages.airport} />} />
            <Route path="rishikesh-sightseeing" element={<TravelLandingPage page={travelPages.sightseeing} />} />
            <Route path="char-dham-yatra" element={<TravelLandingPage page={travelPages.charDham} />} />
            <Route path="kedarnath-taxi" element={<TravelLandingPage page={travelPages.kedarnath} />} />
            <Route path="tempo-traveller" element={<TravelLandingPage page={travelPages.tempoTraveller} />} />
            <Route path="taxi-routes" element={<TravelLandingPage page={travelPages.routes} />} />
            <Route path="car-rental" element={<TravelLandingPage page={travelPages.carRental} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
