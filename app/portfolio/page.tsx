"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink, ShoppingCart, Building, Utensils, Home, TrendingUp, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      title: "TechStart E-commerce Platform",
      category: "ecommerce",
      description: "Complete e-commerce solution with 10,000+ products",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
      tags: ["E-commerce", "Web Development", "SEO"],
      icon: ShoppingCart,
      results: ["300% increase in sales", "50% faster load time", "98% customer satisfaction"],
    },
    {
      title: "GlobalCorp Corporate Website",
      category: "corporate",
      description: "Enterprise-level corporate website with multi-language support",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      tags: ["Corporate", "Multi-language", "CMS"],
      icon: Building,
      results: ["45% more leads", "Reduced bounce rate by 60%", "8 languages supported"],
    },
    {
      title: "Restaurant Chain Ordering System",
      category: "restaurant",
      description: "Online ordering system for multi-location restaurant chain",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      tags: ["Online Ordering", "Payment Integration", "Mobile App"],
      icon: Utensils,
      results: ["1000+ daily orders", "40% increase in revenue", "4.9-star rating"],
    },
    {
      title: "Luxury Real Estate Platform",
      category: "realestate",
      description: "Premium real estate website with virtual tours",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
      tags: ["Real Estate", "Virtual Tours", "Lead Generation"],
      icon: Home,
      results: ["500+ property listings", "80% lead conversion", "VR tour integration"],
    },
    {
      title: "SaaS Company Marketing Campaign",
      category: "marketing",
      description: "Complete digital marketing strategy and execution",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      tags: ["Digital Marketing", "Google Ads", "Social Media"],
      icon: TrendingUp,
      results: ["500% ROI", "10,000+ new users", "250% engagement increase"],
    },
    {
      title: "Fashion Brand Rebranding",
      category: "branding",
      description: "Complete brand transformation and identity redesign",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      tags: ["Branding", "Graphic Design", "Brand Strategy"],
      icon: Award,
      results: ["Brand recognition +200%", "New logo, 50+ assets", "Award-winning design"],
    },
  ]

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "corporate", label: "Corporate" },
    { value: "marketing", label: "Marketing" },
    { value: "branding", label: "Branding" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-900 to-orange-700 bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Explore our successful projects and the results we've delivered for clients
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category.value}
                onClick={() => setFilter(category.value)}
                variant={filter === category.value ? "default" : "outline"}
                className={
                  filter === category.value
                    ? "bg-gradient-to-r from-amber-700 to-orange-600 text-white"
                    : "border-amber-200 text-stone-700 hover:border-amber-400"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all hover:-translate-y-2 border-amber-200 overflow-hidden bg-white">
                  <div className="relative h-56 overflow-hidden bg-stone-100">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <project.icon className="h-6 w-6 text-amber-600" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-stone-900">{project.title}</h3>
                    <p className="text-stone-600 mb-4 text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} className="bg-amber-100 text-amber-800">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-2 mb-6 bg-stone-50 p-4 rounded-lg border border-stone-100">
                      <h4 className="font-semibold text-sm text-stone-800 mb-3">Key Results:</h4>
                      {project.results.map((result) => (
                        <div key={result} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                          <span className="text-stone-700">{result}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-gradient-to-r from-amber-700 to-orange-600 hover:from-amber-800 hover:to-orange-700 text-white">
                      View Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-5xl font-bold mb-8 text-stone-900">Success Stories</h2>
              <p className="text-stone-600 mb-8 text-lg leading-relaxed">
                Every project we undertake is a partnership. We work closely with our clients to understand their goals,
                challenges, and vision. The results speak for themselves.
              </p>
              <ul className="space-y-5">
                <li className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-700 font-bold text-lg">✓</span>
                  </div>
                  <span className="text-stone-700 text-lg">Average 250% increase in conversions</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-700 font-bold text-lg">✓</span>
                  </div>
                  <span className="text-stone-700 text-lg">98% client satisfaction rate</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-700 font-bold text-lg">✓</span>
                  </div>
                  <span className="text-stone-700 text-lg">Projects delivered on time and on budget</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-500 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white p-10 rounded-2xl shadow-2xl">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent mb-2">
                      500+
                    </div>
                    <div className="text-stone-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent mb-2">
                      250+
                    </div>
                    <div className="text-stone-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent mb-2">
                      25+
                    </div>
                    <div className="text-stone-600">Industry Awards</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent mb-2">
                      98%
                    </div>
                    <div className="text-stone-600">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-amber-900 via-stone-900 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-2xl mb-10 text-amber-100">Let's create something amazing together</p>
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6 bg-white text-amber-900 hover:bg-amber-50 font-semibold">
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
