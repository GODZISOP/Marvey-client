import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Success() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="text-center">
          <div className="text-green-500 text-6xl mb-6">✓</div>
          <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for enrolling in our program. We'll be in touch shortly with next steps.
          </p>
          <Link 
            href="/"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Return to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}