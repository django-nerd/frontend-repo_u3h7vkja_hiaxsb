import { motion } from 'framer-motion';

const mockPosts = [
  'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507133750040-4a8f570215a7?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515616884953-c0b3d3e48d37?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop'
];

const InstagramFeed = () => {
  return (
    <section className="bg-cream px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-serif text-3xl md:text-5xl text-coffee-900">On Instagram</h2>
          <a href="https://instagram.com/cuppacafeparis" target="_blank" rel="noreferrer" className="text-coffee-700 hover:text-coffee-900 underline decoration-gold/60 underline-offset-4">@cuppacafeparis</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {mockPosts.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.03 }}
              className="aspect-square overflow-hidden rounded-lg border border-blue-900/5 bg-white/60"
            >
              <img src={src} alt="Instagram" className="h-full w-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;