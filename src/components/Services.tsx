import React from 'react';
import { Home, Sparkles, Truck, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Regular Cleaning',
    description: 'Keep your home consistently clean with our weekly or bi-weekly cleaning services. Perfect for maintaining a fresh and tidy living space.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description: 'A thorough, intensive clean that reaches every corner of your home. Ideal for seasonal refreshes or special occasions.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Truck,
    title: 'Move-In/Move-Out',
    description: 'Comprehensive cleaning for your old or new home. We ensure every surface is spotless for a fresh start.',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    icon: Briefcase,
    title: 'Office Cleaning',
    description: 'Professional cleaning services for your workplace. Create a clean, productive environment for your team.',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of cleaning solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`${service.bgColor} rounded-2xl p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
