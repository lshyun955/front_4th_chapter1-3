import { createContext, useState } from "react";
import { generateItems } from "../../utils";
import { ItemContextType } from "./types";

export const ItemContext = createContext<ItemContextType | undefined>(
  undefined,
);

export const ItemProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState(generateItems(1000));

  const addItems = () => {
    setItems((prevItems) => [
      ...prevItems,
      ...generateItems(1000, prevItems.length),
    ]);
  };

  const itemInfo: ItemContextType = {
    items,
    addItems,
  };
  return (
    <ItemContext.Provider value={itemInfo}>{children}</ItemContext.Provider>
  );
};