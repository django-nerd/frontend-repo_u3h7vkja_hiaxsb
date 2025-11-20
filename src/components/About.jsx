import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="bg-cream px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="font-serif text-2xl md:text-4xl leading-relaxed text-coffee-900"
        >
          From beans to beauty — our café celebrates Parisian calm and craftsmanship.
        </motion.p>
      </div>
    </section>
  );
};

export default About;