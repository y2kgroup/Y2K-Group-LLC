"use client";

import { ArrowRight, Cloud, Shield, HeadphonesIcon, GripVertical } from "lucide-react";
import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [draggedCard, setDraggedCard] = useState<string | null>(null);

  const floatingCards = [
    { id: "cloud", icon: Cloud, label: "Cloud", gradient: "from-primary-500 to-primary-600", position: "absolute -top-12 -left-12 w-48 h-32", delay: "3s" },
    { id: "security", icon: Shield, label: "Security", gradient: "from-accent-500 to-accent-600", position: "absolute -bottom-8 -right-8 w-56 h-36", delay: "3.5s" },
    { id: "support", icon: HeadphonesIcon, label: "Support", gradient: "from-green-500 to-green-600", position: "absolute top-1/2 -right-16 w-44 h-28", delay: "4s" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-primary-900/70"></div>

      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Trusted IT Solutions Provider
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your
              <span className="block bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Business Technology
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              Enterprise-grade cloud solutions, cybersecurity, and IT consulting that empower your business to scale and succeed in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full transition-all border border-white/20"
              >
                Explore Services
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-4">Trusted by leading companies</p>
              <div className="flex flex-wrap gap-6 items-center opacity-60">
                <div className="text-sm font-semibold">AWS Partner</div>
                <div className="text-sm font-semibold">Microsoft Azure</div>
                <div className="text-sm font-semibold">Google Cloud</div>
                <div className="text-sm font-semibold">Cisco</div>
              </div>
            </div>
          </motion.div>

          {/* Visual with Draggable Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-96">
              {/* Draggable floating cards */}
              {floatingCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.id}
                    drag
                    dragMomentum={false}
                    dragElastic={0.1}
                    whileDrag={{ scale: 1.05, cursor: "grabbing" }}
                    onDragStart={() => setDraggedCard(card.id)}
                    onDragEnd={() => setDraggedCard(null)}
                    className={`${card.position} bg-gradient-to-br ${card.gradient} rounded-2xl shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing`}
                    style={{ animationDuration: card.delay }}
                    animate={
                      draggedCard === card.id
                        ? {}
                        : {
                            y: [0, -10, 0],
                          }
                    }
                    transition={{
                      duration: 2,
                      repeat: draggedCard === card.id ? 0 : Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <div className="absolute top-2 left-2 opacity-0 hover:opacity-50 transition-opacity">
                      <GripVertical className="w-4 h-4 text-white/50" />
                    </div>
                    <Icon className="w-12 h-12 text-white" />
                    <span className="ml-2 text-white font-semibold">{card.label}</span>
                  </motion.div>
                );
              })}

              {/* Central illustration */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto flex items-center justify-center mb-4">
                      <img src="/logo-icon.svg" alt="Y2K Group LLC" className="w-full h-full" />
                    </div>
                    <p className="text-white/80 text-lg">Enterprise IT Solutions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Drag hint */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="text-center mt-4"
            >
              <p className="text-white/60 text-sm flex items-center justify-center gap-2">
                <GripVertical className="w-4 h-4 animate-bounce" />
                Drag the boxes around!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
