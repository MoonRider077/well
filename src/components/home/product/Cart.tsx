import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  removeFromCart,
  removeAllFromCart,
  increase,
  decrease,
} from "../../../redux/cartSlice";

interface CartItem {
  id: string;
  titleKey: string;
  price: string;
  curKey: string;
  image: string;
  amount: number;
  quantity: number;
}

interface CartProps {
  isVisible: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isVisible, onClose }) => {
  const cartItems = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();
  const { t } = useTranslation("global");

  const totalPrice = cartItems.reduce(
    (total: number, item: CartItem) =>
      total + parseFloat(item.price.replace(/\s/g, "")) * item.quantity,
    0
  );

  let formattedTotalPrice = totalPrice.toLocaleString('en'); 
  formattedTotalPrice = formattedTotalPrice.replace(/,/g, ' ') 

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart({ id }));
  };

  const handleRemoveAllFromCart = () => {
    dispatch(removeAllFromCart());
  };

  const handleIncrease = (id: string) => {
    dispatch(increase({ id }));
  };

  const handleDecrease = (id: string) => {
    dispatch(decrease({ id }));
  };

  return (
    <div
      className={`z-[9999] w-[45%] sm:w-full rounded-tl-[16px] rounded-bl-[16px] h-screen fixed bg-white top-0 right-0 transition-transform duration-300 ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-10 sm:p-5">
        <div className="flex justify-between">
          <p className="text-[24px] leading-[36px] font-semibold">
            {t("cart.theCart")}
          </p>
          <div
            className="p-[11px] bg-[#F7F8FA] rounded-full cursor-pointer"
            onClick={onClose}
          >
            <img src="/icons/X.svg" alt="close icon" />
          </div>
          <div className="hidden sm:block absolute w-full h-[1px] bg-[#F0F2F6] left-0 top-[70px]"></div>
        </div>
        <h3
          className="mt-5 font-medium text-[#677E8B] cursor-pointer"
          onClick={handleRemoveAllFromCart}
        >
          {t("cart.resetCart")}
        </h3>
      </div>
      <div
        className="px-10 sm:px-5 overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 300px)" }}
      >
        {cartItems.length === 0 ? (
          <p className="text-center text-[#677E8B] mt-5 sm:mt-0 sm:py-5">
            {t("cart.empty")}
          </p>
        ) : (
          cartItems.map((item: CartItem, index: number) => (
            <div key={"ci-" + item.id}>
              <div className={`flex ${index !== 0 ? "mt-5" : ""} sm:hidden`}>
                <div className="border border-solid border-[#F0F2F6] rounded-[16px] p-2]">
                  <img
                    src={item.image}
                    alt="product"
                    className="max-w-32 h-auto"
                  />
                </div>
                <div className="ml-7 mt-[35px] font-medium w-[28%]">
                  <p>{t(item.titleKey)}</p>
                  <p className="mt-[10px] text-[20px] leading-[30px]">
                    {item.price} {t(item.curKey)}
                  </p>
                </div>
                <div className="mt-[47px] ml-[4rem]">
                  <div className="flex #F7F8FA py-3 border-none rounded-[50px] bg-[#F7F8FA] hover:text-[#FFFFFF] hover:bg-[#0072BB] transition duration-300 ease-in-out">
                    <button
                      className="px-[2rem] border-none outline-none"
                      onClick={() => handleDecrease(item.id)}
                    >
                      -
                    </button>
                    <div>{item.quantity}</div>
                    <button
                      className="px-[2rem] border-none outline-none"
                      onClick={() => handleIncrease(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div
                  className="ml-auto cursor-pointer"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  <img src="/icons/blackX.svg" alt="delete" />
                </div>
              </div>
              <div
                key={item.id}
                className={`hidden sm:block ${index !== 0 ? "mt-10" : ""}`}
              >
                <div className="flex relative">
                  <div className="border border-solid border-[#F0F2F6] rounded-[16px]">
                    <img
                      src={item.image}
                      alt="product"
                      className="h-auto max-w-24"
                    />
                  </div>
                  <p className="ml-5 font-medium self-center">
                    {t(item.titleKey)}
                  </p>
                  <div className="absolute right-0" onClick={() => handleRemoveFromCart(item.id)}>
                    <img src="/icons/blackX.svg" alt="close icon" />
                  </div>
                </div>
                <div className="mt-5 flex justify-between">
                  <p>
                    {item.price} {t(item.curKey)}
                  </p>
                  <div className="flex #F7F8FA py-2 border-none rounded-[50px] bg-[#F7F8FA] hover:text-[#FFFFFF] hover:bg-[#0072BB] transition duration-300 ease-in-out">
                    <button
                      className="px-[2.3rem] border-none outline-none"
                      onClick={() => handleDecrease(item.id)}
                    >
                      -
                    </button>
                    <div>{item.quantity}</div>
                    <button
                      className="px-[2.3rem] border-none outline-none"
                      onClick={() => handleIncrease(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="mt-10">
                  <hr />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <footer className="absolute bg-[#F7F8FA] bottom-0 flex sm:block justify-between sm:p-5 py-6 px-10 w-full">
        <div className="sm:flex sm:justify-between">
          <p>{t("cart.total")}</p>
          <p>
            {formattedTotalPrice} {t(cartItems.length > 0 ? cartItems[0].curKey : "")}
          </p>
        </div>
        <div className="sm:flex sm:justify-center">
          <button className="sm:mt-5 py-4 px-[5.625rem] bg-[#0072BB] text-white outline-none rounded-[50px] border border-solid font-medium hover:bg-white hover:text-[#0072BB] hover:border-[#0072BB]">
            {t("cart.confirmOrder")}
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
