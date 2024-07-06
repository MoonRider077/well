import React from 'react'
import './SocialMedia.css'

interface socialImages {
    id: number,
    image: string,
    link: string
}

const socialMediaImages: socialImages[] = [
    { id: 1, image: '/icons/facebook.svg', link: 'https://www.facebook.com/quduq.uz/' },
    { id: 2, image: '/icons/instagram.svg', link: 'https://www.instagram.com/quduq_uz/' },
    { id: 3, image: '/icons/telegram.svg', link: 'https://t.me/quduquz/' }
]

const SocialMedia: React.FC = () => {
  return (
    <div className='flex gap-5 justify-end sm:justify-start'>
                {socialMediaImages.map((circle) => {
                    return(
                        <a key={circle.id} href={circle.link} className='p-3 bg-white rounded-full cursor-pointer social-media'>
                            <img src={circle.image} alt="Social media icon" className='w-5 h-5'/>
                        </a>
                    )
                })}
            </div>
  )
}

export default SocialMedia