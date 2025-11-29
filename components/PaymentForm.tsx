'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Lock, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface PaymentFormProps {
  amount: number;
  serviceName: string;
}

export default function PaymentForm({ amount, serviceName }: PaymentFormProps) {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: 'Payment Successful!',
      description: `Your payment of $${amount} for ${serviceName} has been processed.`,
    });

    setPaymentData({
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: '',
    });
    setIsProcessing(false);
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s/g, '');
    value = value.replace(/(\d{4})/g, '$1 ').trim();
    if (value.length <= 19) {
      setPaymentData(prev => ({ ...prev, cardNumber: value }));
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    if (value.length <= 5) {
      setPaymentData(prev => ({ ...prev, expiryDate: value }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto"
    >
      <Card className="border-2 border-blue-200 shadow-xl">
        <CardHeader className="bg-gradient-to-br from-blue-50 to-cyan-50">
          <CardTitle className="flex items-center justify-between">
            <span>Secure Payment</span>
            <Lock className="h-5 w-5 text-green-600" />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Service:</span>
              <span className="font-semibold">{serviceName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Amount:</span>
              <span className="text-2xl font-bold text-blue-600">${amount}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="cardName">Cardholder Name</Label>
              <Input
                id="cardName"
                value={paymentData.cardName}
                onChange={(e) => setPaymentData(prev => ({ ...prev, cardName: e.target.value }))}
                placeholder="John Doe"
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <div className="relative mt-2">
                <Input
                  id="cardNumber"
                  value={paymentData.cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="1234 5678 9012 3456"
                  required
                  className="pl-10"
                />
                <CreditCard className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input
                  id="expiryDate"
                  value={paymentData.expiryDate}
                  onChange={handleExpiryChange}
                  placeholder="MM/YY"
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  type="password"
                  maxLength={4}
                  value={paymentData.cvv}
                  onChange={(e) => setPaymentData(prev => ({ ...prev, cvv: e.target.value.replace(/\D/g, '') }))}
                  placeholder="123"
                  required
                  className="mt-2"
                />
              </div>
            </div>

            <div className="flex items-start space-x-2 text-sm text-gray-600 bg-gray-50 p-3 rounded">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Your payment information is encrypted and secure. We never store your card details.</span>
            </div>

            <Button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-lg py-6"
            >
              {isProcessing ? 'Processing...' : `Pay $${amount}`}
            </Button>
          </form>

          <div className="mt-6 flex justify-center space-x-4 opacity-50">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" className="h-8" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
