import React from 'react'

interface OrderModalProps {
    onClose: () => void;
  }

const OrderModal: React.FC<OrderModalProps> = ({ onClose }) => {
    
  return (
    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999]'>
      <div className='w-[70vw] h-[80vh] bg-white rounded-[30px] p-[30px]'>
        <nav className='flex justify-between'>
            <h2 className='text-[24px] leading-[36px] font-semibold'>
                Адрес доставки
            </h2>
            <div
                className="p-[11px] bg-[#F7F8FA] rounded-full cursor-pointer"
                onClick={onClose}
            >
                <img src="/icons/X.svg" alt="close icon" />
          </div>
        </nav>
        <div className='mt-[30px] bg-[#F7F8FA] rounded-[20px] p-5'>
          <div className='flex justify-between relative'>
            <img src="/icons/MagnifyingGlass.svg" alt="" className='absolute left-[15px] top-[15px]'/>
            <input type="text" id='text' name='text' placeholder='Введите адрес' className='font-medium p-4 w-[80%] rounded-[100px] pl-[45px]'/>
            <button className='py-4 px-[3.5rem] text-white bg-[#0072BB] rounded-[50px]'>
              Найти
            </button>
          </div>
          <div className='mt-5'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderModal