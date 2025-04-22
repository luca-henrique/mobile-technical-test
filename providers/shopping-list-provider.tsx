
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define o tipo para um item de produto
type ProductItem = {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  category: string;
  checked: boolean;
  position: number;
};

// Define o tipo para o contexto
type ShoppingListContextType = {
  items: ProductItem[];
  addItem: (item: ProductItem) => void;
  updateItem: (id: number, updatedItem: Partial<ProductItem>) => void;
  deleteItem: (id: number) => void;
  toggleItemChecked: (id: number) => void;
  getItemById: (id: number) => ProductItem | undefined;
};

// Cria o contexto
const ShoppingListContext = createContext<ShoppingListContextType | undefined>(
  undefined
);

// Componente Provider
export const ShoppingListProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<ProductItem[]>([{
    id: 0,
    name: "Carne",
    quantity: 0,
    unit: "unidade",
    category: "fruta",
    checked: false,
    position: 0,
  }, {
    id: 1,
    name: "Arroz",
    quantity: 2,
    unit: "kilograma",
    category: "padaria",
    checked: false,
    position: 1,
  }, {
    id: 2,
    name: "Feijão",
    quantity: 1,
    unit: "litro",
    category: "padaria",
    checked: false,
    position: 2,
  }, {
    id: 3,
    name: "Macarrão",
    quantity: 500,
    unit: "kilograma",
    category: "padaria",
    checked: false,
    position: 3,
  }]);

  // Função para adicionar um item
  const addItem = (item: ProductItem) => {
    setItems((prevItems) => [
      ...prevItems,
      { ...item, id: items.length, position: items.length, checked: false },
    ]);
  };

  // Função para marcar/desmarcar um item como comprado
  const toggleItemChecked = (id: number) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );

      const itemToMove = updatedItems.find((item) => item.id === id);

      if (itemToMove?.checked) {
        // Move o item para a última posição se estiver marcado como "checked"
        return [...updatedItems.filter((item) => item.id !== id), itemToMove];
      }

      // Ordena os itens pela posição original (position) quando "checked" for false
      return updatedItems.sort((a, b) => a.position - b.position);
    });
  };

  // Função para atualizar um item
  const updateItem = (id: number, updatedItem: Partial<ProductItem>) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  // Função para deletar um item
  const deleteItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getItemById = (id: number): ProductItem | undefined => {
    return items.find((item) => item.id === id);
  };

  return (
    <ShoppingListContext.Provider
      value={{ items, addItem, updateItem, deleteItem, toggleItemChecked, getItemById }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
};

// Hook para usar o contexto
export const useShoppingList = () => {
  const context = useContext(ShoppingListContext);
  if (!context) {
    throw new Error(
      "useShoppingList deve ser usado dentro de um ShoppingListProvider"
    );
  }
  return context;
};
