import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Clock, Phone, Utensils, CheckCircle2 } from "lucide-react";
import { Reservation } from "../types";

interface LocationContactProps {
  addReservation: (res: Omit<Reservation, "id" | "status">) => void;
}

export default function LocationContact({ addReservation }: LocationContactProps) {
  const [formData, setFormData] = useState({ name: "", pax: "2", date: "", time: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addReservation(formData);
    setSubmitted(true);
    setFormData({ name: "", pax: "2", date: "", time: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="ubicacion" className="py-24 bg-stone-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          
          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-amber-600 dark:text-amber-500 font-serif text-4xl md:text-5xl font-bold mb-8 text-center">
              Visítanos
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-stone-200 dark:bg-stone-800 p-3 rounded-full text-amber-600 dark:text-amber-500 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-stone-900 dark:text-white font-medium text-xl mb-2">Dirección</h3>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                    Centtral Interlomas, Blvd. Palmas Hills 1-MZ 002,<br />
                    Villa de las Palmas, 52787<br />
                    Naucalpan de Juárez, Estado de México
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-stone-200 dark:bg-stone-800 p-3 rounded-full text-amber-600 dark:text-amber-500 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-stone-900 dark:text-white font-medium text-xl mb-2">Horario</h3>
                  <p className="text-stone-600 dark:text-stone-400">Lunes a Miércoles: 13:00 - 23:00</p>
                  <p className="text-stone-600 dark:text-stone-400">Jueves a Sábado: 13:00 - 01:00</p>
                  <p className="text-stone-600 dark:text-stone-400">Domingo: 13:00 - 22:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-stone-200 dark:bg-stone-800 p-3 rounded-full text-emerald-600 dark:text-emerald-500 shrink-0">
                  <Utensils size={24} />
                </div>
                <div>
                  <h3 className="text-stone-900 dark:text-white font-medium text-xl mb-2">Servicios</h3>
                  <p className="text-stone-600 dark:text-stone-400">Consumo en el lugar</p>
                  <p className="text-stone-600 dark:text-stone-400">Para llevar</p>
                  <p className="text-stone-600 dark:text-stone-400">Entrega a domicilio</p>
                </div>
              </div>
            </div>

            <div id="reservaciones" className="mt-12 p-8 bg-white dark:bg-stone-900 rounded-2xl border border-black/5 dark:border-white/5 shadow-sm dark:shadow-none">
              <h3 className="text-2xl font-serif text-stone-900 dark:text-white mb-4">Reservar Mesa</h3>
              <p className="text-stone-600 dark:text-stone-400 mb-6">Completa el formulario para asegurar tu lugar.</p>
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 text-center"
                  >
                    <CheckCircle2 className="mx-auto text-emerald-500 mb-2" size={32} />
                    <h4 className="text-emerald-600 dark:text-emerald-400 font-medium text-lg">¡Reservación Confirmada!</h4>
                    <p className="text-stone-600 dark:text-stone-400 text-sm mt-1">Te esperamos pronto en Terraza Loredo.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4" 
                    onSubmit={handleSubmit}
                  >
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-stone-600 dark:text-stone-400 mb-1">Nombre completo</label>
                      <input 
                        type="text" 
                        id="nombre" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-stone-50 dark:bg-neutral-950 border border-black/10 dark:border-white/10 rounded-lg px-4 py-2 text-stone-900 dark:text-white focus:outline-none focus:border-amber-500 transition-colors" 
                        placeholder="Ej. Juan Pérez" 
                        required 
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="personas" className="block text-sm font-medium text-stone-600 dark:text-stone-400 mb-1">Personas</label>
                        <select 
                          id="personas" 
                          value={formData.pax}
                          onChange={(e) => setFormData({...formData, pax: e.target.value})}
                          className="w-full bg-stone-50 dark:bg-neutral-950 border border-black/10 dark:border-white/10 rounded-lg px-4 py-2 text-stone-900 dark:text-white focus:outline-none focus:border-amber-500 transition-colors" 
                          required
                        >
                          <option value="1">1 Persona</option>
                          <option value="2">2 Personas</option>
                          <option value="3">3 Personas</option>
                          <option value="4">4 Personas</option>
                          <option value="5">5 Personas</option>
                          <option value="6+">6+ Personas</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="fecha" className="block text-sm font-medium text-stone-600 dark:text-stone-400 mb-1">Fecha</label>
                        <input 
                          type="date" 
                          id="fecha" 
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          className="w-full bg-stone-50 dark:bg-neutral-950 border border-black/10 dark:border-white/10 rounded-lg px-4 py-2 text-stone-900 dark:text-white focus:outline-none focus:border-amber-500 transition-colors" 
                          required 
                        />
                      </div>
                      <div>
                        <label htmlFor="hora" className="block text-sm font-medium text-stone-600 dark:text-stone-400 mb-1">Hora</label>
                        <input 
                          type="time" 
                          id="hora" 
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                          className="w-full bg-stone-50 dark:bg-neutral-950 border border-black/10 dark:border-white/10 rounded-lg px-4 py-2 text-stone-900 dark:text-white focus:outline-none focus:border-amber-500 transition-colors" 
                          required 
                        />
                      </div>
                    </div>
                    <button type="submit" className="w-full mt-4 bg-amber-500 text-white dark:text-neutral-950 px-6 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors">
                      Confirmar Reservación
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
