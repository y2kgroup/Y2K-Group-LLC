"use client";

import { motion } from "framer-motion";
import { Award, Users, Zap, ShieldCheck, Clock, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Industry Certified",
    description: "Our team holds certifications from AWS, Microsoft, Google Cloud, and Cisco.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Decades of combined experience in enterprise IT solutions and consulting.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Get your solutions up and running quickly with our proven methodologies.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description: "We prioritize security in every solution we design and implement.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock support to keep your business running smoothly.",
    color: "from-red-500 to-rose-500"
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Technology that grows with your business, from startup to enterprise.",
    color: "from-cyan-500 to-blue-500"
  }
];

const process = [
  { step: "01", title: "Discovery", description: "We analyze your current infrastructure and business goals." },
  { step: "02", title: "Strategy", description: "Custom solution design tailored to your specific requirements." },
  { step: "03", title: "Implementation", description: "Seamless deployment with minimal disruption to operations." },
  { step: "04", title: "Support", description: "Ongoing optimization and 24/7 support for continued success." }
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The Y2K Group Advantage
          </h2>
          <p className="text-lg text-gray-600">
            We combine technical expertise with business acumen to deliver solutions that drive real results.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 rounded-3xl p-8 md:p-12 lg:p-16 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Process</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-white/10 mb-4">{item.step}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-8 h-0.5 bg-gradient-to-r from-primary-500 to-transparent translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
