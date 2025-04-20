import { View } from "react-native";


import { ShoppingListProvider } from "@/providers/shopping-list-provider";
import { ProductItemList } from "@/components/product-list/product-list";

export default function HomeScreen() {
  return (
    <ShoppingListProvider>
      <View
        className="p-4"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          backgroundColor: "#0C0C0D",
        }}
      >
        <ProductItemList />
      </View>
    </ShoppingListProvider>
  );
}


