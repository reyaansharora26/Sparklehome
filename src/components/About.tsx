import React from 'react';
import { Leaf, CheckCircle, Heart, Award } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Eco-Friendly Products',
    description: 'We use only safe, environmentally friendly cleaning products that are gentle on your home and the planet.'
  },
  {
    icon: CheckCircle,
    title: 'Attention to Detail',
    description: 'Our team pays meticulous attention to every corner, ensuring your home is spotless and fresh.'
  },
  {
    icon: Heart,
    title: 'Reliable & Friendly',
    description: 'Professional service delivered with a smile. We treat your home with the care it deserves.'
  },
  {
    icon: Award,
    title: 'Experienced Team',
    description: 'Our experienced cleaners are trained to deliver top-quality results every time.'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Choose SparkleHome?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe a clean home is a happy home. Our goal is to provide reliable, professional, and friendly service to every customer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Experience the joy of a sparkling home today!
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust SparkleHome for their cleaning needs. Let us transform your space into a haven of cleanliness and comfort.
          </p>
        </div>
      </div>
    </section>
  );
}
