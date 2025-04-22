import { VStack } from "../ui/vstack";
import { Text } from "../ui/text";
import { Input, InputField } from "../ui/input";
import { HStack } from "../ui/hstack";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from "@/components/ui/select";
import { ChevronDownIcon } from "lucide-react-native";
import { Controller } from "react-hook-form";

interface Option {
  label: string;
  value: string;
}
interface InputWithSelectProps {
  control: any;
  label: string;
  options: Option[];
  name: string;
  clearErrors: (value: string) => void;
}

export const InputWithSelect = ({
  label,
  options,
  control,
  name,
  clearErrors,
}: InputWithSelectProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        console.log(value.quantity);
        return (
          <VStack space="sm" className="w-[137px]">
            <Text className="text-typography-500">{label}</Text>
            <HStack className="border border-[#252529] rounded-md bg-[#17171A]">
              <Input className="w-[50%] border-0 bg-[#111112] border-r-[#252529]">
                <InputField
                  type="text"
                  size="lg"
                  className="text-white"
                  keyboardType="numeric"
                  value={`${value.quantity}`}
                  onChangeText={(text) => {
                    const quantity = text === "" ? 0 : parseInt(text, 10);
                    onChange({ ...value, quantity });
                    clearErrors("quantity.quantity");
                  }}
                />
              </Input>
              <Select
                selectedValue={value.unit}
                className="w-[50%]"
                onValueChange={(selected) => {
                  onChange({ ...value, unit: selected });
                  clearErrors("quantity.unit");
                }}
              >
                <SelectTrigger
                  variant="outline"
                  size="md"
                  className="w-[90px] border-0"
                >
                  <SelectInput
                    placeholder="SEL."
                    className="text-white w-[42px]"
                  />
                  <SelectIcon as={ChevronDownIcon} className="text-[#AFABB6]" />
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent>
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    {options.map((item) => {
                      return (
                        <SelectItem
                          {...item}
                          key={`${item.label}-${item.value}`}
                        />
                      );
                    })}
                  </SelectContent>
                </SelectPortal>
              </Select>
            </HStack>
          </VStack>
        );
      }}
    />
  );
};
