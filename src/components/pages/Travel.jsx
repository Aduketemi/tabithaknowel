export const Travel = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Header */}
            <div className="bg-[#0e162a] text-white py-16 px-6 text-center">
                <h1 className="text-4xl font-bold mb-4">Visa and Travel Support</h1>
                <p className="max-w-3xl mx-auto text-lg">
                    Expert guidance for a smooth visa process and a confident journey to study abroad.
                </p>
            </div>

            {/* Introduction */}
            <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
                <h2 className="text-2xl font-bold text-[#0e162a]">Introduction</h2>
                <p>
                    Securing a student visa is one of the most important final steps in the journey toward studying abroad. With increasing scrutiny from consular officers and evolving immigration policies, preparation is more crucial than ever. At Tabitha-Knowel Educational Consulting, we understand the complexities and high stakes involved in the visa application process. While the final decision ultimately rests with the consular officer, we firmly believe that with the right preparation, students can present strong, confident, and credible visa applications—and greatly increase their chances of approval.
                </p>
            </section>

            {/* What We Offer */}
            <section className="py-12 px-6 bg-[#f9fafb] max-w-5xl mx-auto space-y-8">
                <h2 className="text-2xl font-bold text-[#0e162a]">What We Offer</h2>
                <ul className="space-y-6">
                    <li>
                        <p><strong>✅ Comprehensive Documentation Review</strong></p>
                        <p>
                            We ensure all your supporting documents are complete, accurate, and professionally presented, including I-20 forms, financial statements, SEVIS payment receipts, school admission letters, and more.
                        </p>
                    </li>
                    <li>
                        <p><strong>🎤 Mock Visa Interviews</strong></p>
                        <p>
                            We simulate the actual U.S. visa interview experience to help students respond clearly, confidently, and convincingly. These sessions address likely questions, body language, and key messaging.
                        </p>
                    </li>
                    <li>
                        <p><strong>📋 Visa Application Assistance</strong></p>
                        <p>
                            We walk students and parents through the DS-160 visa application form and SEVIS fee payment process step-by-step to minimize errors and avoid delays.
                        </p>
                    </li>
                    <li>
                        <p><strong>🛃 Pre-Departure Guidance</strong></p>
                        <p>
                            Once the visa is granted, we provide helpful travel checklists, packing tips, and orientation support to ensure a smooth and stress-free transition to your new academic life abroad.
                        </p>
                    </li>
                </ul>
            </section>

            {/* Why Choose Us */}
            <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
                <h2 className="text-2xl font-bold text-[#0e162a]">Why Choose Us?</h2>
                <p>
                    Our years of experience working with Nigerian students—and our deep understanding of the U.S. and Canadian student visa process—make us a reliable partner in this crucial stage. We know what works, what to avoid, and how to strategically prepare each student for success. We’re not just preparing for an interview—we’re preparing for a life-changing opportunity.
                </p>
                <p>
                    📩 To begin your visa preparation journey or to make an inquiry, please contact us at{' '}
                    <a href="mailto:tabithaknowel@gmail.com" className="text-blue-600 underline">
                        tabithaknowel@gmail.com
                    </a>.
                </p>
            </section>
        </div>
    );
}