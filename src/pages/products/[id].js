import { useRouter } from 'next/router';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const programs = {
    1: {
      title: "Personal Development Mastery",
      price: 299,
      description: "Transform your life with our comprehensive personal development program.",
      features: ["1-on-1 Coaching", "Weekly Workshops", "Personal Growth Plan", "Community Access"],
      fullDescription: "Our Personal Development Mastery program is designed to help you unlock your full potential and achieve your life goals. Through personalized coaching sessions, interactive workshops, and a supportive community, you'll develop the skills and mindset needed for success."
    },
    2: {
      title: "Career Acceleration Program",
      price: 399,
      description: "Accelerate your career growth with expert guidance and proven strategies.",
      features: ["Career Planning", "Leadership Training", "Resume Building", "Interview Prep"],
      fullDescription: "The Career Acceleration Program is your fast track to professional success. Our expert coaches will help you develop leadership skills, create a compelling personal brand, and master the art of career advancement."
    }
  };

  const program = programs[id];

  if (!program) {
    return <div>Loading...</div>;
  }

  const handlePurchase = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          programId: id,
          price: program.price,
        }),
      });

      const { sessionUrl } = await response.json();
      window.location.href = sessionUrl;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl font-bold mb-6">{program.title}</h1>
              <p className="text-gray-600 mb-8">{program.fullDescription}</p>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-4">What You'll Get</h2>
                <ul className="space-y-3">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg sticky top-8">
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold mb-2">${program.price}</div>
                  <p className="text-gray-600">One-time payment</p>
                </div>
                <button
                  onClick={handlePurchase}
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
                >
                  Enroll Now
                </button>
                <div className="mt-6 text-center text-sm text-gray-600">
                  30-day money-back guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}