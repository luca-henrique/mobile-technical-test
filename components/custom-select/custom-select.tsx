import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";

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


export const CustomSelect = () => {
  return (
    <VStack>
      <Text className="text-typography-500">Categoria</Text>
      <Select className="w-[159px]">
        <SelectTrigger
          variant="outline"
          size="md"
          className="w-[159px] border border-[#252529] rounded-md  "
        >
          <SelectInput
            placeholder="Seleciona uma opção"
            className="text-white w-[134px]"
          />
          <SelectIcon className="mr-3" as={ChevronDownIcon} />
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
    </VStack>
  );
};
