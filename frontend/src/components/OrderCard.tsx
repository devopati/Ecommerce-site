"use client";

import { Badge } from "flowbite-react";
import { ProductType } from "../types/types";

export function OrderCard({ order }: { order: ProductType }) {
  console.log(order);
  return (
    <div className="flex items-start gap-4 bg-white p-4 rounded border mb-1">
      <div>
        <img src={order.cover_image} alt="" className="w-24" />
      </div>
      <div className="w-full">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p>Quantity: {order?.qty}</p>
        <p>Price: Ksh. {Number(order?.price).toLocaleString()}</p>

        <div className="flex justify-between">
          <div></div>
          <Badge color="failure">Processing</Badge>
        </div>
      </div>
    </div>
  );
}
