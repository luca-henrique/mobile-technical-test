import { VStack } from "../ui/vstack";
import { HStack } from "../ui/hstack";
import { Button, ButtonIcon } from "../ui/button";
import { Apple, Beef, Carrot, EditIcon, Milk, Sandwich } from "lucide-react-native";
import { CustomInput } from "../custom-input/custom-input";
import { InputWithSelect } from "../input-with-select/input-with-select";
import { CustomSelect } from "../custom-select/custom-select";
import { useRegisterProduct } from "./use-register-product";
import { useEffect } from "react";
import { Toast, ToastDescription, ToastTitle, useToast } from "../ui/toast";
import { optionsQuantity } from "@/constants/option-quantity";

const optionsCategory = [
  {
    value: "padaria",
    label: "Padaria",
    icon: Sandwich,
    iconColor: "#BB9F3A",
  },
  {
    value: "legume",
    label: "Legume",
    icon: Carrot,
    iconColor: "#8CAD51",
  },
  {
    value: "carne",
    label: "Carne",
    icon: Beef,
    iconColor: "#DB5BBF",
  },
  {
    value: "fruta",
    label: "Fruta",
    icon: Apple,
    iconColor: "#E07B67",
  },
  {
    value: "bebida",
    label: "Bebida",
    icon: Milk,
    iconColor: "#7B94CB",
  },
];



export const RegisterFormProduct = () => {
  const { handleSubmit, onSubmit, errors, control } = useRegisterProduct();
  const toast = useToast();

  const showNewToast = () => {
    toast.show({
      id: `number-erro-toast`,
      placement: "top",
      duration: 3000,
      render: ({ id }) => {
        const uniqueToastId = "toast-" + id;
        return (
          <Toast nativeID={uniqueToastId} action="error" variant="solid">
            <ToastTitle>Erro.</ToastTitle>
            <ToastDescription>Preencha os campos</ToastDescription>
          </Toast>
        );
      },
    });
  };

  useEffect(() => {
    if (errors.category || errors.quantity || errors.name) {
      console.log("aqgui");
      showNewToast();
    }
  }, [errors.category, errors.name, errors.quantity]);

  return (
    <VStack className="w-full flex flex-col gap-4">
      <CustomInput label="Item" control={control} name="name" />
      <HStack space="lg" className="items-end">
        <InputWithSelect name={'quantity'} options={optionsQuantity} control={control} label={"Quantidade"} />
        <CustomSelect name={'category'} options={optionsCategory} control={control} label={"Categoria"} />
        <Button
          size="xl"
          className="rounded-full p-3.5 bg-purple-500"
          onPress={handleSubmit(onSubmit)}
        >
          <ButtonIcon as={EditIcon} />
        </Button>
      </HStack>
    </VStack>
  );
};

export const unityOptions = [
  {
    label: "Un.",
    value: "UN.",
  },
  {
    label: "KG.",
    value: "KG.",
  },
];
