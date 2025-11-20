import { motion } from 'framer-motion';

const photos = [
  'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516665934015-6f97e6fcd623?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517705728453-57b1e04f0a01?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop'
];

const Gallery = () => {
  return (
    <section className="bg-cream px-0 py-16 md:py-24">
      <div className="overflow-x-auto whitespace-nowrap no-scrollbar">
        <div className="inline-flex gap-4 px-6 md:px-10">
          {photos.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative w-[75vw] md:w-[45vw] lg:w-[32vw] aspect-[4/3] overflow-hidden rounded-xl border border-blue-900/5 bg-white/60"
            >
              <img src={src} alt="Café" className="h-full w-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;