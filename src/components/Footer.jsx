const Footer = () => {
  return (
    <footer className="bg-offwhite border-t border-blue-900/10 px-6 md:px-10 py-14">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="font-serif text-2xl text-coffee-900">Stay in touch</h3>
          <p className="mt-2 text-coffee-700">Sign up for our seasonal coffee notes.</p>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="flex gap-3">
          <input type="email" required placeholder="Your email"
            className="flex-1 px-4 py-3 rounded-full border border-blue-900/10 bg-white/70 placeholder:text-coffee-700/60 focus:outline-none focus:ring-2 focus:ring-gold/40" />
          <button className="px-6 py-3 rounded-full bg-coffee-900 text-cream hover:bg-coffee-800 transition-colors">Subscribe</button>
        </form>
      </div>
      <div className="max-w-6xl mx-auto mt-8 text-sm text-coffee-700/70">© {new Date().getFullYear()} Cuppa Café Paris</div>
    </footer>
  );
};

export default Footer;