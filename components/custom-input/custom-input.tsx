import { VStack } from "../ui/vstack";
import { Text } from "../ui/text";
import { Input, InputField } from "../ui/input";
import { Controller } from "react-hook-form";

interface CustomInputProps {
  control?: any;
  name: string;
  label: string;
}

export const CustomInput = ({ control, name, label }: CustomInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        return (
          <VStack space="xs">
            <Text className="text-typography-500">{label}</Text>
            <Input className="w-full border-[#252529] rounded-md h-[40px]">
              <InputField type="text" size="lg" className="text-white" onChangeText={onChange} value={value} />
            </Input>
          </VStack>
        );
      }}
    />
  );
};
