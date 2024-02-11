import { useFocusEffect } from '@react-navigation/native'
import * as WebBrowser from 'expo-web-browser'
import { HStack, View } from 'native-base'
import { useCallback, useEffect } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import TopicHeading from '../components/organism/TopicHeading'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useGrafana from '../hooks/useGrafana'
import ButtonRede from '../components/atoms/ButtonRede'

interface GrafanaPageProps {

}
export default function GrafanaPage(props : GrafanaPageProps){
    
    const {handleOpenBrowser} = useGrafana()
    
    useFocusEffect(useCallback(() => {
        handleOpenBrowser()
    }, []))
    
    return(
        <View className='flex-1 justify-center flex items-center bg-white p-5'>
            <TopicHeading
                title="Visualize redes onlines"
            />
            <ButtonRede />
        </View>
    )
}