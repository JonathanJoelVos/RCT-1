import { View } from "native-base";
import { useCallback, useState } from "react";
import { TouchableOpacity } from "react-native";
import AvailableBooksScrollView from "../organism/AvailableBooksScrollView";
import ContinueReadingBox from "../organism/ContinueReadingBox";
import TopicHeading from "../organism/TopicHeading";
import { useFocusEffect } from "@react-navigation/native";
import { getLastBookReadInStorage } from "../../storage/storageLastBookRead";
import ButtonRede from "../atoms/ButtonRede";


interface HomeTemplateProps {

}
export default function HomeTemplate(props: HomeTemplateProps) {
    const [lastRead, setLastRead] = useState(null)

    async function getLastBookReadStorage(){
        const lastRead = await getLastBookReadInStorage()
        setLastRead(lastRead)
    }

    useFocusEffect(useCallback(() => {
        getLastBookReadStorage()
    }, []))


    return (
        <View className="bg-gray-100 flex-1">
            <View className="bg-white rounded-md p-5 h-full">
                <TopicHeading
                    title="Visualize redes onlines"
                />
                <ButtonRede />
                {
                    lastRead && (
                        <>
                            <TopicHeading
                                title="Continue lendo"
                            />
                            <ContinueReadingBox />
                        </>)
                }
                <TopicHeading
                    title="Documentos disponíveis"
                />
                <AvailableBooksScrollView />
            </View>
        </View>
    )
}