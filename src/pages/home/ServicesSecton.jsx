import React from 'react'
import Dot from '../../assets/dot.png'
import { FaDumbbell, FaHandsHelping } from 'react-icons/fa'
import { GiBeard } from 'react-icons/gi'

const ServicesSecton = () => {
  return (
    <div className='flex flex-col bg-white items-center'>
      <p>PROFESSIONAL SERVICES</p>
      <p>OUR BEST SERVICE OFFERING TO YOU</p>
      <div className='flex flex-col md:flex-row lg:fleex-row'>
        <div>
            <div>
                <img src={Dot} alt="" />
                <FaDumbbell className="text-3xl text-gray-800" title="Workout" />
                <p>Stylish Hair Cut</p>
                <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
            </div>
        </div>
        <div>
            <div>
                <img src={Dot} alt="" />
                <FaHandsHelping title="Massage" />
                <p>Body Massage</p>
                <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
            </div>
        </div>
        <div>
            <div>
                <img src={Dot} alt="" />
                <GiBeard title="Beard Styling" />
                <p>Beard Style</p>
                <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSecton
