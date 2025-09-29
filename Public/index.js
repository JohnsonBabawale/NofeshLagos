import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Bed, Bath, Star } from "lucide-react";

const PROPERTIES = [
  {
    id: 1,
    title: "Cozy One-Bedroom — Lekki",
    type: "One-bedroom",
    pricePerNight: 45,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=60",
    beds: 1,
    baths: 1,
    description:
      "Bright, air-conditioned one-bedroom apartment in central Lekki — perfect for business stays and weekend getaways.",
    slug: "cozy-1br-lekki",
  },
  {
    id: 2,
    title: "Studio Suite — Victoria Island",
    type: "Studio",
    pricePerNight: 60,
    image:
      "https://images.unsplash.com/photo-1505691723518-36a2b57c3a3e?auto=format&fit=crop&w=1200&q=60",
    beds: 1,
    baths: 1,
    description:
      "Modern studio with kitchenette and fast Wi-Fi — walkable to restaurants and offices in Victoria Island.",
    slug: "studio-vi",
  },
  {
    id: 3,
    title: "Luxury Duplex — Ikoyi",
    type: "Duplex",
    pricePerNight: 140,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=60",
    beds: 3,
    baths: 2,
    description:
      "Spacious duplex with private terrace — ideal for families and extended stays in upmarket Ikoyi.",
    slug: "duplex-ikoyi",
  },
  {
    id: 4,
    title: "Compact Studio — Yaba",
    type: "Studio",
    pricePerNight: 35,
    image:
      "https://images.unsplash.com/photo-1560448204-2b9f9c3b3d6b?auto=format&fit=crop&w=1200&q=60",
    beds: 1,
    baths: 1,
    description:
      "Affordable studio close to tech hubs and transport links — great for short business trips.",
    slug: "studio-yaba",
  },
];

function Badge({ children }) {
  return (
    <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-1 text-xs rounded-full">
      {children}
    </span>
  );
}

function PropertyCard({ p }) {
  return (
    <motion.article
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">{p.title}</h3>
          <Badge>{p.type}</Badge>
        </div>
        <p className="text-sm text-gray-600 mt-3">{p.description}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-700">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><Bed className="w-4 h-4" /> {p.beds}</span>
            <span className="flex items-center gap-1"><Bath className="w-4 h-4" /> {p.baths}</span>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-indigo-600">${p.pricePerNight}</div>
            <div className="text-xs text-gray-500">per night</div>
          </div>
        </div>
        <div className="mt-6">
          <a
            href={`mailto:bookings@nofeshlagos.com?subject=Booking%20enquiry%20-%20${encodeURIComponent(
              p.title
            )}`}
            className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium"
          >
            Book now
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function NofeshLanding() {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [maxPrice, setMaxPrice] = useState(9999);

  const types = ["All", ...Array.from(new Set(PROPERTIES.map((p) => p.type)))];

  const filtered = PROPERTIES.filter((p) => {
    const matchesQuery = [p.title, p.description, p.type]
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesType = typeFilter === "All" ? true : p.type === typeFilter;
    const matchesPrice = p.pricePerNight <= maxPrice;
    return matchesQuery && matchesType && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-indigo-600 text-white w-11 h-11 flex items-center justify-center font-bold text-lg shadow-md">
              N
            </div>
            <div>
              <div className="text-2xl font-extrabold">Nofesh Lagos</div>
              <div className="text-xs text-gray-500 tracking-wide uppercase">Your Premium Home Experience</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#properties" className="hover:text-indigo-600 transition">Properties</a>
            <a href="#benefits" className="hover:text-indigo-600 transition">Why Nofesh?</a>
            <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
            <a
              href="mailto:bookings@nofeshlagos.com"
              className="bg-indigo-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-indigo-700 transition"
            >
              Book Now
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Welcome to <span className="text-indigo-600">Nofesh Lagos</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              Experience stylish apartments and duplexes across Lagos with <strong>15% off pre-launch bookings</strong>. Enjoy complimentary dining, unique amenities, and loyalty rewards designed just for you.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="#properties"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-indigo-700 transition"
              >
                Explore Properties
              </a>
              <a
                href="#benefits"
                className="inline-flex items-center gap-2 border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-indigo-50 transition"
              >
                Why Nofesh?
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative grid grid-cols-2 gap-4"
          >
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
              alt="Bedroom"
              className="rounded-2xl shadow-lg object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=800&q=80"
              alt="Dining"
              className="rounded-2xl shadow-lg object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1595526114035-0c89fdfbff2e?auto=format&fit=crop&w=800&q=80"
              alt="Library"
              className="rounded-2xl shadow-lg object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Living Room"
              className="rounded-2xl shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900">Why Choose Nofesh Lagos?</h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Not just a stay — we create memorable experiences with unique touches that set us apart.
          </p>
          <div className="mt-14 grid md:grid-cols-3 gap-10">
            {[
              { title: "Pre-Launch Offer", text: "Enjoy 15% off on all bookings during our launch period." },
              { title: "Complimentary Dining", text: "Dinner on your first night, and breakfast on your final morning — our treat." },
              { title: "Signature Touch", text: "Fully equipped rooms with branded Nofesh handwash soaps and personal care essentials." },
              { title: "Mini Library", text: "Curated reads in every room to inspire relaxation and creativity." },
              { title: "Mobility Options", text: "Chauffeur service and car rentals available through trusted partners." },
              { title: "Loyalty & Referrals", text: "10% off for returning guests plus referral rewards." },
            ].map((b, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg text-indigo-700">{b.title}</h3>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties */}
      <section id="properties" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900">Our Apartments</h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((p) => (
              <PropertyCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Referral Banner */}
      <section className="bg-indigo-700 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154154-6051c58f5f3c?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Stay More, Save More</h2>
          <p className="mt-3 text-lg text-indigo-100">
            Returning guests enjoy <strong>10% off</strong> when booking more than one night. Refer friends and unlock rewards.
          </p>
          <a
            href="mailto:bookings@nofeshlagos.com"
            className="mt-6 inline-block bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
          >
            Book Your Stay
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-semibold text-lg text-gray-900">Nofesh Lagos</h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">Your Premium Home Experience in the heart of Lagos. Thoughtfully designed spaces for short and long stays.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900">Contact Us</h3>
            <p className="mt-3 text-sm text-gray-600">Email: bookings@nofeshlagos.com</p>
            <p className="mt-1 text-sm text-gray-600">Phone: +234 800 000 0000</p>
          </div>
        </div>
        <div className="mt-10 text-center text-xs text-gray-500">© {new Date().getFullYear()} Nofesh Lagos. All rights reserved.</div>
      </footer>
    </div>
  );
}

