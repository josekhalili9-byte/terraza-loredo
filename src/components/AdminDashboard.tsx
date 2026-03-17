import { motion } from "motion/react";
import { Users, Calendar, Image as ImageIcon, Trash2 } from "lucide-react";
import { Reservation } from "../types";

interface AdminDashboardProps {
  reservations: Reservation[];
  deleteReservation: (id: string) => void;
}

export default function AdminDashboard({ reservations, deleteReservation }: AdminDashboardProps) {
  const today = new Date().toISOString().split('T')[0];
  const todayReservations = reservations.filter(r => r.date === today).length;

  const stats = [
    { label: "Reservaciones Hoy", value: todayReservations.toString(), icon: Calendar },
    { label: "Total Reservaciones", value: reservations.length.toString(), icon: Users },
    { label: "Fotos en Galería", value: "5", icon: ImageIcon },
  ];

  return (
    <section className="pt-32 pb-24 min-h-screen bg-stone-50 dark:bg-neutral-950 text-stone-800 dark:text-stone-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif text-amber-600 dark:text-amber-500 font-bold mb-8">
            Panel de Administración
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-stone-900 border border-black/5 dark:border-white/5 p-6 rounded-2xl flex items-center space-x-4 shadow-sm dark:shadow-none">
                <div className="bg-stone-50 dark:bg-neutral-950 p-4 rounded-xl text-amber-600 dark:text-amber-500">
                  <stat.icon size={24} />
                </div>
                <div>
                  <p className="text-stone-500 dark:text-stone-400 text-sm uppercase tracking-wider">{stat.label}</p>
                  <p className="text-3xl font-serif text-stone-900 dark:text-white">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-stone-900 border border-black/5 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm dark:shadow-none">
            <div className="p-6 border-b border-black/5 dark:border-white/5 flex justify-between items-center">
              <h2 className="text-xl font-serif text-stone-900 dark:text-white">Últimas Reservaciones</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-stone-50 dark:bg-neutral-950 text-stone-500 dark:text-stone-400 text-sm uppercase tracking-wider">
                    <th className="p-4 font-medium">Nombre</th>
                    <th className="p-4 font-medium">Fecha</th>
                    <th className="p-4 font-medium">Hora</th>
                    <th className="p-4 font-medium">Personas</th>
                    <th className="p-4 font-medium">Estado</th>
                    <th className="p-4 font-medium text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 dark:divide-white/5">
                  {reservations.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-stone-500 dark:text-stone-400">
                        No hay reservaciones registradas.
                      </td>
                    </tr>
                  ) : (
                    reservations.map((res) => (
                      <tr key={res.id} className="hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-stone-900 dark:text-white">{res.name}</td>
                        <td className="p-4">{res.date}</td>
                        <td className="p-4">{res.time}</td>
                        <td className="p-4">{res.pax}</td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${res.status === 'Confirmada' ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-amber-500/20 text-amber-600 dark:text-amber-400'}`}>
                            {res.status}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <button 
                            onClick={() => deleteReservation(res.id)}
                            className="text-red-500 hover:text-red-600 dark:hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-red-500/10"
                            title="Eliminar reservación"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
