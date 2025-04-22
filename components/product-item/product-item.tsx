import { TouchableOpacity, View } from "react-native";

import {
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
} from "@/components/ui/checkbox";
import { CheckIcon } from "@/components/ui/icon";

import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetBackdrop,
} from "@/components/ui/actionsheet"

import { Text } from "@/components/ui/text";
import { EllipsisVerticalIcon } from "lucide-react-native";
import { CategoryTag } from "../category-tag/category-tag";
import { useShoppingList } from "@/providers/shopping-list-provider";
import { useState } from "react";

interface ItemProps {
  category: string;
  name: string;
  quantity: number;
  unit: string;
  id: number;
  checked: boolean;
}

export const ProductItem = ({
  name,
  category,
  quantity,
  unit,
  checked,
  id,
}: ItemProps) => {
  const { toggleItemChecked, deleteItem } = useShoppingList();

  const [showActionsheet, setShowActionsheet] = useState(false)
  const handleClose = () => setShowActionsheet(false)

  const handleDeleteItem = () => {
    deleteItem(id)
    handleClose()
  }

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#17171A",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      className="h-[68px] border border-[#252529] rounded-lg p-4"
    >
      <View className="flex flex-row items-center w-[50%]">
        <Checkbox
          size="sm"
          isInvalid={false}
          isDisabled={false}
          value={""}
          isChecked={checked}
          onChange={() => toggleItemChecked(id)}
        >
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
        </Checkbox>
        <View className="flex flex-col ml-4">
          <Text
            className={`text-white font-bold ${checked && "line-through opacity-50"
              }`}
          >
            {name}
          </Text>
          <Text className="text-[#AFABB6] ">
            {quantity} {unit}
          </Text>
        </View>
      </View>
      <View className="flex flex-row items-center justify-end w-[50%]">
        <CategoryTag category={category} />
        <TouchableOpacity onPress={() => setShowActionsheet(true)}>
          <EllipsisVerticalIcon color={"#A881E6"} className="cursor-pointer" />
        </TouchableOpacity>
        <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
          <ActionsheetBackdrop />
          <ActionsheetContent>
            <ActionsheetDragIndicatorWrapper>
              <ActionsheetDragIndicator />
            </ActionsheetDragIndicatorWrapper>
            <ActionsheetItem onPress={handleDeleteItem}>
              <ActionsheetItemText>Remover</ActionsheetItemText>
            </ActionsheetItem>
          </ActionsheetContent>
        </Actionsheet>
      </View>
    </View>
  );
};
