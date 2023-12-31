import Image from 'next/image'
import React from 'react'
import man from '../../../public/assets/vs.jpg'
import { BiStar } from 'react-icons/bi'

const BetCard = () => {
  return (
    <div className='border w-[170px] bg-[#14181D] rounded-lg'>
        <Image src={man} width={100} height={100} alt='challenge' className='w-full rounded-y  rounded-xl'/>
        <div className="flex flex-col gap-2 p-4">
            <span className="text-sm border p-1 px-4  text-orange-700 border-orange-700 ">SorS</span>
            <h1 className="text-sm">Lunar New Baahwi</h1>
            <p className="">@SandboxGame</p>
            <p className='flex items-center text-sm'>

            <BiStar />5.0
            </p>
        </div>
    </div>
  )
}

export default BetCard