export const Preparation = () => {
    return (
        <div className="bg-white text-gray-800">
          {/* Header */}
          <div className="bg-[#0e162a] text-white py-16 px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Test Preparation</h1>
            <p className="max-w-3xl mx-auto text-lg">
              Empowering students to succeed on standardized tests through structured classes and registration support.
            </p>
          </div>
    
          {/* Introduction */}
          <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-[#0e162a]">Introduction</h2>
            <p>
              Standardized tests remain a critical component of the college application process—especially for international students. Although some universities have moved to test-optional or test-blind policies, a strong test score can still significantly enhance a student's application and increase their chances of receiving merit-based scholarships and competitive admission offers.
            </p>
          </section>
    
          {/* Test-Optional vs Test-Blind */}
          <section className="py-12 px-6 bg-[#f9fafb] max-w-5xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-[#0e162a]">Test-Optional vs. Test-Blind: What’s the Difference?</h2>
            <p>
              <strong>Test-Optional</strong> schools allow students to choose whether to submit test scores. Submitting strong scores can strengthen your application, but you won’t be penalized for not submitting them.
            </p>
            <p>
              <strong>Test-Blind</strong> schools, on the other hand, do not consider test scores at all, even if submitted. In such cases, other aspects of the application (e.g., GPA, essays, extracurriculars) carry more weight.
            </p>
            <p>
              Understanding this difference is important when deciding whether to prepare for and take standardized tests—and we are here to help you make informed decisions.
            </p>
          </section>
    
          {/* SAT Prep Classes */}
          <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-[#0e162a]">Our SAT Prep Classes</h2>
            <p>
              We offer intensive virtual SAT preparation classes designed to equip students with the skills, strategies, and confidence to excel. Whether your student is new to the SAT or aiming to improve their score, our classes provide the structure and support they need.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>🕒 Class Schedules:</strong> Morning and Evening options available</li>
              <li><strong>📅 Duration:</strong> June to December</li>
              <li><strong>💻 Format:</strong> Virtual (accessible from anywhere)</li>
              <li><strong>💵 Payment:</strong> Monthly</li>
              <li><strong>📩 Registration:</strong> Email us at <a className="text-blue-600 underline" href="mailto:tabithaknowel@gmail.com">tabithaknowel@gmail.com</a> to sign up or learn more</li>
            </ul>
            <p>
              Our program is rigorous and results-driven, tailored to meet the individual needs of each student while building test-taking confidence.
            </p>
          </section>
    
          {/* Test Registration Support */}
          <section className="py-12 px-6 bg-[#f9fafb] max-w-5xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-[#0e162a]">Test Registration Support</h2>
            <p>
              Not taking our prep classes? No problem. We also assist students with registration for major standardized tests, including:
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 list-disc list-inside">
              <li>SSAT</li>
              <li>SAT</li>
              <li>ACT</li>
              <li>TOEFL</li>
              <li>IELTS</li>
              <li>GRE</li>
              <li>GMAT</li>
              <li>LSAT</li>
            </ul>
            <p>
              We make sure registration is smooth, timely, and correctly handled—so students can focus on preparing for success.
            </p>
          </section>
        </div>
    );
}