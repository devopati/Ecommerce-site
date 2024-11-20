import React from "react";

const Cart = () => {
  return (
    <div className="py-14">
      <div className="pb-4 border-b">
        <h1 className="text-3xl">Your Shopping Cart</h1>
      </div>

      <div className="flex flex-col items-center justify-center mt-20">
        <h2>Your Cart is Empty</h2>
        <img
          src="https://3ec40e103fd1581afe048c3ca1d8d9c4.cdn.bubble.io/f1725529857594x125048921830299020/image%2037.svg"
          alt=""
          className="w-48"
        />
      </div>
    </div>
  );
};

export default Cart;
