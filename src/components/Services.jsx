import * as motion from "motion/react-client"
import serviceImg1 from "../assets/images/positivity-african.jpg"
// import serviceImg2 from "../assets/images/groupStudent.jpg"
import serviceImg2 from "../assets/images/college-students-different-ethnicities-cramming.jpg"
import serviceImg3 from "../assets/images/good-faces.jpg"
import { Link } from "react-router-dom"

export const Services = () => {
    return (
        <section className="py-20 px-10 bg-gray-50 text-center">
            <h2 className="text-4xl font-bold mb-12">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                    {
                        title: "University Admissions",
                        img: serviceImg1,
                        desc: "Expert guidance on university selection, applications, and interviews.",
                        url:"/admissions"
                    },
                    {
                        title: "Test Preparation",
                        img: serviceImg2,
                        desc: "Get top scores in SAT, IELTS, TOEFL, and more with our prep programs.",
                        url:"/test-preparation"
                    },
                    {
                        title: "Visa & Travel Support",
                        img: serviceImg3,
                        desc: "Complete assistance with student visa applications and travel planning.",
                        url:"/travel-support"
                    }
                ].map((service, i) => (
                    <Link to={service.url} key={i}>
                        <motion.div
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                            whileHover={{ scale: 1.02 }}
                        >
                            <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.desc}</p>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    )
}