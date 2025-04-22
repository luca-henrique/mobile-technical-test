import {
  AppleIcon,
  SandwichIcon,
  CarrotIcon,
  BeefIcon,
  MilkIcon,
} from "lucide-react-native";
import { Text } from "@/components/ui/text"
import { View } from "react-native";

export const CategoryTag = ({ category = "padaria" }: { category: string }) => {
  const styleByCategory = {
    padaria: {
      backgroundColor: "bg-yellow-dark",
      Icon: SandwichIcon,
      iconColor: "#BB9F3A",
      text: "padaria",
      textColor: "text-yellow",

    },
    legume: {
      backgroundColor: "bg-green-dark",
      Icon: CarrotIcon,
      iconColor: "#8CAD51",
      text: "legume",
      textColor: "text-green",
    },
    fruta: {
      backgroundColor: "bg-orange-dark",
      Icon: AppleIcon,
      iconColor: "#E07B67",
      text: "fruta",
      textColor: "text-orange",
    },
    bebida: {
      backgroundColor: "bg-blue-dark",
      Icon: MilkIcon,
      iconColor: "#7B94CB",
      text: "bebida",
      textColor: "text-blue",
    },
    carne: {
      backgroundColor: "bg-pink-dark",
      Icon: BeefIcon,
      iconColor: "#DB5BBF",
      text: "carne",
      textColor: "text-pink",
    },
  };

  const { backgroundColor, Icon, iconColor, text, textColor } =
    styleByCategory[category as keyof typeof styleByCategory];


  return (
    <View
      className={`flex flex-row w-fit px-4 py-2 items-center rounded-full gap-2 bg-primary justify-end ${backgroundColor}`}
    >
      <Icon color={`${iconColor}`} size={22} />
      <Text
        className={`${textColor} font-family-inter font-semibold text-md capitalize w-fit`}
      >
        {text}
      </Text>
    </View>
  );
};
