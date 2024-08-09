import { Product, CartItem } from "@types";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
  removeItem: (product: Product, size: CartItem["size"]) => void;
  total: Number;
};

const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  total: 0,
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, size: CartItem["size"]) => {
    let index = items?.findIndex((it) => it?.product_id === product.id);
    if (index != -1) {
      setItems((prev) =>
        prev?.map((it) => {
          if (it?.product_id == product?.id) {
            return { ...it, quantity: it.quantity + 1 };
          }
          return it;
        })
      );
      return;
    }
    setItems((prev) => [
      ...prev,
      {
        id: prev?.length?.toString(),
        product_id: product?.id,
        product,
        size,
        quantity: 1,
      },
    ]);
  };

  const removeItem = (product: Product, size: CartItem["size"]) => {
    let item = items?.find((it) => it?.product_id === product.id);
    if (item?.quantity !== undefined && item?.quantity > 1) {
      setItems((prev) =>
        prev?.map((it) => {
          if (it?.product_id == product?.id) {
            return { ...it, quantity: it.quantity - 1 };
          }
          return it;
        })
      );
      return;
    }
    setItems((prev) => prev.filter((it) => it.id !== item?.id));
  };

  const total = items.reduce(
    (sum, item) => (sum += item.product.price * item.quantity),
    0
  );
  return (
    <CartContext.Provider value={{ items, addItem, removeItem, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
