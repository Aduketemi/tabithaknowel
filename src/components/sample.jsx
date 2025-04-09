import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="bg-[url('/images/hero.jpg')] bg-cover bg-center h-[90vh] flex items-center text-white px-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Your Global Pathway to Studying in the US & Canada
          </h1>
          <p className="text-lg mb-8">
            Personalized educational consulting helping you prepare, apply, and succeed abroad.
          </p>
          <Button className="bg-primary px-6 py-3 text-lg rounded-xl shadow-md">
            Book a Free Consultation
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-10 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "University Admissions",
              img: "/images/services/admissions.jpg",
              desc: "Expert guidance on university selection, applications, and interviews."
            },
            {
              title: "Test Preparation",
              img: "/images/services/test-prep.jpg",
              desc: "Get top scores in SAT, IELTS, TOEFL, and more with our prep programs."
            },
            {
              title: "Visa & Travel Support",
              img: "/images/services/visa.jpg",
              desc: "Complete assistance with student visa applications and travel planning."
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              whileHover={{ scale: 1.02 }}
            >
              <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-10 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "🎓",
              title: "1000+ Students Helped",
              desc: "Successful placements in top US & Canadian universities."
            },
            {
              icon: "🌍",
              title: "Global Reach",
              desc: "We work with students from across Africa, Asia, and beyond."
            },
            {
              icon: "📚",
              title: "Expert Advisors",
              desc: "Our consultants have real admissions experience."
            },
            {
              icon: "💬",
              title: "1-on-1 Mentorship",
              desc: "Tailored sessions for your journey and goals."
            }
          ].map((feature, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 px-10 bg-primary text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Study Abroad Journey?</h2>
        <p className="text-lg mb-8">
          Our team is here to help you every step of the way.
        </p>
        <Button className="bg-white text-primary font-bold text-lg px-6 py-3 rounded-xl">
          Schedule a Free Consultation
        </Button>
      </section>
    </main>
  );
}
