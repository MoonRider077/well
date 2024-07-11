import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/cartSlice'
import './styles/Hamburger.css'

interface ProductsMenu {
    id: number,
    image: string,
    titleKey: string
    price: string; 
    curKey: string;
}

const productsHamburger: ProductsMenu[] = [
    { id: 1, image: '/images/filter_1.png', titleKey: 'products.0.title', price: '40 000', curKey: 'products.0.cur' },
    { id: 2, image: '/images/filter_2.png', titleKey: 'products.1.title', price: '12 000', curKey: 'products.1.cur' },
    { id: 3, image: '/images/filter_3.png', titleKey: 'products.2.title', price: '5 000 000', curKey: 'products.2.cur' },
    { id: 4, image: '/images/filter_4.png', titleKey: 'products.3.title', price: '20 000', curKey: 'products.3.cur' },
    { id: 5, image: '/images/filter_5.png', titleKey: 'products.4.title', price: '14 000', curKey: 'products.4.cur' }
];

const Hamburger: React.FC = () => {
    
    const { t } = useTranslation('global')
    const [imgChanged, setImgChanged] = useState(false);
    const [showProducts, setShowProducts] = useState(false)
    const dispatch = useDispatch()
    
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

    const handleAddToCart = (product: ProductsMenu) => {
        const cartItem = {
          id: product.id.toString(),
          titleKey: product.titleKey,
          price: product.price,
          curKey: product.curKey,
          image: product.image,
          quantity: 1
        };
        dispatch(addToCart(cartItem));
      };

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
                            <div id='menu' onClick={() => handleAddToCart(circle)} key={circle.id} className={`${colSpanClass} cursor-pointer relative flex items-center justify-center w-[245px] h-[72px] rounded-[200px] bg-[#F7F8FA] group`}>
                                <div className='absolute border border-solid border-[#F0F2F6] group-hover:border-[#0072BB] p-[10px] bg-white bottom-0 left-0 rounded-[200px]'>
                                    <img src={circle.image} alt="image" className='w-[50px] h-[50px] rounded-[50px]'/>
                                </div>
                                <p className={`text-[12px] group-hover:text-[#0072BB] leading-[20px] ml-[1rem] ${index === 3 || index === 4 ? 'special-class' : ''}`}>
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