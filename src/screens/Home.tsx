import { HStack, Icon, Image, Progress, ScrollView, Text, View, VStack } from "native-base";
import Header from "../components/molecules/Header";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import ContinueReadingBox from "../components/organism/ContinueReadingBox";
import AvailableBooksScrollView from "../components/organism/AvailableBooksScrollView";
import HomeTemplate from "../components/template/HomeTemplate";

export function Home() {
    return (
        <View className="flex-1 flex flex-col">
            <Header
                title="RCT"
            />
            <HomeTemplate />
        </View>
    )
}