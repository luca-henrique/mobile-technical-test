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

export const QuantityCustomInput = () => {
  return (
    <VStack space="sm" className="w-[137px]">
      <Text className="text-typography-500">Quantidade</Text>
      <HStack className="border border-[#252529] rounded-md bg-[#17171A]">
        <Input className="w-[50%] border-0 bg-[#111112] border-r-[#252529]">
          <InputField
            type="text"
            size="lg"
            className="text-white"
            keyboardType="numeric"
          />
        </Input>
        <Select className="w-[50%]">
          <SelectTrigger
            variant="outline"
            size="md"
            className="w-[90px] border-0"
          >
            <SelectInput
              placeholder="UN."
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
              <SelectItem label="Un." value="UN." />
              <SelectItem label="KG" value="KG." />
            </SelectContent>
          </SelectPortal>
        </Select>
      </HStack>
    </VStack>
  );
};