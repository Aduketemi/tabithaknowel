export const Admissions = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <div className="bg-[#0e162a] text-white py-16 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
                <p className="text-lg max-w-3xl mx-auto">
                Begin your journey with Tabitha Knowel. Discover a learning experience tailored for growth, confidence, and excellence.
                </p>
            </div>

            <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
                <h2 className="text-2xl font-bold text-[#0e162a]">Introduction</h2>
                <p>
                At Tabitha-Knowel Educational Consulting,
                    we understand that applying to universities abroad can be both exciting and overwhelming.
                    Our goal is to simplify this process and guide students and their families every step of the way.
                    From selecting the right schools to final enrollment decisions,
                    we ensure that each student is placed in a university that aligns with their academic profile, goals,
                    and financial considerations.
                </p>
            </section>

            {/* Admissions Steps */}
            <section className="pb-16 px-6 max-w-5xl mx-auto">
                <h2 className="text-2xl font-semibold text-[#0e162a] mb-8">What we do</h2>
                <div className="grid gap-8">
                    {[
                        {
                            title: '1. School Selection',
                            description: `We carefully curate a list of up to 10 universities (or more) that align with the 
                            student's profile—including intended major, academic performance, standardized test scores, 
                            interests, financial capacity, and parental input. Using our expert knowledge and reliable tools, 
                            we identify institutions where students are most likely to thrive. Once the initial shortlist is ready, 
                            we share it with both the student and their parents for review and feedback before proceeding 
                            to the application phase. Our goal is not just admission, but the right fit.`,
                        },
                        {
                            title: '2. Financial Aid Application',
                            description: `Financial aid can be the deciding factor in choosing a university. 
                            We guide families through the complex financial aid process, helping them complete key documents 
                            such as the FAFSA, CSS Profile, and ISFAA. Our students regularly secure 50% to 100% scholarships, 
                            thanks to our meticulous approach and strong advocacy. In cases where financial aid offers need 
                            improvement, we assist in re-negotiating scholarships using updated student profiles, competing offers, 
                            or changes in family financial situations.`,
                        },
                        {
                            title: '3. Essay & Statement of Purpose Review',
                            description: (
                                <>
                                    <p className="text-gray-600">A compelling application tells a powerful story.
                                        We help students develop, refine, and polish their essays and statements of
                                        purpose to make a strong impression on admissions committees. For schools that require interviews,
                                        we also provide coaching and preparation sessions.`,
                                        description1: `For clients who opt into full-service support</p>

                                    <p className="text-gray-600 mt-4"> we handle the entire application process on their behalf,
                                        always in consultation with the student and parent before final submissions.
                                        We also track and follow up with each institution to ensure that submitted applications
                                        are marked as complete, not just submitted, because only completed applications are reviewed.</p>
                                </>
                            ),
                        },
                        {
                            title: '4. College Application Fee Payment',
                            description: (
                                <>
                                    <p className="text-gray-600">We streamline the payment process for all college-related expenses.
                                        Our system is reliable, efficient, and comes with reasonable administrative fees.
                                        We assist with payments for:</p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                                        <li>Additional SAT, TOEFL, or other test score reports</li>
                                        <li>Admission deposit fees</li>
                                        <li>SEVIS fees</li>
                                        <li>Credential evaluation services (e.g., WES, Josef Silny, etc.)</li>
                                    </ul>
                                    <p className="text-gray-600">Our support ensures payments are made accurately and on time.</p>
                                </>
                            ),
                        },
                        {
                            title: '5. Post-Admission Decision Support',
                            description: `Choosing from multiple admission offers can be both exciting and overwhelming. 
                            We offer one-on-one advisory sessions to help families analyze offers based on academic programs, 
                            scholarships, campus culture, career prospects, and more. By comparing options thoughtfully 
                            and objectively, we help students and parents select the school where the student will flourish 
                            and achieve their fullest potential.`,
                        }
                    ].map((step, idx) => (
                        <div
                            key={idx}
                            className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-xl font-bold text-[#0e162a] mb-2">{step.title}</h3>
                            <div className="text-gray-600">{step.description}</div>

                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            {/* <section className="bg-[#f9fafb] py-16 px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0e162a] mb-4">
                    Ready to Apply?
                </h2>
                <p className="text-gray-700 max-w-xl mx-auto mb-6">
                    We’re excited to welcome new families into our community. Click below to start your application or get in touch.
                </p>
                <a
                    href="/apply"
                    className="inline-block bg-[#0e162a] text-white px-8 py-3 rounded-lg hover:bg-[#1d2742] transition"
                >
                    Start Application
                </a>
            </section> */}
        </div>
    );
}