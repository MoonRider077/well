import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './styles/Hamburger.css'

interface ProductsMenu {
    id: number,
    image: string,
    titleKey: string
}

const productsHamburger: ProductsMenu[] = [
    { id: 1, image: '/images/filter_1.png', titleKey: 'products.0.title' },
    { id: 1, image: '/images/filter_2.png', titleKey: 'products.1.title' },
    { id: 1, image: '/images/filter_3.png', titleKey: 'products.2.title' },
    { id: 1, image: '/images/filter_4.png', titleKey: 'products.3.title' },
    { id: 1, image: '/images/filter_5.png', titleKey: 'products.4.title' }
]

const Hamburger: React.FC = () => {
    
    const { t } = useTranslation('global')
    const [imgChanged, setImgChanged] = useState(false);
    const [showProducts, setShowProducts] = useState(false)
    
    const handleHamburgerClick = () => {
        setImgChanged(!imgChanged)
        setShowProducts(!showProducts)
    }

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const hamburgerMenu = document.getElementById('hamburgerMenu');
            const parentMenu = document.getElementById('parentMenu');
    
            if (hamburgerMenu && !hamburgerMenu.contains(event.target as Node) &&
                parentMenu && !parentMenu.contains(event.target as Node)) {
                setImgChanged(false);
                setShowProducts(false);
            }
        };
    
        document.addEventListener('mousedown', handleOutsideClick);
    
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [setImgChanged, setShowProducts]);

  return (
    <div className='relative sm:hidden'>
        <div id='parentMenu' className='bg-[#F7F8FA] p-3 rounded-full cursor-pointer' onClick={handleHamburgerClick}>
            <img 
                src={imgChanged ? "/icons/icons8-close.svg" :"/icons/burgerMenu.svg" }
                alt={imgChanged ? "Close" : "Hamburger" }
                className='w-6 h-6'
            />
        </div>
        {showProducts && (
            <div id='hamburgerMenu' className='absolute top-[70px] left-[-220px] bg-white'>
                <div className='w-[1400px] z-[9999] bg-white py-5 absolute flex items-center gap-4 '>
                 {
                    productsHamburger.map((circle, index) => {
                        const colSpanClass = index < 5 ? 'md:flex' : 'sm:grid sm:grid-cols-5';
                        
                        return (
                            <div id='menu' key={circle.id} className={`${colSpanClass} cursor-pointer relative flex items-center justify-center w-[245px] h-[72px] rounded-[200px] bg-[#F7F8FA] group`}>
                                <div className='absolute border border-[#F0F2F6] group-hover:border-[#0072BB] p-[10px] bg-white bottom-0 left-0 rounded-[200px]'>
                                    <img src={circle.image} alt="image" className='w-[50px] h-[50px] rounded-[50px]'/>
                                </div>
                                <p className={`text-[12px] group-hover:text-[#0072BB] leading-[20px] ml-[1rem] ${index === 3 || index === 4 ? ' special-class' : ''}`}>
                                    {t(circle.titleKey)}
                                </p>
                            </div>
                        )
                    })  
                 }
                </div>
            </div>
        )}
    </div>
  )
}

export default Hamburger