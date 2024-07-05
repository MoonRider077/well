import React from 'react'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'

const Footer: React.FC = () => {
  return (
    <footer className='bg-[#F7F8FA] mt-[7.5rem]'>
        <div className='mx-auto max-w-screen-xl'>
            <FooterTop />
            <FooterBottom />
        </div>
    </footer>
  )
}

export default Footer