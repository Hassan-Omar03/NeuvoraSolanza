'use client';

import { motion } from 'framer-motion';
import PaymentForm from '@/components/PaymentForm';
import { Toaster } from '@/components/ui/toaster';

export default function PaymentDemoPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Toaster />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Payment Demo
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Secure payment processing for all our services
            </p>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              This is a demo payment form. No actual charges will be made. Use test card number: 4242 4242 4242 4242
            </p>
          </motion.div>

          <PaymentForm amount={5000} serviceName="Custom Website Development" />
        </div>
      </section>
    </div>
  );
}
