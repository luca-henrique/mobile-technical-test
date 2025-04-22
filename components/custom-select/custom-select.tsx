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
import { ArrowBigDown, ChevronDownIcon } from "lucide-react-native";
import { Controller } from "react-hook-form";
import { View } from "react-native";

interface Option {
  label: string;
  value: string;
  icon?: any;
  iconColor?: string
}

interface CustomSelectProps {
  name: string;
  control: any;
  options: Option[];
  label: string
}

export const CustomSelect = ({ name, control, options, label }: CustomSelectProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={() => {
        return (
          <VStack space="sm">
            <Text className="text-typography-500">{label}</Text>
            <Select className="w-[159px] bg-[#17171A]">
              <SelectTrigger
                variant="outline"
                size="md"
                className="w-[159px] border border-[#252529] rounded-md  "
              >
                <SelectInput
                  placeholder="Selecione"
                  className="text-white w-[134px]"
                />
                <SelectIcon className="mr-3" as={ChevronDownIcon} />
              </SelectTrigger>
              <SelectPortal >
                <SelectBackdrop />
                <SelectContent >
                  <SelectDragIndicatorWrapper >
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  {options.map((item) => {
                    return (
                      <View key={`${item.label}-${item.value}`} className="flex flex-row items-center px-3">
                        <item.icon color={item.iconColor} />
                        <SelectItem
                          {...item}
                        /
                        >
                      </View>
                    );
                  })}
                </SelectContent>
              </SelectPortal>
            </Select>
          </VStack>
        );
      }}
    />
  );
};
