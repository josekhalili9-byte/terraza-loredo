import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Lock, LogOut, Sun, Moon } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export default function Header({ isAdmin, setIsAdmin, isDarkMode, setIsDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Galería", href: "#galeria" },
    { name: "Reservaciones", href: "#reservaciones" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "Contacto", href: "#contacto" },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "8718") {
      setIsAdmin(true);
      setShowLogin(false);
      setPassword("");
      setError("");
      setIsOpen(false);
    } else {
      setError("Contraseña incorrecta");
    }
  };

  return (
    <>
      <header className="fixed w-full z-50 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-black/10 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0 flex items-center"
            >
              <a href="#" className="text-xl md:text-2xl font-serif text-amber-600 dark:text-amber-500 font-bold tracking-wider">
                TERRAZA LOREDO
              </a>
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {!isAdmin && navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-stone-600 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-500 transition-colors text-sm uppercase tracking-widest font-medium"
                >
                  {item.name}
                </motion.a>
              ))}
              
              <div className="flex items-center ml-4 border-l border-black/10 dark:border-white/10 pl-4 space-x-4">
                {/* Dark Mode Toggle */}
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="text-stone-500 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
                  title="Alternar tema"
                >
                  {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                {/* Admin Toggle Button (Desktop) */}
                {isAdmin ? (
                  <button 
                    onClick={() => setIsAdmin(false)} 
                    className="flex items-center space-x-2 text-amber-600 dark:text-amber-500 hover:text-amber-500 dark:hover:text-amber-400 transition-colors text-sm uppercase tracking-widest font-medium"
                    title="Cerrar sesión"
                  >
                    <LogOut size={18} />
                    <span>Salir</span>
                  </button>
                ) : (
                  <button 
                    onClick={() => setShowLogin(true)} 
                    className="flex items-center space-x-2 text-stone-500 hover:text-amber-600 dark:hover:text-amber-500 transition-colors text-sm uppercase tracking-widest font-medium"
                    title="Acceso Admin"
                  >
                    <Lock size={18} />
                    <span>Admin</span>
                  </button>
                )}
              </div>
            </nav>

            {/* Mobile Menu Controls */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="text-stone-500 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {isAdmin ? (
                <button 
                  onClick={() => setIsAdmin(false)} 
                  className="flex items-center space-x-1 text-amber-600 dark:text-amber-500 hover:text-amber-500 dark:hover:text-amber-400 transition-colors text-sm font-medium"
                >
                  <LogOut size={20} />
                  <span>Salir</span>
                </button>
              ) : (
                <button 
                  onClick={() => setShowLogin(true)} 
                  className="flex items-center space-x-1 text-stone-500 hover:text-amber-600 dark:hover:text-amber-500 transition-colors text-sm font-medium"
                >
                  <Lock size={20} />
                  <span>Admin</span>
                </button>
              )}
              
              {!isAdmin && (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-stone-600 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-500 focus:outline-none"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && !isAdmin && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-neutral-950 border-b border-black/10 dark:border-white/10 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-3 text-base font-medium text-stone-600 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-500 hover:bg-black/5 dark:hover:bg-white/5 rounded-md uppercase tracking-wider text-center"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Admin Login Modal */}
      <AnimatePresence>
        {showLogin && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 p-8 rounded-2xl w-full max-w-sm relative shadow-2xl"
            >
              <button 
                onClick={() => { setShowLogin(false); setError(""); setPassword(""); }}
                className="absolute top-4 right-4 text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-500 mb-4">
                  <Lock size={24} />
                </div>
                <h3 className="text-2xl font-serif text-stone-900 dark:text-white">Acceso Admin</h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm mt-2">Ingresa la clave para gestionar la página</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-stone-50 dark:bg-neutral-950 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-stone-900 dark:text-white focus:outline-none focus:border-amber-500 transition-colors text-center text-2xl tracking-[0.5em]"
                    placeholder="****"
                    autoFocus
                  />
                </div>
                {error && (
                  <motion.p 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="text-red-500 dark:text-red-400 text-sm text-center"
                  >
                    {error}
                  </motion.p>
                )}
                <button 
                  type="submit"
                  className="w-full bg-amber-500 text-white dark:text-neutral-950 px-6 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors mt-2"
                >
                  Ingresar
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
