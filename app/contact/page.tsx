"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@techvision.com",
      link: "mailto:info@techvision.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Tech Street, Silicon Valley, CA 94025",
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      <Toaster />

      <section className="py-20 bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-900 to-orange-700 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your project? Contact us today for a free consultation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-amber-200">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                    <a href={info.link} className="text-stone-600 hover:text-amber-700 transition-colors">
                      {info.content}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
              <Card className="border-2 border-amber-200 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service">Service Interested In *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}
                        required
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                          <SelectItem value="seo">SEO Services</SelectItem>
                          <SelectItem value="branding">Branding</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project..."
                        rows={5}
                        className="mt-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-amber-700 to-orange-600 hover:from-amber-800 hover:to-orange-700 text-lg py-6 text-white"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <Card className="border-2 border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-6 w-6 text-amber-600" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-stone-600">Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200">
                <CardHeader>
                  <CardTitle>Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-stone-600">Free consultation and project quote</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-stone-600">24-48 hour initial response time</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-stone-600">Experienced team of 50+ professionals</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-stone-600">500+ successful projects delivered</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-stone-600">98% client satisfaction rate</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="h-96 bg-stone-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6282174725!2d-122.08424968469193!3d37.42199997982547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1234567890123"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
  )
}
