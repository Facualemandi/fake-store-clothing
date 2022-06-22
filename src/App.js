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
import Likes from "./Components/Likes/Likes";
import { Support } from "./Components/Support/Support";

function App() {
  const { products, shoes, shirts, jackets } = useProducts();
  const { setProduct, onChangeValue, changeValue } = useSearch();
  const [isProductCart, setIsProductCart] = useState([]);
  const { addCount, deleteCount, count, setCount } = useAddDelete();
  const [modal, setModal] = useState(false);
  const [updateNewAmount, setUpdateNewAmount] = useState(false);

  const handleDescription = (el) => {
    setIsProductCart(el);
  };

  const [cart, setCart] = useState([]);

  const onAmount = async (id) => {
    const product = await getDoc(doc(db, "Products", id));
    const newObj = { ...product.data(), id: id, amount: count };

    if (count > 0) {
      if (cart.find((obj) => obj.id === newObj.id)) {
        const isAmount = cart.find((obj) => obj.id === newObj.id);
        isAmount.amount = count;
        setUpdateNewAmount(true);
        setTimeout(() => {
          setUpdateNewAmount(false);
          setCount(0);
        }, 1000);
      } else {
        setCart([...cart, newObj]);
      }
    }
  };

  useEffect(() => {
    setModal(true);
    setTimeout(() => {
      setModal(false);
      setCount(0);
    }, 1000);
  }, [cart]);

  const [likeProduct, setLikeProduct] = useState([]);
  const [likeModal, setLikeModal] = useState(false);

  const onLike = async (id, el, e) => {
    e.preventDefault();
    const product = await getDoc(doc(db, "Products", id));
    const newObj = { ...product.data(), like: true };

    if (el.id === id) {
      if (el.id === id) {
        if (likeProduct.find((obj) => obj.name === newObj.name)) {
          console.log("Ya existe");
        } else {
          setLikeProduct([...likeProduct, newObj]);
          setLikeModal(true);
          setTimeout(() => {
            setLikeModal(false);
          }, 500);
        }
      }
    }
  };


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
              onLike={onLike}
              likeProduct={likeProduct}
              likeModal={likeModal}
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
              onLike={onLike}
              likeProduct={likeProduct}
              likeModal={likeModal}
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
              onLike={onLike}
              likeProduct={likeProduct}
              likeModal={likeModal}
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
              onLike={onLike}
              likeProduct={likeProduct}
              likeModal={likeModal}
            />
          }
        />
        <Route
          path="/Description/:name"
          element={
            <Description
              isProductCart={isProductCart}
              addCount={addCount}
              deleteCount={deleteCount}
              count={count}
              onAmount={onAmount}
              modal={modal}
              updateNewAmount={updateNewAmount}
              cart={cart}
              onLike={onLike}
            />
          }
        />

        <Route
          path="/Cart"
          element={
            <ProductsCart addCount={addCount} cart={cart} setCart={setCart} />
          }
        />

        <Route
          path="/Likes"
          element={
            <Likes likeProduct={likeProduct} setLikeProduct={setLikeProduct} />
          }
        />

        <Route path="/Support" element={<Support />} />
      </Routes>
    </>
  );
}

export default App;
