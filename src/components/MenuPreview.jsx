import { motion } from 'framer-motion';

const items = [
  { name: 'Espresso', detail: 'Single origin, velvety crema', price: '€3.5', img: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Cappuccino', detail: 'Oat or whole milk', price: '€5', img: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Croissant', detail: 'All-butter, flaky layers', price: '€3', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Tarte au Citron', detail: 'Bright, silky lemon', price: '€6', img: 'https://images.unsplash.com/photo-1600281148407-947b8a1f5f35?q=80&w=1200&auto=format&fit=crop' }
];

const MenuPreview = () => {
  return (
    <section id="menu" className="bg-offwhite px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-serif text-3xl md:text-5xl text-coffee-900">Menu</h2>
          <a href="#" className="text-coffee-700 hover:text-coffee-900 underline decoration-gold/60 underline-offset-4">View full menu</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl bg-white/70 border border-blue-900/5 shadow-sm"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={item.img} alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl text-coffee-900">{item.name}</h3>
                  <span className="text-coffee-700">{item.price}</span>
                </div>
                <p className="mt-1 text-sm text-coffee-700/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;