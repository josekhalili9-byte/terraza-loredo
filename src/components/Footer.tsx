export default function Footer() {
  return (
    <footer className="bg-stone-100 dark:bg-neutral-950 border-t border-black/10 dark:border-white/10 py-12 text-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-amber-600 dark:text-amber-500 font-bold tracking-wider mb-6">
          TERRAZA LOREDO
        </h2>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-stone-500 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Facebook</a>
          <a href="#" className="text-stone-500 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Instagram</a>
          <a href="#" className="text-stone-500 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">TripAdvisor</a>
        </div>
        <p className="text-stone-600 dark:text-stone-500 text-sm">
          &copy; {new Date().getFullYear()} Terraza Loredo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
