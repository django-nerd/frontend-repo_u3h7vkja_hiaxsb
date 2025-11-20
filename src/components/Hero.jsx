import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-cream">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle editorial gradient + texture overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream/70 via-cream/30 to-cream/80 mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 10%, rgba(255,255,255,0.3), transparent 35%), radial-gradient(circle at 80% 90%, rgba(255,255,255,0.25), transparent 40%)' }} />

      <div className="relative h-full container mx-auto px-6 md:px-10 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="font-serif text-5xl md:text-7xl leading-tight text-coffee-900 tracking-tight">
            Cuppa Café Paris
          </h1>
          <p className="mt-4 md:mt-6 text-coffee-700 text-lg md:text-2xl font-sans/relaxed">
            A small café with a big heart in Le Marais
          </p>
          <div className="mt-8 flex items-center gap-6">
            <a href="#visit" className="inline-flex items-center text-coffee-800 underline decoration-gold/60 decoration-2 underline-offset-4 hover:text-coffee-900 transition-colors">Visit us</a>
            <span className="h-3 w-3 rounded-full bg-gold/70" />
            <a href="#menu" className="inline-flex items-center text-coffee-800 hover:text-coffee-900 transition-colors">Our menu</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;