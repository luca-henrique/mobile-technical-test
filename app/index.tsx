import { Image } from "react-native";

import { ShoppingListProvider } from "@/providers/shopping-list-provider";
import { ProductItemList } from "@/components/product-list/product-list";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";


import { RegisterFormProduct } from "@/components/register-form-product/register-form-product";

export default function HomeScreen() {
  return (
    <ShoppingListProvider>
      <VStack
        className="bg-[#0C0C0D]"
        style={{ flex: 1, position: "relative" }}
      >
        <Image
          source={require("../assets/mobile-header.png")}
          resizeMode="contain"
        />
        <VStack
          className="p-4"
          style={{
            position: "absolute",
            left: 0,
            top: 88,
            right: 0,
          }}
        >
          <Text bold size="3xl" className="text-white mb-6">
            Lista de compras
          </Text>
          <VStack
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RegisterFormProduct />
            <ProductItemList />
          </VStack>
        </VStack>
      </VStack>
    </ShoppingListProvider>
  );
}