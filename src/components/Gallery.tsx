import { motion } from "motion/react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
    alt: "Platillo gourmet",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=1922&auto=format&fit=crop",
    alt: "Tacos premium",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop",
    alt: "Ambiente del restaurante",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop",
    alt: "Tacos al pastor",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1584132905271-512c958d674a?q=80&w=2070&auto=format&fit=crop",
    alt: "Bebidas y cocteles",
    span: "col-span-1 row-span-1"
  }
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-stone-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 dark:text-amber-500 font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Galería
          </motion.h2>
          <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">Una mirada a nuestra exquisita comida y acogedor ambiente.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-xl group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium text-lg">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
