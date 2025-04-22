import { VStack } from "../ui/vstack";
import { HStack } from "../ui/hstack";
import { Button, ButtonIcon } from "../ui/button";
import { EditIcon } from "lucide-react-native";
import { CustomInput } from "../custom-input/custom-input";
import { QuantityCustomInput } from "../quantity-custom-input/quantity-custom-input";
import { CustomSelect } from "../custom-select/custom-select";

export const RegisterFormProduct = () => {
  return (
    <VStack className="w-full flex flex-col gap-4">
      <CustomInput />
      <HStack space="lg" className="items-end">
        <QuantityCustomInput />
        <CustomSelect />
        <Button size="xl" className="rounded-full p-3.5 bg-purple-500">
          <ButtonIcon as={EditIcon} />
        </Button>
      </HStack>
    </VStack>
  );
};