import { Link } from "react-router-dom"
import logo from "../assets/images/2025tkisPG.png";
import { BiCaretDown } from "react-icons/bi"
import { Select, SelectButton, SelectOptions } from "./shared/Select"
import { Button } from "./shared/Button"
import groupStudent from '../assets/images/groupStudent.jpg'; 
import { useModal } from '../contexts/ContactContext';

export const Header = () => {

    const { openModal } = useModal();

    const style = {
        backgroundImage: `url(${groupStudent})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
    };
    const services = [
        "University Admissions",
        "Test Preparation",
        "Visa & Travel Support"
    ]
    return (
        <header className="h-[80vh]" style={style}>
            <div className="flex justify-between items-center px-6 px-4 border-b bg-white/80 backdrop-blur-md">
                <div className="flex items-center">
                    <div className="w-24 h-24" data-aos="fade-right" data-aos-duration="3000">
                        <img src={logo} alt="tabitha knowel logo" className="object-cover"/>
                    </div>
                    <div className="text-2xl font-bold italic" data-aos="fade-right" data-aos-duration="1500">Tabitha-Knowel Educational Consulting</div>
                </div>
                <nav className="space-x-6 hidden md:flex font-medium">
                    <Link to={"/"} className="hover:text-orange-500">Home</Link>
                    <Select>
                        <SelectButton className='gap-2 hover:text-orange-500'>
                            <p className="text-nowrap">Our Services</p>
                            <BiCaretDown size={16}/>
                        </SelectButton>
                        <SelectOptions>
                            <div>
                                {services.map(service => (
                                    <div key={service} className="text-nowrap py-2 hover:text-orange-500">{service}</div>
                                ))}
                            </div>
                        </SelectOptions>
                    </Select>
                    <Select>
                        <SelectButton className='gap-2 hover:text-orange-500'>
                            <p className="text-nowrap">Resources</p>
                            <BiCaretDown size={16}/>
                        </SelectButton>
                        <SelectOptions>
                            <div>
                                {services.map(service => (
                                    <div key={service} className="text-nowrap py-2 hover:text-orange-500">{service}</div>
                                ))}
                            </div>
                        </SelectOptions>
                    </Select>
                    <Link to={"/"} className="hover:text-orange-500">Blog</Link>
                    {/* <a href="#" className="bg-orange-500 px-3 py-1 rounded text-white">LOREM HAS</a> */}
                </nav>
                <Button onClick={openModal} className="text-white bg-primary font-medium px-4 rounded-3xl" data-aos="zoom-in" data-aos-duration="1500">
                    Let's Talk
                </Button>

            </div>
        </header>
    )
}
