import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import {
  PotionShopContextInt,
  PotionShopContextProviderProps,
  Product,
} from "../Types";

export const PotionShopContext = createContext<PotionShopContextInt>(
  {} as PotionShopContextInt
);

export const PotionShopProvider = ({
  children,
}: PotionShopContextProviderProps) => {
  const [products, setProducts] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [carrito, setCarrito] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const billetera = 3 - carrito.reduce((acc, prod) => acc + prod.precio, 0);

  // get
  useEffect(() => {
    axios({
      url: "http://localhost:3001/productos",
    })
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // post
  function handleCompra() {
    const data = {
      itemsId: carrito.map((prod) => prod.id),
    };
    axios
      .post("http://localhost:3001/compras", data)
      .then((response) => {
        console.log("Compra realizada:", response.data);
      })
      .catch((error) => {
        console.error("Error al realizar la compra:", error);
      });
  }
  ////
  const contextValue: PotionShopContextInt = {
    products,
    billetera,
    carrito,
    setCarrito,
    showCheckout,
    setShowCheckout,
    loading,
    setLoading,
    handleCompra,
  };

  return (
    <PotionShopContext.Provider value={contextValue}>
      {children}
    </PotionShopContext.Provider>
  );
};

export default PotionShopProvider;

export const useCarrito = () => {
  const context = useContext(PotionShopContext);
  if (context === undefined) {
    throw new Error("useCarrito debe estar dentro de un PotionShopProvider");
  }

  return context;
};
