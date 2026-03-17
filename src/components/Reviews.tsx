import { motion } from "motion/react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Carlos Mendoza",
    text: "El mejor restaurante mexicano en Interlomas. Los tacos de Rib Eye son espectaculares y el servicio es de primera. Definitivamente volveremos.",
    rating: 5
  },
  {
    name: "Ana Sofía Ruiz",
    text: "Un ambiente hermoso y elegante. Celebramos nuestro aniversario aquí y nos trataron de maravilla. La mixología es excelente.",
    rating: 5
  },
  {
    name: "Roberto Garza",
    text: "Muy buena comida, porciones generosas y un sabor auténtico. El Tomahawk estaba cocinado a la perfección. Muy recomendado.",
    rating: 4
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-white dark:bg-stone-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 dark:text-amber-500 font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Lo Que Dicen Nuestros Clientes
          </motion.h2>
          <div className="flex justify-center items-center space-x-2">
            <span className="text-3xl font-bold text-stone-900 dark:text-white">4.8</span>
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" className={i === 4 ? "opacity-50" : ""} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-stone-50 dark:bg-neutral-950 p-8 rounded-2xl border border-black/5 dark:border-white/5 relative shadow-sm dark:shadow-none"
            >
              <div className="text-amber-500/20 absolute top-4 right-6 text-6xl font-serif">"</div>
              <div className="flex text-amber-500 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-stone-600 dark:text-stone-300 mb-6 relative z-10 italic">"{review.text}"</p>
              <p className="text-stone-900 dark:text-white font-medium uppercase tracking-wider text-sm">- {review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
