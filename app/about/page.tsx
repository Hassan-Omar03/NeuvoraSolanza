"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest, transparent, and ethical in everything we do.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together with clients as true partners.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality work.",
    },
  ]

  const team = [
    {
      name: "Alex Thompson",
      role: "CEO & Founder",
      bio: "15+ years in digital transformation",
      initials: "AT",
    },
    {
      name: "Sarah Martinez",
      role: "CTO",
      bio: "Tech visionary with 12 years experience",
      initials: "SM",
    },
    {
      name: "David Chen",
      role: "Creative Director",
      bio: "Award-winning designer",
      initials: "DC",
    },
    {
      name: "Emma Wilson",
      role: "Head of Marketing",
      bio: "Digital marketing strategist",
      initials: "EW",
    },
    {
      name: "Michael Brown",
      role: "Lead Developer",
      bio: "Full-stack expert",
      initials: "MB",
    },
    {
      name: "Lisa Anderson",
      role: "Client Success Manager",
      bio: "Customer experience specialist",
      initials: "LA",
    },
  ]

  const achievements = [
    { number: "500+", label: "Projects Delivered" },
    { number: "250+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "25+", label: "Industry Awards" },
  ]

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-900 to-orange-700 bg-clip-text text-transparent">
              About TechVision Solutions
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate professionals dedicated to transforming businesses through innovative digital
              solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-500 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                  <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                  <p className="text-stone-600 mb-4">
                    Founded in 2009, TechVision Solutions started with a simple mission: to help businesses thrive in
                    the digital age. What began as a small team of developers has grown into a full-service digital
                    agency with over 50 talented professionals.
                  </p>
                  <p className="text-stone-600 mb-4">
                    Over the years, we've had the privilege of working with startups, SMBs, and enterprise clients
                    across various industries, delivering solutions that not only meet but exceed expectations.
                  </p>
                  <p className="text-stone-600">
                    Today, we continue to push boundaries, embracing new technologies and methodologies to provide our
                    clients with the competitive edge they need to succeed.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="border-2 border-amber-200 hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                      <p className="text-stone-600">
                        To empower businesses with innovative digital solutions that drive growth, enhance customer
                        experiences, and create lasting impact.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200 hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                      <p className="text-stone-600">
                        To be the most trusted digital partner for businesses worldwide, recognized for innovation,
                        quality, and client success.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-amber-200 bg-stone-50">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-stone-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-50 to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">Numbers that speak for themselves</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </div>
                <div className="text-stone-600 font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">Talented professionals dedicated to your success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-amber-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      {member.initials}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-amber-700 font-medium mb-2">{member.role}</p>
                    <p className="text-stone-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-900 via-stone-900 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl mb-8 text-amber-100">
              We're always looking for talented individuals to join our growing team
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-amber-900 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all hover:scale-105"
            >
              View Career Opportunities
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
