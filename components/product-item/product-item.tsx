import { TouchableOpacity, View } from "react-native";

import {
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
} from "@/components/ui/checkbox";
import { CheckIcon } from "@/components/ui/icon";

import { Text } from "@/components/ui/text"
import { EllipsisVerticalIcon } from "lucide-react-native";
import { CategoryTag } from "../category-tag/category-tag";



export const ProductItem = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#17171A",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between"
      }}
      className="h-[68px] border border-[#252529] rounded-lg p-4"
    >
      <View className="flex flex-row items-center w-[50%]">
        <Checkbox size="sm" isInvalid={false} isDisabled={false} value={""}>
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
        </Checkbox>
        <View className="flex flex-col ml-4">
          <Text className="text-white font-bold">Hello World!</Text>
          <Text className="text-[#AFABB6] ">Hello World!</Text>
        </View>
      </View>
      <View className="flex flex-row items-center justify-end w-[50%]">
        <CategoryTag category="padaria" />
        <TouchableOpacity>
          <EllipsisVerticalIcon className="text-purple-light cursor-pointer active:scale-95" />
        </TouchableOpacity>
      </View>
    </View>
  )
}