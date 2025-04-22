import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues } from "./register-product-form.type";
import { formSchema } from "./register-product-form.schema";
import { useShoppingList } from "@/providers/shopping-list-provider";

export const useRegisterProduct = () => {
  const { addItem } = useShoppingList();

  const methods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      quantity: { unit: "", quantity: 0 },
      category: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = methods;


  console.log(watch())

  const onSubmit = (data: FormValues) => {
    console.log("Dados do formulário:", data);
    addItem({
      name: data.name,
      quantity: data.quantity.quantity,
      unit: data.quantity.unit,
      category: data.category,
      checked: false,
      position: 0
    });

    reset();
  };

  return { onSubmit, control, handleSubmit, errors };
};
