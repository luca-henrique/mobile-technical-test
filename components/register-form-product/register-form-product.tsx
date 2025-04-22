import { VStack } from "../ui/vstack";
import { HStack } from "../ui/hstack";
import { Button, ButtonIcon } from "../ui/button";
import { EditIcon } from "lucide-react-native";
import { CustomInput } from "../custom-input/custom-input";
import { QuantityCustomInput } from "../quantity-custom-input/quantity-custom-input";
import { CustomSelect } from "../custom-select/custom-select";
import { useRegisterProduct } from "./use-register-product";
import { useEffect } from "react";
import { Toast, ToastDescription, ToastTitle, useToast } from "../ui/toast";

export const RegisterFormProduct = () => {
  const { handleSubmit, onSubmit, errors, control } = useRegisterProduct()
  const toast = useToast()

  const showNewToast = () => {

    toast.show({
      id: `number-erro-toast`,
      placement: "top",
      duration: 3000,
      render: ({ id }) => {
        const uniqueToastId = "toast-" + id
        return (
          <Toast nativeID={uniqueToastId} action="error" variant="solid">
            <ToastTitle>Erro.</ToastTitle>
            <ToastDescription>
              Preencha os campos
            </ToastDescription>
          </Toast>
        )
      },
    })
  }

  useEffect(() => {
    if (errors.category || errors.quantity || errors.name) {
      console.log('aqgui')
      showNewToast()
    }
  }, [errors.category, errors.name, errors.quantity])

  return (
    <VStack className="w-full flex flex-col gap-4">
      <CustomInput label="Item" control={control} name="name" />
      <HStack space="lg" className="items-end">
        <QuantityCustomInput />
        <CustomSelect />
        <Button size="xl" className="rounded-full p-3.5 bg-purple-500" onPress={handleSubmit(onSubmit)}>
          <ButtonIcon as={EditIcon} />
        </Button>
      </HStack>
    </VStack>
  );
};