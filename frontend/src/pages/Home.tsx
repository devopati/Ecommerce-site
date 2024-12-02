import { HomeCoursel } from "../components/HomeCoursel";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { setProductsReducer } from "../app/slices/AppSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks/redux-hooks";

const Home = () => {
  const dispatch = useAppDispatch();

  const { products } = useAppSelector((state) => state.app);

  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5002/api/product");
      localStorage.setItem("products", JSON.stringify(res.data.products));
      dispatch(setProductsReducer(res.data.products));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <HomeCoursel />
      <div className="bg-black flex justify-between py-3 px-6 text-white mt-1 mb-1">
        <h2>Daily Finds | Live Now</h2>
        <Link to={"#"}>
          <h2>See All</h2>
        </Link>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2">
        <img
          src="https://img.kilimall.com/c/public/banner-image/100005766.jpg?x-image-process=image/format,webp#"
          alt=""
        />
        <img
          src="https://img.kilimall.com/c/public/banner-image/100005767.jpg?x-image-process=image/format,webp#"
          alt=""
        />
        <img
          src="https://img.kilimall.com/c/public/banner-image/100005798.jpg?x-image-process=image/format,webp#"
          alt=""
        />
        <img
          src="https://img.kilimall.com/c/public/banner-image/100005799.jpg?x-image-process=image/format,webp#"
          alt=""
        />
      </div>

      {loading && (
        <Card className="flex justify-center items-center">
          <div
            className="animate-spin h-12 w-12 text-center rounded-full border-4 border-gray
          border-t-4 border-t-green-400"
          ></div>
        </Card>
      )}

      <div className="bg-pink-700 flex justify-between py-3 px-6 text-white mt-1 mb-1">
        <h2>You may also like | Live Now</h2>
        <Link to={"#"}>
          <h2>See All</h2>
        </Link>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-x-1 gap-y-1 pb-10 ">
        {products &&
          products.map((product, i) => {
            return <ProductCard key={i} product={product} />;
          })}
      </div>
    </div>
  );
};

export default Home;
