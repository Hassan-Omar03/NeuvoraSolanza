"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect, useRef, useCallback } from "react"
import { ArrowRight, Sparkles, Zap, Shield, TrendingUp, Users, Award, CheckCircle2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  const [projects, setProjects] = useState<any[]>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const observerTarget = useRef(null)

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Team Members" },
    { value: "15+", label: "Years Experience" },
  ]

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      description: "We deliver projects on time with exceptional quality and performance optimization.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability standards for all our solutions.",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Strategic solutions designed to scale your business and maximize ROI.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated professionals with years of experience in their respective fields.",
    },
  ]

  const services = [
    {
      title: "Custom Web Development",
      description: "Premium websites built with cutting-edge technologies",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Custom CMS"],
    },
    {
      title: "Digital Marketing",
      description: "Complete marketing solutions to grow your business",
      features: ["Social Media Management", "PPC Campaigns", "Content Marketing", "Analytics"],
      featured: true,
    },
    {
      title: "Brand Identity",
      description: "Professional branding that makes you stand out",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Visual Identity"],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content:
        "TechVision transformed our digital presence completely. The website they built is stunning and our leads increased by 300%.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, EcoShop",
      content: "Their e-commerce solution doubled our online sales within 3 months. Outstanding service and support!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content:
        "The SEO and digital marketing campaigns delivered exceptional results. Highly recommend their services!",
      rating: 5,
    },
  ]

  const loadMoreProjects = useCallback(() => {
    if (isLoading) return
    setIsLoading(true)

    setTimeout(() => {
      const newProjects = [
        {
          id: page * 3 + 1,
          title: `Premium Project ${page * 3 + 1}`,
          description: "Innovative digital solution for enterprise clients",
          image: `https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?w=400&h=300&fit=crop`,
          tags: ["Web Development", "Innovation", "Enterprise"],
        },
        {
          id: page * 3 + 2,
          title: `Digital Strategy ${page * 3 + 2}`,
          description: "Strategic approach to digital transformation",
          image: `https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?w=400&h=300&fit=crop`,
          tags: ["Strategy", "Digital", "Growth"],
        },
        {
          id: page * 3 + 3,
          title: `Creative Excellence ${page * 3 + 3}`,
          description: "Exceptional creative solutions for modern brands",
          image: `https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=400&h=300&fit=crop`,
          tags: ["Design", "Branding", "Creative"],
        },
      ]
      setProjects((prev) => [...prev, ...newProjects])
      setPage((prev) => prev + 1)
      setIsLoading(false)
    }, 600)
  }, [page, isLoading])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          loadMoreProjects()
        }
      },
      { threshold: 0.1 },
    )

    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }

    return () => observer.disconnect()
  }, [loadMoreProjects, isLoading])

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md px-6 py-3 rounded-full mb-8 shadow-lg border border-white/30"
            >
              <Sparkles className="h-5 w-5 text-amber-600" />
              <span className="text-sm font-medium text-stone-700">Trusted by 500+ Companies</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-900 via-orange-700 to-amber-800 bg-clip-text text-transparent">
              Transform Your Digital Presence
            </h1>

            <p className="text-lg md:text-2xl text-stone-700 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              Premium web development, digital marketing, and branding solutions that drive real results for your
              business
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href="/portfolio">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-700 to-orange-600 hover:from-amber-800 hover:to-orange-700 text-lg px-8 py-6 text-white"
                >
                  Explore Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-amber-700 text-amber-900 hover:bg-amber-50 bg-transparent"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-stone-600 font-medium text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-stone-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-stone-400 rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-stone-900">Why Choose Us</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              We combine innovation, expertise, and dedication to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all border-amber-100 hover:border-amber-300 bg-stone-50">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-stone-900">{feature.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-stone-900 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`h-full hover:shadow-2xl transition-all border-amber-400 ${service.featured ? "shadow-2xl scale-105 border-amber-300" : "border-stone-700"} bg-stone-800`}
                >
                  <CardContent className="p-8">
                    {service.featured && (
                      <div className="inline-block bg-gradient-to-r from-amber-600 to-orange-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-amber-100 mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-3">
                          <CheckCircle2 className="h-5 w-5 text-amber-400 flex-shrink-0" />
                          <span className="text-amber-50">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button
                        className={`w-full ${service.featured ? "bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600" : "bg-stone-700 hover:bg-stone-600"} text-white`}
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-stone-900">Client Stories</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">Hear what our clients say about working with us</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow border-amber-100 bg-stone-50">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-stone-700 mb-6 italic text-lg leading-relaxed">{testimonial.content}</p>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-semibold text-stone-900">{testimonial.name}</div>
                        <div className="text-sm text-stone-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {projects.length > 0 && (
        <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-stone-900">Featured Projects</h2>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                Scroll down to explore more of our exceptional work
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="animate-fade-in-up"
                >
                  <Card className="h-full hover:shadow-2xl transition-all hover:-translate-y-2 border-amber-200 bg-white overflow-hidden">
                    <div className="relative h-56 overflow-hidden bg-stone-100">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-stone-900">{project.title}</h3>
                      <p className="text-stone-600 mb-4 text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div ref={observerTarget} className="w-full text-center py-12 mt-12">
              {isLoading && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  className="inline-block"
                >
                  <div className="h-8 w-8 border-4 border-amber-200 border-t-amber-600 rounded-full"></div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="py-24 bg-gradient-to-br from-amber-900 via-stone-900 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Award className="h-16 w-16 mx-auto mb-8 text-amber-300" />
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-2xl mb-10 text-amber-100">
              Let's discuss how we can help you achieve your digital goals
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 py-6 bg-white text-amber-900 hover:bg-amber-50 font-semibold">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10 bg-transparent"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
