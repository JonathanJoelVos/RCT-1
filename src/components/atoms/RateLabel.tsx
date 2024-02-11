import { HStack, Icon, Text } from "native-base";
import { AntDesign } from '@expo/vector-icons'

interface RateLabelProps {
    rate: string;
}
export default function RateLabel({ rate }: RateLabelProps) {
    return (
        <HStack className="bg-yellow-100 rounded-full p-1 items-center w-14 mt-2">
            <Icon
                as={AntDesign}
                name="star"
                size={4}
                color="yellow.500"
            />
            <Text
                className="ml-2 text-yellow-500 text-sm"
            >
                {rate}
            </Text>
        </HStack>
    )
}