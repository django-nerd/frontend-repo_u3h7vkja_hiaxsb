import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const VisitUs = () => {
  return (
    <section id="visit" className="bg-offwhite px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-serif text-3xl md:text-5xl text-coffee-900">Visit Us</h2>
          <p className="mt-4 text-coffee-700">68 Rue de Turenne, 75003 Paris</p>
          <p className="mt-1 text-coffee-700">Mon–Fri 8:00–18:00 · Sat–Sun 9:00–19:00</p>
          <div className="mt-6 flex gap-4">
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-coffee-900 text-cream hover:bg-coffee-800 transition-colors">Reserve Your Table</a>
            <a href="https://maps.google.com?q=68+Rue+de+Turenne+75003+Paris" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-coffee-900 border border-blue-900/10 hover:bg-cream/60 transition-colors">
              <MapPin className="h-4 w-4" /> Map
            </a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden border border-blue-900/10 bg-white/70"
        >
          <iframe
            title="Map"
            width="100%"
            height="360"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.328356747662!2d2.359!3d48.863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66df2189f0f89%3A0x2f5a3c8b7a!2sLe%20Marais!5e0!3m2!1sen!2sfr!4v1686720000000"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VisitUs;