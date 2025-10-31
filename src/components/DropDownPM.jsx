import React from 'react'
import { FaChevronDown } from 'react-icons/fa';

const DropDownPM = ({ name, explain}) => {
    return (
        <>
            <div className='py-2 flex items-center justify-between'>
                <div className='font-medium'>{name}</div>
                <div>
                    <FaChevronDown
                        className='w-3 h-3 transition-transform duration-200 '
                    />
                </div>
            </div>
            <div className='w-full h-[0.8px] bg-[#E7E1DA]'></div>
        </>
    )
}

export default DropDownPM