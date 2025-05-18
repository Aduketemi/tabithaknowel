import { Button } from "./shared/Button"
import featureImg from "../assets/images/groupStudent.jpg"
import { useModal } from "../contexts/ContactContext"

export const Feature = () => {
  const { openModal } = useModal();

  return (
    <section className="p-8 w-4/5 m-auto">
      <div className="bg-white shadow-lg py-6 pl-6 grid grid-cols-1 md:grid-cols-[300px_1fr_80px] gap-6">
        {/* <div className="bg-gray-300 h-64"></div> */}
        <div className="w-64 h-full overflow-hidden bg-gray-300">
          <img src={featureImg} alt="students" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-sm text-justify">
            Tabitha-Knowel Educational Consulting, we are passionate about
            guiding African students—especially Nigerians—towards fulfilling
            their dreams of quality education abroad. Since our inception, our
            mission has been clear: to help students find and gain admission
            into universities that are the best fit for their academic
            ambitions, career goals, and personal growth. We offer a
            comprehensive portfolio of services for students seeking higher
            education opportunities in the United States and Canada. From
            personalized placement into undergraduate and graduate programs, to
            financial aid guidance, essay and statement of purpose reviews,
            external exam registration (SSAT, SAT, ACT, GRE, LSAT, GMAT, TOEFL,
            IELTS), application fee processing, and student visa
            orientation—including documentation and mock interviews—we are with
            you at every step. At Tabitha-Knowel, we are proud to serve as
            consultants, not agents. This means we are not tied to any
            institution and do not receive commissions or kickbacks from
            universities. Our advice is completely unbiased and centered on what
            is best for each student. We believe in offering personalized
            attention, helping students bridge any academic or personal
            development gaps, and preparing them not just for university
            admission, but for life. Whether you are just beginning your
            educational journey or seeking to transfer to a new institution, our
            team is committed to helping you unlock your full potential and
            achieve success beyond borders.
          </p>
          <Button onClick={openModal} className="mt-4 bg-orange-500 text-white">Let's Talk</Button>
        </div>
        {/* <div className="flex flex-col justify-between hidden md:flex">
            {Array(6).fill(0).map((_, index) => (
              <div key={index} className="w-full h-14 bg-gray-300"></div>
            ))}
          </div> */}
      </div>
    </section >
  );
};
