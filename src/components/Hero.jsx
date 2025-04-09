import { Button } from "./shared/Button"
import heroImg from "../assets/images/heroimg.jpg"

export const Hero = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div>
                <h1 className="text-3xl font-bold mb-4">Find an Independent Educational Consultant</h1>
                <p className="mb-4 max-w-md">
                    Personal guidance in your school, college, or therapeutic program search. 
                    Find an Independent Educational Consultant
                </p>
                <div className="flex space-x-4 mb-6">
                    <Button variant="outline">Let's Talk</Button>
                    <Button className="bg-orange-500 text-white">Find a Consultant</Button>
                </div>
                <div className="flex space-x-4">
                    {Array(3).fill("Smile").map((item, index) => (
                        <div key={index} className="text-xl font-bold italic relative">
                            <span className="relative z-10">{item}</span>
                            <span className="absolute -bottom-1 left-0 w-full h-3 bg-gray-200 z-0"></span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-end items-center">
                <div className="w-80 h-80 overflow-hidden rounded-3xl bg-gray-300">
                    <img src={heroImg} alt="a student image" className="w-full h-full object-cover object-[50%,30%]"/>
                </div>
                {/* <div className="w-64 h-64 rounded-full bg-gray-300"></div> */}
            </div>
        </section>
    )
}