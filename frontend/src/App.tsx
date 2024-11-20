import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DefaultLayout from "./layout/DefaultLayout";
import ProductPage from "./pages/ProductPage";
import { Provider } from "react-redux";
import { store } from "./app/Store";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />

        <Route path="/product/:productId" element={<ProductPage />} />
        <Route
          path="/cart"
          element={
            <DefaultLayout>
              <Cart />
            </DefaultLayout>
          }
        />
        <Route
          path="/orders"
          element={
            <DefaultLayout>
              <Orders />
            </DefaultLayout>
          }
        />
        <Route
          path="/about"
          element={
            <DefaultLayout>
              <About />
            </DefaultLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <DefaultLayout>
              <Contact />
            </DefaultLayout>
          }
        />
      </Routes>
    </Provider>
  );
};

export default App;
