"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  Code,
  ShoppingCart,
  Layout,
  Palette,
  Search,
  TrendingUp,
  Share2,
  Mail,
  Megaphone,
  BarChart,
  Globe,
  Award,
  Shield,
  Wrench,
  Database,
  Zap,
  Users,
  Building,
  Languages,
  Calendar,
  Home,
  Store,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const services = [
    {
      icon: Code,
      title: "Custom Website Development",
      category: "development",
      description: "Premium, custom-built websites with cutting-edge technology",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Custom CMS", "Analytics Integration"],
      badge: "Premium",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Website Development",
      category: "development",
      description: "Advanced e-commerce solutions with payment integration",
      features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Order Tracking", "Admin Dashboard"],
      badge: "Advanced",
    },
    {
      icon: Layout,
      title: "Conversion-Focused Landing Page Design",
      category: "design",
      description: "High-converting landing pages that drive results",
      features: ["A/B Testing", "Lead Capture", "Analytics", "Mobile Optimized", "Fast Loading"],
    },
    {
      icon: Palette,
      title: "Website UI/UX Design",
      category: "design",
      description: "Professional design that enhances user experience",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing"],
      badge: "Professional",
    },
    {
      icon: Award,
      title: "Full Brand Identity Design",
      category: "branding",
      description: "Complete brand identity from concept to delivery",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography", "Marketing Materials"],
    },
    {
      icon: Search,
      title: "Complete SEO Package",
      category: "seo",
      description: "Comprehensive SEO strategy for maximum visibility",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "Monthly Reports"],
      badge: "Complete",
    },
    {
      icon: Globe,
      title: "Local SEO Domination Package",
      category: "seo",
      description: "Dominate local search results in your area",
      features: ["Google My Business", "Local Citations", "Review Management", "Local Content", "Map Optimization"],
    },
    {
      icon: Wrench,
      title: "Technical SEO Audit & Fix",
      category: "seo",
      description: "In-depth technical audit and implementation",
      features: ["Site Speed", "Mobile Optimization", "Schema Markup", "Crawl Errors", "Core Web Vitals"],
    },
    {
      icon: Mail,
      title: "Content Strategy & SEO Copywriting",
      category: "content",
      description: "Strategic content that ranks and converts",
      features: ["Content Calendar", "Keyword Optimization", "Blog Posts", "Landing Pages", "Meta Descriptions"],
    },
    {
      icon: Share2,
      title: "Social Media Management",
      category: "marketing",
      description: "Full-service social media management",
      features: ["Content Creation", "Daily Posting", "Community Management", "Analytics", "Strategy"],
      badge: "Full Package",
    },
    {
      icon: Megaphone,
      title: "Social Media Ads Management",
      category: "marketing",
      description: "Facebook and Instagram advertising campaigns",
      features: ["Campaign Strategy", "Ad Creation", "Targeting", "Optimization", "Reporting"],
    },
    {
      icon: TrendingUp,
      title: "Google Ads Campaign Management",
      category: "marketing",
      description: "Expert Google Ads management for ROI",
      features: ["Keyword Strategy", "Ad Copywriting", "Bid Management", "A/B Testing", "Conversion Tracking"],
    },
    {
      icon: BarChart,
      title: "Full Digital Marketing Management",
      category: "marketing",
      description: "Complete digital marketing strategy and execution",
      features: ["Multi-Channel", "Strategy", "Execution", "Analytics", "Optimization"],
      badge: "Complete",
    },
    {
      icon: Palette,
      title: "High-End Graphic Design",
      category: "design",
      description: "Premium graphic design for all your needs",
      features: ["Brand Materials", "Social Graphics", "Print Design", "Infographics", "Presentations"],
    },
    {
      icon: Users,
      title: "Business Profile & Online Reputation Management",
      category: "marketing",
      description: "Manage and improve your online reputation",
      features: ["Review Monitoring", "Response Management", "Profile Optimization", "Reputation Repair"],
    },
    {
      icon: Shield,
      title: "Monthly Website Maintenance + Security",
      category: "maintenance",
      description: "Keep your website secure and up-to-date",
      features: ["Security Updates", "Backups", "Monitoring", "Bug Fixes", "Performance"],
    },
    {
      icon: Store,
      title: "E-commerce Product Setup & Optimization",
      category: "ecommerce",
      description: "Professional product listing and optimization",
      features: ["Product Upload", "Image Optimization", "SEO", "Descriptions", "Categorization"],
    },
    {
      icon: Database,
      title: "CRM Setup & Automation",
      category: "automation",
      description: "CRM implementation and automation workflows",
      features: ["CRM Configuration", "Data Migration", "Automation", "Training", "Integration"],
    },
    {
      icon: Mail,
      title: "Email Marketing Automation",
      category: "automation",
      description: "Automated email campaigns that convert",
      features: ["Email Sequences", "List Management", "A/B Testing", "Analytics", "Templates"],
    },
    {
      icon: Zap,
      title: "Funnel Building",
      category: "marketing",
      description: "High-converting sales funnels",
      features: ["Funnel Strategy", "Landing Pages", "Email Sequences", "Payment Integration", "Analytics"],
    },
    {
      icon: TrendingUp,
      title: "Conversion Rate Optimization",
      category: "optimization",
      description: "Increase conversions with data-driven optimization",
      features: ["A/B Testing", "Heatmap Analysis", "User Testing", "Recommendations", "Implementation"],
      badge: "CRO",
    },
    {
      icon: BarChart,
      title: "Analytics Tracking & Monthly Reporting",
      category: "analytics",
      description: "Comprehensive analytics setup and reporting",
      features: ["GA4 Setup", "Custom Dashboards", "Monthly Reports", "Insights", "Recommendations"],
    },
    {
      icon: Megaphone,
      title: "Paid Ads Strategy Consulting",
      category: "consulting",
      description: "Expert consulting for paid advertising",
      features: ["Strategy Session", "Audit", "Roadmap", "Best Practices", "Training"],
    },
    {
      icon: Award,
      title: "Branding & Rebranding Projects",
      category: "branding",
      description: "Complete brand transformation",
      features: ["Brand Strategy", "Visual Identity", "Guidelines", "Collateral", "Launch Support"],
    },
    {
      icon: Building,
      title: "Corporate Website Packages",
      category: "development",
      description: "Enterprise-level corporate websites",
      features: ["Custom Design", "CMS", "Multi-Language", "Security", "Training"],
      badge: "Enterprise",
    },
    {
      icon: Languages,
      title: "Multi-language Website Development",
      category: "development",
      description: "Websites in multiple languages",
      features: ["Translation", "Localization", "RTL Support", "Currency", "Regional SEO"],
    },
    {
      icon: Calendar,
      title: "Custom Booking System Website",
      category: "development",
      description: "Advanced booking and reservation systems",
      features: ["Calendar", "Payments", "Notifications", "Admin Panel", "Reports"],
    },
    {
      icon: Home,
      title: "Real Estate Website Solutions",
      category: "development",
      description: "Premium real estate platforms",
      features: ["Property Listings", "Search Filters", "Virtual Tours", "Lead Capture", "CRM Integration"],
      badge: "High Ticket",
    },
    {
      icon: Store,
      title: "Restaurant Ordering System Website",
      category: "development",
      description: "Online ordering system for restaurants",
      features: ["Menu Management", "Online Ordering", "Payment", "Delivery", "Analytics"],
    },
    {
      icon: ShoppingCart,
      title: "Marketplace Website Setup",
      category: "development",
      description: "Multi-vendor marketplace platforms",
      features: ["Vendor Management", "Commission System", "Advanced Search", "Reviews", "Analytics"],
      badge: "High Ticket",
    },
  ]

  const categories = [
    { value: "all", label: "All Services" },
    { value: "development", label: "Development" },
    { value: "design", label: "Design & Branding" },
    { value: "marketing", label: "Digital Marketing" },
    { value: "seo", label: "SEO Services" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "automation", label: "Automation" },
  ]

  const filteredServices =
    selectedCategory === "all" ? services : services.filter((s) => s.category === selectedCategory)

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex flex-wrap justify-center mb-12 h-auto gap-2 bg-transparent">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-600 data-[state=active]:to-orange-500 data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all hover:-translate-y-2 border-2 hover:border-amber-200">
                    <CardContent className="p-6">
                      {service.badge && (
                        <div className="inline-block bg-gradient-to-r from-amber-600 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                          {service.badge}
                        </div>
                      )}
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center space-x-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact">
                        <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl mb-8 text-amber-50">
              We can create a tailored package that fits your specific needs and budget
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
