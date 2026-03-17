import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import LocationContact from "./components/LocationContact";
import Footer from "./components/Footer";
import AdminDashboard from "./components/AdminDashboard";
import { Reservation } from "./types";

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [reservations, setReservations] = useState<Reservation[]>([
    { id: "1", name: "Juan Pérez", date: "2026-03-16", time: "19:00", pax: 4, status: "Confirmada" },
    { id: "2", name: "María García", date: "2026-03-16", time: "20:30", pax: 2, status: "Pendiente" },
    { id: "3", name: "Carlos López", date: "2026-03-17", time: "14:00", pax: 6, status: "Confirmada" },
    { id: "4", name: "Ana Sofía Ruiz", date: "2026-03-18", time: "21:00", pax: 2, status: "Confirmada" },
  ]);

  const addReservation = (res: Omit<Reservation, "id" | "status">) => {
    const newRes = { ...res, id: Date.now().toString(), status: "Pendiente" };
    setReservations([...reservations, newRes]);
  };

  const deleteReservation = (id: string) => {
    setReservations(reservations.filter(r => r.id !== id));
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-stone-50 dark:bg-neutral-950 text-stone-800 dark:text-stone-300 font-sans selection:bg-amber-500/30 transition-colors duration-300">
        <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main>
          {isAdmin ? (
            <AdminDashboard reservations={reservations} deleteReservation={deleteReservation} />
          ) : (
            <>
              <Hero />
              <About />
              <Gallery />
              <Reviews />
              <LocationContact addReservation={addReservation} />
            </>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}
