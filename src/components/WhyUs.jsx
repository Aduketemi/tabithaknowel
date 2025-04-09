export const WhyUs = () => {
    return (
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
    )
}