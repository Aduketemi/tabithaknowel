import { useRef, useEffect, useState, useContext, createContext } from 'react'
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export const SelectContext = createContext()

export const Select = ({children}) => {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null);

    const toggleOpen = () => {
        setIsOpen(prev => !prev)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);
    
    return (
        <SelectContext.Provider value={{isOpen, toggleOpen}}>
            <div className='relative' ref={dropdownRef}>
                {children}
            </div>
        </SelectContext.Provider>

    )
}

export const SelectButton = ({children, className}) => {
    const {toggleOpen} = useContext(SelectContext)

    return (
        <button type='button' onClick={toggleOpen} className={`flex items-center ${className}`}>
            {children}
        </button>
    ) 
}

export const SelectOptions = ({children}) => {
    const {isOpen} = useContext(SelectContext)
    return isOpen ? (
        <div className='absolute rounded-xl shadow-xl z-[1] bg-white ring-1 ring-black ring-opacity-5 p-4 mt-1 min-w-40 min-h-12'>
            {children}
        </div>
    ) : null
}

const type = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

Select.propTypes = type

SelectButton.propTypes = type

SelectOptions.propTypes = type