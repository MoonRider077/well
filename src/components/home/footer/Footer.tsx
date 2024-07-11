import React from 'react'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'

const Footer: React.FC = () => {
  return (
    <footer className='bg-[#F7F8FA] mt-[7.5rem] sm:mt-[3.125rem] relative'>
        <div className='mx-auto max-w-screen-xl'>
            <FooterTop />
            <div className='hidden sm:block absolute w-[90%] h-[1px] bg-[#EAEDF2] left-1/2 transform -translate-x-1/2'></div>
            <div className='bg-red-[[#F0F2F6]] w-full h-[1px]'></div>
            <FooterBottom />
        </div>
    </footer>
  )
}

export default Footer