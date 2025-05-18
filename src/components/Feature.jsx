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
              <img src={featureImg} alt="students" className="w-full h-full object-cover"/>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-sm text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <Button onClick={openModal} className="mt-4 bg-orange-500 text-white">Let's Talk</Button>
          </div>
          {/* <div className="flex flex-col justify-between hidden md:flex">
            {Array(6).fill(0).map((_, index) => (
              <div key={index} className="w-full h-14 bg-gray-300"></div>
            ))}
          </div> */}
        </div>
      </section>
    )
}