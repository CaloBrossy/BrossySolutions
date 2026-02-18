import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, MapPin, Clock, Zap, CheckCircle2, Store, Smartphone, TrendingUp } from 'lucide-react';
import { useState } from 'react';

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold font-display tracking-tight flex items-center gap-2">
          NOVA<span className="text-indigo-500">.</span> <span className="hidden sm:inline-block text-xs font-sans font-normal text-zinc-500 border-l border-zinc-700 pl-2 ml-2">Bahía Blanca</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          <a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a>
          <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
          <a href="#planes" className="hover:text-white transition-colors">Planes</a>
        </div>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-green-600 text-white font-medium rounded-full hover:bg-green-500 transition-colors text-sm flex items-center gap-2 shadow-lg shadow-green-900/20"
        >
          <MessageCircle className="w-4 h-4" />
          Consultar por WhatsApp
        </a>
      </div>
    </motion.nav>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium tracking-wide text-indigo-300 mb-6 backdrop-blur-sm">
            <MapPin className="w-3 h-3" /> DISPONIBLE EN BAHÍA BLANCA Y ZONA
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Tu negocio necesita <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-indigo-400">
              vender más online.
            </span>
          </h1>
          
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Diseño páginas web modernas que convierten visitantes en clientes. 
            <span className="text-zinc-200 font-medium"> Sin complicaciones, listas en 72hs e integradas directo a tu WhatsApp.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-green-600 text-white rounded-full font-bold text-lg hover:bg-green-500 transition-colors flex items-center justify-center gap-2 shadow-xl shadow-green-900/20"
            >
              <MessageCircle className="w-5 h-5" />
              Quiero más clientes
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#planes"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-full font-medium text-lg hover:bg-zinc-800 transition-colors backdrop-blur-sm"
            >
              Ver opciones
            </motion.a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-zinc-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Entrega en 72hs
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Diseño Móvil
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Soporte Local
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Value Proposition Component
const ValueProp = () => {
  return (
    <section id="beneficios" className="py-20 bg-zinc-900/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Por qué una web profesional <br />
              <span className="text-indigo-400">te hace ganar dinero?</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Ventas 24/7</h3>
                  <p className="text-zinc-400 text-sm">Tu negocio sigue abierto aunque vos estés durmiendo. Los clientes pueden ver qué ofreces y contactarte en cualquier momento.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Imagen Profesional</h3>
                  <p className="text-zinc-400 text-sm">Tener una web propia te separa de la competencia que solo usa Instagram. Genera confianza inmediata.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Todo a tu WhatsApp</h3>
                  <p className="text-zinc-400 text-sm">Olvidate de formularios complicados. Botones directos para que te escriban al celular y cierres la venta ahí mismo.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
             <div className="text-center p-8 relative z-10">
                <p className="text-5xl font-bold text-white mb-2">+40%</p>
                <p className="text-zinc-400">Aumento promedio en consultas <br/>con una landing optimizada.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Component
const Services = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Landing Page Express",
      description: "Ideal para promociones o servicios específicos. Una sola página, directa al grano, diseñada para vender.",
      ideal: "Profesionales, Oficios, Promociones"
    },
    {
      icon: <Store className="w-8 h-8 text-indigo-400" />,
      title: "Web Institucional",
      description: "Sitio completo para mostrar quién sos, tus servicios, galería de fotos y ubicación. Tu oficina digital.",
      ideal: "Inmobiliarias, Estudios, Clínicas"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-400" />,
      title: "Catálogo / Tienda",
      description: "Mostrá tus productos con precios y fotos. Los pedidos te llegan ordenados por WhatsApp.",
      ideal: "Ropa, Comida, Accesorios"
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Soluciones Simples</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">Nada de cosas raras. Herramientas digitales que sirven para tu negocio real.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-indigo-500/30 transition-all group"
            >
              <div className="mb-6 p-3 rounded-xl bg-zinc-950 inline-block border border-white/5">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-zinc-400 mb-4 text-sm leading-relaxed">{service.description}</p>
              <div className="pt-4 border-t border-white/5">
                <span className="text-xs font-medium text-indigo-400 uppercase tracking-wider">Ideal para: {service.ideal}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Packages Component
const Packages = () => {
  const packages = [
    {
      name: "Presencia Rápida",
      tagline: "Empezá hoy mismo",
      features: ["Landing Page (1 sección)", "Botón de WhatsApp", "Diseño para celulares", "Hosting incluido (1 año)", "Entrega en 72hs"],
      highlight: false
    },
    {
      name: "Negocio Profesional",
      tagline: "La opción más elegida",
      features: ["Web Completa (hasta 5 secciones)", "Formulario de contacto", "Mapa de ubicación", "Enlaces a Redes Sociales", "Optimización para Google"],
      highlight: true
    },
    {
      name: "Ventas Online",
      tagline: "Tu sucursal digital",
      features: ["Catálogo de productos", "Carrito de compras simple", "Pedidos por WhatsApp", "Sin comisiones por venta", "Panel para cargar productos"],
      highlight: false
    }
  ];

  return (
    <section id="planes" className="py-24 bg-zinc-900/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Planes Claros</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Sin letras chicas ni costos ocultos. Elegí lo que tu negocio necesita hoy.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border flex flex-col ${
                pkg.highlight 
                  ? 'bg-zinc-900 border-indigo-500/50 shadow-2xl shadow-indigo-500/10 scale-105 z-10' 
                  : 'bg-zinc-950 border-white/10 hover:border-white/20'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  Recomendado
                </div>
              )}
              
              <div className="mb-6 text-center">
                <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-sm text-zinc-500">{pkg.tagline}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-lg font-medium transition-colors text-center flex items-center justify-center gap-2 ${
                pkg.highlight 
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                  : 'bg-white text-black hover:bg-zinc-200'
              }`}>
                <MessageCircle className="w-4 h-4" />
                Cotizar ahora
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Me / Local Focus
const WhyMe = () => {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">¿Por qué elegir un desarrollador local?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="font-bold mb-2">Soy de Bahía</h3>
            <p className="text-sm text-zinc-400">Entiendo el mercado local. Podemos reunirnos o hacer videollamada cuando lo necesites.</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
             <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="font-bold mb-2">Trato Directo</h3>
            <p className="text-sm text-zinc-400">Hablás conmigo, no con un bot ni con una agencia burocrática. Respuestas rápidas.</p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
             <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="font-bold mb-2">Sin Vueltas</h3>
            <p className="text-sm text-zinc-400">No te vendo humo tecnológico. Te vendo una herramienta que funciona y vende.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Final CTA
const FinalCTA = () => {
  return (
    <section className="py-24 bg-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-zinc-950/80"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">No pierdas más ventas</h2>
        <p className="text-xl text-zinc-300 mb-10">
          Tu competencia ya está online. Agendá una consulta gratuita y veamos cómo mejorar tu presencia digital hoy mismo.
        </p>
        <a 
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white font-bold rounded-full text-lg hover:bg-green-500 transition-all transform hover:scale-105 shadow-xl"
        >
          <MessageCircle className="w-6 h-6" />
          Enviar WhatsApp ahora
        </a>
        <p className="mt-4 text-sm text-zinc-500">Respondo en menos de 2 horas.</p>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="py-12 bg-zinc-950 border-t border-white/5 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <a href="#" className="text-2xl font-bold font-display tracking-tight mb-2 block">
            NOVA<span className="text-indigo-500">.</span>
          </a>
          <p className="text-zinc-500 text-sm">Diseño Web & Soluciones Digitales en Bahía Blanca.</p>
        </div>
        <div className="flex gap-6 text-zinc-400 text-sm">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="mailto:hola@novadigital.com" className="hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 selection:bg-indigo-500 selection:text-white font-sans">
      <Navbar />
      <Hero />
      <ValueProp />
      <Services />
      <Packages />
      <WhyMe />
      <FinalCTA />
      <Footer />
    </div>
  );
}
