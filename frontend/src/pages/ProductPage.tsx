import React from "react";
import { NavbarHeader } from "../components/Navbar";
import SideView from "../components/SideView";
import { Badge, Button, Label, Select } from "flowbite-react";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity, MdStars } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { ProductCard } from "../components/ProductCard";
import { FooterCBottom } from "../components/Footer";

const ProductPage = () => {
  return (
    <div className="bg-gray-100 min-h-[100vh]">
      <NavbarHeader />

      <div className="grid grid-cols-10 pt-5">
        <SideView />
        <div className="col-span-8">
          <div className="grid grid-cols-5 gap-2">
            <div className="col-span-4">
              <div className="bg-white  flex gap-2 py-3 px-5">
                <img
                  src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/8447772/1.jpg?5251"
                  alt=""
                  className="w-80 h-80 "
                />

                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center my-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge className="rounded-none" color="info">
                        Official Store
                      </Badge>
                      <Badge className="bg-black text-white rounded-none">
                        Black Friday
                      </Badge>
                    </div>

                    <FaRegHeart className="text-xl text-red-500" />
                  </div>
                  <h1 className="pr-3 ">
                    XIAOMI Redmi 14C, 6.88" (4GB RAM+128GB Storage) (Dual Sim)
                    5160mAh - Midnight Black (2 YRs WRTY)
                  </h1>

                  <div className="border-b">
                    <h3 className="text-xs">Brand: XIAOMI</h3>
                  </div>

                  <h1 className="text-2xl font-semibold">Ksh 12,000</h1>

                  <span className="text-xs">In Stock</span>

                  <h5 className="text-xs">
                    + shipping from KSh 69 to CBD - UON/Globe/Koja/River Road
                  </h5>

                  <div className="mb-2.5 mt-2.5 flex items-center">
                    <svg
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-3 mr-2 rounded  px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                      (33 Verified Ratings)
                    </span>
                  </div>

                  <Button className="rounded-none text-xs w-full">
                    <HiShoppingCart className="mr-2 h-5 w-5" />
                    ADD TO CART
                  </Button>

                  <div className="mt-3">
                    <h1>PROMOTIONS</h1>

                    <div className="flex gap-2 items-center mt-3">
                      <TbTruckDelivery className="text-2xl text-red-500" />
                      <span>
                        Free delivery for orders above Ksh 1999 in selected
                        major cities.
                      </span>
                    </div>

                    <div className="flex gap-2 items-center mt-3">
                      <MdStars className="text-2xl text-red-500" />
                      <span>
                        Free delivery for orders above Ksh 1999 in selected
                        major cities.
                      </span>
                    </div>

                    <div className="flex gap-2 items-center mt-3">
                      <MdOutlineSecurity className="text-2xl text-red-500" />
                      <span>
                        Free delivery for orders above Ksh 1999 in selected
                        major cities.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 bg-white px-5 py-3">
                <h1 className="font-semibold">Product Description</h1>
                <p className="mt-2 text-gray-600">
                  LOL is an acronym that stands for "laugh out loud" or
                  "laughing out loud". It originated in the 1980s on a local
                  Bulletin Board System (BBS) called ViewLine. It's a popular
                  part of internet slang and is used to express amusement,
                  irony, or double meanings. Today, people use LOL to indicate a
                  smile or slight amusement, rather than actually laughing out
                  loud. It can be used in response to something funny, or
                  sarcastically to show that something's not serious.
                </p>
              </div>

              <div className="bg-white py-3 mt-3 px-5">
                <h1 className="font-semibold">
                  Customers who viewed this also viewed
                </h1>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-x-1 gap-y-1 mt-3 ">
                  {/* {Array.from({ length: 4 }).map((_, i) => {
                    return <ProductCard key={i} />;
                  })} */}
                </div>
              </div>
            </div>

            <div className="bg-white py-3">
              <div className="border-b">
                <h1 className="text-sm p-2">DELIVERY & RETURNS</h1>
              </div>

              <div className="border-b pt-3">
                <h1 className="text-sm px-2 flex gap-2">
                  VIK-SALES <h1 className="text-red-500">Express</h1>
                </h1>
                <span className="text-xs px-2">
                  Express delivery in main cities.
                </span>
              </div>

              <div className="px-2 mt-3">
                <h1>Choose your location</h1>
                <div className="max-w-md mt-4">
                  <Select required>
                    <option>Select your country</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </Select>
                </div>
                <div className="max-w-md mt-4">
                  <Select required>
                    <option>CBD - UON/Globe/Koja/River</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SideView />
      </div>

      <div className="mt-5">
        <FooterCBottom />
      </div>
    </div>
  );
};

export default ProductPage;
