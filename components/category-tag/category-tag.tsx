import {
  AppleIcon,
  SandwichIcon,
  CarrotIcon,
  BeefIcon,
  MilkIcon,
  View,
} from "lucide-react-native";
import { Text } from "@/components/ui/text"

export const CategoryTag = ({ category = "padaria" }: { category: string }) => {
  const styleByCategory = {
    padaria: {
      backgroundColor: "bg-yellow-dark",
      Icon: SandwichIcon,
      iconColor: "text-yellow",
      text: "padaria",
      textColor: "text-yellow",
    },
    legume: {
      backgroundColor: "bg-green-dark",
      Icon: CarrotIcon,
      iconColor: "text-green",
      text: "legume",
      textColor: "text-green",
    },
    fruta: {
      backgroundColor: "bg-orange-dark",
      Icon: AppleIcon,
      iconColor: "text-orange",
      text: "fruta",
      textColor: "text-orange",
    },
    bebida: {
      backgroundColor: "bg-blue-dark",
      Icon: MilkIcon,
      iconColor: "text-blue",
      text: "bebida",
      textColor: "text-blue",
    },
    carne: {
      backgroundColor: "bg-pink-dark",
      Icon: BeefIcon,
      iconColor: "text-pink",
      text: "carne",
      textColor: "text-pink",
    },
  };

  const { backgroundColor, Icon, iconColor, text, textColor } =
    styleByCategory[category as keyof typeof styleByCategory];

  console.log(textColor, backgroundColor, iconColor)

  return (
    <View
      className={`${backgroundColor} flex flex-row items-center rounded-full gap-2 bg-primary w-24`}
    >
      <Icon className={`${iconColor}`} size={22} />
      <Text
        className={`${textColor} font-family-inter font-semibold text-md capitalize`}
      >
        {text}
      </Text>
    </View>
  );
};
