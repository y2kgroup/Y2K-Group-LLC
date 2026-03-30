"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Shield,
  HeadphonesIcon,
  Server,
  Lock,
  RefreshCw,
  Database,
  Code,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for AWS, Azure, and Google Cloud platforms.",
    features: ["Cloud Migration", "Infrastructure Design", "Cost Optimization", "Hybrid Solutions"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your business from evolving cyber threats.",
    features: ["Security Audits", "Threat Monitoring", "Compliance Management", "Incident Response"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: HeadphonesIcon,
    title: "IT Support & Consulting",
    description: "24/7 expert support and strategic IT consulting to optimize your technology investments.",
    features: ["24/7 Help Desk", "Strategic Planning", "Vendor Management", "Process Optimization"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Server,
    title: "Managed Infrastructure",
    description: "End-to-end infrastructure management ensuring reliability, performance, and scalability.",
    features: ["Server Management", "Network Solutions", "Backup & Recovery", "Disaster Planning"],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "Advanced data security and compliance solutions to safeguard your critical information.",
    features: ["Encryption", "Access Control", "Data Loss Prevention", "Secure Backup"],
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored software solutions and integrations designed for your unique business needs.",
    features: ["Web Applications", "API Integration", "Automation", "Custom Solutions"],
    color: "from-teal-500 to-green-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive IT Solutions
          </h2>
          <p className="text-lg text-gray-600">
            From cloud infrastructure to cybersecurity, we provide end-to-end technology services that drive business growth and innovation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover group"
              >
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">Need a custom solution for your business?</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
