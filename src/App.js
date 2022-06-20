import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import AllProducts from "./Components/AllProducts/AllProducts";
import Description from "./Components/Description/Description";
import Jackets from "./Components/Jackets/Jackets";
import ProductsCart from "./Components/ProductsCart/ProductsCart";
import Shirt from "./Components/Shirt/Shirt";
import Shoes from "./Components/Shoes/Shoes";
import { useAddDelete } from "./Hooks/useAddDelete";
import { useProducts } from "./Hooks/useProducts";
import { useSearch } from "./Hooks/useSearch";

import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "./Firebase/firebase";

function App() {
  const { products, shoes, shirts, jackets } = useProducts();
  const { setProduct, onChangeValue, changeValue } = useSearch();
  const [isProductCart, setIsProductCart] = useState([]);
  const { addCount, deleteCount, count, setCount } = useAddDelete();
  const [modal, setModal] = useState(false);
 const [updateNewAmount, setUpdateNewAmount] = useState(false)

  const handleDescription = (el) => {
    setIsProductCart(el);
  };

  const [cart, setCart] = useState([]);

  const onAmount = async (id) => {
    const product = await getDoc(doc(db, "Products", id));
    const newObj = { ...product.data(), id: id, amount: count };

    console.log(newObj);

    if (count > 0) {
      if (cart.find((obj) => obj.id === newObj.id)) {
        const isAmount = cart.find((obj) => obj.id === newObj.id);
        isAmount.amount = count;
      } else {
        setCart([...cart, newObj]);
      }
    }
  };

  useEffect(() => {
    console.log(cart);
    setModal(true);
    setTimeout(() => {
      setModal(false);
    }, 1000);
  }, [cart]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AllProducts
              changeValue={changeValue}
              onChangeValue={onChangeValue}
              products={products}
              handleDescription={handleDescription}
              setProduct={setProduct}
              count={count}
            />
          }
        />
        <Route
          path="/Zapatillas"
          element={
            <Shoes
              shoes={shoes}
              setProduct={setProduct}
              handleDescription={handleDescription}
            />
          }
        />
        <Route
          path="/Remeras"
          element={
            <Shirt
              shirts={shirts}
              handleDescription={handleDescription}
              setProduct={setProduct}
            />
          }
        />
        <Route
          path="/Camperas"
          element={
            <Jackets
              jackets={jackets}
              setProduct={setProduct}
              handleDescription={handleDescription}
            />
          }
        />
        <Route
          path="/Description/:name"
          element={
            <Description
              isProductCart={isProductCart}
              setProduct={setProduct}
              addCount={addCount}
              deleteCount={deleteCount}
              count={count}
              onAmount={onAmount}
              modal={modal}
              updateNewAmount={updateNewAmount}
              cart={cart}
            />
          }
        />

        <Route
          path="/Cart"
          element={
            <ProductsCart addCount={addCount} cart={cart} setCart={setCart} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
