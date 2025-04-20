import { Text } from "../ui/text"


export const EmptyList = () => {
  return (
    <Text className="text-gray-200 text-center mx-auto text-sm w-[80%] max-w-[400px]">
      Você ainda não adicionou nenhum item à sua lista de compras. Que
      tal adicionar agora?
    </Text>
  )
}