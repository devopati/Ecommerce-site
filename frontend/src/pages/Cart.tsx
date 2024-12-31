import { useAppDispatch, useAppSelector } from "../app/hooks/redux-hooks";
import { Button } from "flowbite-react";
import {
  increaseQty,
  reduceQty,
  removeProductFromCart,
} from "../app/slices/AppSlice";
import { CheckoutPopup } from "../components/CheckoutPopup";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { CiLock } from "react-icons/ci";
import mpesa from "../assets/mpesa.png";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.app);

  const getTotalAmount = () => {
    const total = cart.reduce((a, t) => a + Number(t.price) * t.qty, 0);

    return total.toLocaleString();
  };

  const totalFee =
    cart.reduce((a, t) => a + Number(t.price) * t.qty, 0) +
    cart.length * 20 +
    150;

  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="py-14 col-span-2">
        <CheckoutPopup
          openModal={openModal}
          setOpenModal={setOpenModal}
          total={totalFee}
        />
        <div className="pb-4 border-b flex justify-between items-center">
          <h1 className="text-xl">Cart</h1>
          {/* {cart.length > 0 && (
            <Button onClick={() => setOpenModal(true)}>
              Checkout( Ksh.{getTotalAmount()})
            </Button>
          )} */}
        </div>

        {cart.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-20">
            <h2>Your Cart is Empty</h2>
            <img
              src="https://3ec40e103fd1581afe048c3ca1d8d9c4.cdn.bubble.io/f1725529857594x125048921830299020/image%2037.svg"
              alt=""
              className="w-48"
            />
          </div>
        )}

        {cart.length > 0 && (
          <div className="bg-white px-10 py-10 rounded-md">
            <div className="">
              <h2>Cart({cart.length})</h2>
            </div>
            {cart.map((c, i) => {
              return (
                <div
                  key={i}
                  className="p-8 border-b flex justify-between items-start"
                >
                  <div className="flex gap-10 ">
                    <img src={c.cover_image} alt="" className="w-20" />
                    <div>
                      <h2 className="text-2xl">{c.name}</h2>
                      <p className="text-xs text-red-700">Few Units Left</p>
                      <h2>
                        VIK SALES <span className="text-pink-700">Express</span>
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-5">
                    <h2 className="text-2xl">
                      Ksh {(Number(c.price) * c.qty).toLocaleString()}
                    </h2>
                    <Button.Group>
                      <Button
                        onClick={() => dispatch(reduceQty(c._id))}
                        color="gray"
                      >
                        <BiMinus className="mr-3 h-4 w-4" />
                      </Button>
                      <Button disabled color="gray">
                        {c.qty}
                      </Button>
                      <Button
                        onClick={() => dispatch(increaseQty(c._id))}
                        color="gray"
                      >
                        <BiPlus className="mr-3 h-4 w-4" />
                      </Button>
                    </Button.Group>
                    <Button
                      onClick={() => dispatch(removeProductFromCart(c._id))}
                      color="red"
                    >
                      Remove From Cart
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* summarry */}
      {cart.length > 0 && (
        <div className="py-14">
          <div className="pb-4 border-b flex justify-between items-center">
            <h1 className="text-xl">Summary</h1>
          </div>

          <div className="bg-white border rounded-md p-4 px-7 flex flex-col gap-5">
            {/* <div className="border-b" /> */}
            <div className="flex justify-between items-center">
              <h2>Subtotal</h2>
              <h2>Ksh {getTotalAmount()}.00</h2>
            </div>
            <div className="flex justify-between items-center">
              <h2>QA Fee</h2>
              <h2>Ksh 0.00</h2>
            </div>
            <div className="flex justify-between items-center">
              <h2>Estimated Taxes</h2>
              <h2>Ksh {cart.length * 20}.00</h2>
            </div>
            <div className="flex justify-between items-center">
              <h2>Delivery Fee</h2>
              <h2>Ksh 150.00</h2>
            </div>

            <div className="border-b" />

            <div className="flex justify-between items-center">
              <h2>Total</h2>
              <h2>Ksh {totalFee.toLocaleString()}.00</h2>
            </div>

            <div className="w-full">
              <Button onClick={() => setOpenModal(true)} className="w-full">
                Checkout
              </Button>
            </div>

            <div className="flex -mt-3 justify-center items-center gap-1">
              <CiLock className="text-xs" />
              <h2 className="text-xs font-extralight">Secure Payment</h2>
            </div>

            <div>
              <p className="text-xs font-extralight">
                By confirming this order you accept our{" "}
                <span className="font-semibold underline cursor-pointer">
                  Terms of Service Agreement
                </span>{" "}
                and our
                <span className="font-semibold underline cursor-pointer">
                  Data Protection Policy
                </span>
              </p>
            </div>

            <div className="flex items-center ">
              <img src={mpesa} alt="" className="w-14" />
              <h2 className="text-xs font-light pb-1">Mpesa payments only</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
