import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues } from "./register-product-form.type";
import { formSchema } from "./register-product-form.schema";
import { useShoppingList } from "@/providers/shopping-list-provider";

export const useRegisterProduct = () => {
  const { addItem } = useShoppingList();

  const methods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
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
    watch,
    clearErrors
  } = methods;



  const onSubmit = (data: FormValues) => {

    addItem({
      name: data.name,
      quantity: data.quantity.quantity,
      unit: data.quantity.unit,
      category: data.category,
      checked: false,
      position: 0,
    });
    reset(
      {
        name: "",
        quantity: { unit: "", quantity: 0 },
        category: "",
      },
      { keepErrors: false }
    );
  };

  return { onSubmit, control, watch, handleSubmit, errors, clearErrors };
};
