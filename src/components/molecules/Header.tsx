import { Icon, Pressable, Text, View } from "native-base";
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";

interface HeaderProps {
    iconBack?: boolean;
    title?: string;
}
export default function Header({ iconBack, title }: HeaderProps) {
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleGoBack() {
        console.log("handleGoBack")
        navigation.navigate("home")
    }

    return (
        <View className="bg-white h-28 flex flex-row justify-center p-4 shadow-md items-end border-2 border-gray-100">
            {
                iconBack && (
                    <Pressable
                        className=" active:scale-95"
                        onPress={handleGoBack}
                    >
                        <Icon
                            as={AntDesign}
                            name="left"
                            size={7}
                            color="#000"
                        />
                    </Pressable>
                )
            }
            <Text className={`${iconBack ? "-ml-10" : "justify-center"} flex-1 text-center text-2xl font-bold`} fontFamily="extra">
                {title}
            </Text>
        </View>
    )
}