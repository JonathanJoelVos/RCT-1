import { HStack, Icon, Image, Pressable, Text, VStack } from "native-base";
import { AntDesign } from '@expo/vector-icons'
import RateLabel from "../atoms/RateLabel";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { BookType } from "../../dtos/book";

interface BookBoxProps {
    book: BookType
}
export default function BookBox({ book }: BookBoxProps) {
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    return (
        <Pressable className="active:scale-95" onPress={() => {
            navigation.navigate("read", {
                book: book
            })
        }}>
            <VStack className="mr-2 p-4 border border-gray-100 h-64">
                <Image source={{
                    uri: book.srcImage
                }}
                    alt="Alternate Text"
                    size="xl"
                    rounded="md"
                />
                <Text
                    className="text-lg font-bold mt-2"
                    fontFamily="extra"
                >
                    {book.title}
                </Text>
                <Text
                    className="text-sm"
                    fontFamily="body"
                >
                    {book.autor}
                </Text>
                {book.rate && <RateLabel rate={book.rate} />}
            </VStack>
        </Pressable>
    )
}