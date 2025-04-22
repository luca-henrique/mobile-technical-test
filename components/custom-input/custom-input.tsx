import { VStack } from "../ui/vstack";
import { Text } from "../ui/text";
import { Input, InputField } from "../ui/input";

export const CustomInput = () => {
  return (
    <VStack space="xs">
      <Text className="text-typography-500">Item</Text>
      <Input className="w-full border-[#252529] rounded-md">
        <InputField type="text" size="lg" className="text-white " />
      </Input>
    </VStack>
  );
};