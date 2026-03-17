import { motion } from "motion/react";

export default function About() {
  return (
    <section className="py-24 bg-stone-100 dark:bg-neutral-950 text-stone-800 dark:text-stone-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-amber-600 dark:text-amber-500 font-serif text-4xl md:text-5xl font-bold mb-6">
              Nuestra Esencia
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              En <strong className="text-stone-900 dark:text-white font-medium">Terraza Loredo</strong>, celebramos la riqueza de la gastronomía mexicana con un toque de elegancia y modernidad. Cada platillo es una obra de arte culinaria, preparada con ingredientes frescos y de la más alta calidad.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Nos enorgullece ofrecer no solo comida excepcional, sino una experiencia completa. Nuestro ambiente es familiar, sofisticado y acogedor, complementado por un servicio de primera clase que te hará sentir como en casa desde el momento en que cruzas nuestras puertas.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-black/10 dark:border-white/10 pt-8">
              <div>
                <h3 className="text-3xl font-serif text-stone-900 dark:text-white mb-2">4.8</h3>
                <p className="text-sm uppercase tracking-wider text-amber-600 dark:text-amber-500">Estrellas</p>
              </div>
              <div>
                <h3 className="text-3xl font-serif text-stone-900 dark:text-white mb-2">Premium</h3>
                <p className="text-sm uppercase tracking-wider text-amber-600 dark:text-amber-500">Calidad</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 border-2 border-amber-500/30 rounded-2xl transform translate-x-4 translate-y-4"></div>
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
              alt="Ambiente del restaurante"
              className="relative z-10 rounded-2xl shadow-2xl object-cover w-full h-[500px]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
