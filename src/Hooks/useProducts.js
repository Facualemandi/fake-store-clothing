import { useEffect, useState } from "react";
import { collection, getDocs, getDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export const useProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [shirts, setShirts] = useState([]);
  const [jackets, setJackets] = useState([])
  const productsCollection = collection(db, "Products");

  const getProducts = async () => {
    setLoading(true);
    const data = await getDocs(productsCollection);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setShoes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setShirts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setJackets(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    setLoading(false);
    
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
    shoes,
    loading,
    setLoading,
    shirts,
    jackets,
  };
};
