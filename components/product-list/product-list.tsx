import { useShoppingList } from "@/providers/shopping-list-provider";
import { ProductItem } from "../product-item/product-item";
import { EmptyList } from "../empty-list/empty-list";
import { FlatList, View } from "react-native";

export const ProductItemList = () => {
  const { items } = useShoppingList()

  if (items.length === 0) {
    return (<EmptyList />)
  }

  return (
    <View className="flex flex-col gap-3 mt-[40px] w-full items-center">
      <FlatList
        data={items}
        renderItem={({ item }) => <ProductItem key={item.name} {...item} />}
        keyExtractor={item => `${item.id}-product-item`}
        ItemSeparatorComponent={() => <View className="h-2" />}
      />
    </View>
  );
};