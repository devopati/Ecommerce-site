import { HomeCoursel } from "../components/HomeCoursel";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";

const Home = () => {
  return (
    <div>
      <HomeCoursel />
      <div className="bg-black flex justify-between py-3 px-6 text-white mt-1 mb-1">
        <h2>Daily Finds | Live Now</h2>
        <Link to={"#"}>
          <h2>See All</h2>
        </Link>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-x-1 gap-y-1 ">
        {Array.from({ length: 10 }).map((_, i) => {
          return <ProductCard key={i} />;
        })}
      </div>
    </div>
  );
};

export default Home;
