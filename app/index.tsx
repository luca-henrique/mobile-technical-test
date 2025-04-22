import { Image } from "react-native";

import { ShoppingListProvider } from "@/providers/shopping-list-provider";
import { ProductItemList } from "@/components/product-list/product-list";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";

import { RegisterFormProduct } from "@/components/register-form-product/register-form-product";

export default function HomeScreen() {
  return (
    <ShoppingListProvider>
      <VStack className="bg-[#0C0C0D] flex-1 relative">
        <Image
          source={require("../assets/mobile-header.png")}
          resizeMode="contain"
        />
        <VStack className="p-4 absolute left-0 right-0 top-[88px]">
          <Text bold size="3xl" className="text-[#EDEAF0] mb-6">
            Lista de compras
          </Text>
          <VStack className="items-center justify-content-center">
            <RegisterFormProduct />
            <ProductItemList />
          </VStack>
        </VStack>
      </VStack>
    </ShoppingListProvider>
  );
}
