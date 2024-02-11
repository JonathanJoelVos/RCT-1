import { HStack } from 'native-base'
import { Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useGrafana from '../../hooks/useGrafana';



interface ButtonRedeProps {

}
export default function ButtonRede(props : ButtonRedeProps){
    const {handleOpenBrowser} = useGrafana()

    return(
        <TouchableOpacity className="bg-green-500 rounded-md flex justify-center items-center py-3 mt-5 w-full" onPress={handleOpenBrowser}>
            <HStack space={2}>
                <Text className="text-gray-100 text-lg font-bold uppercase">
                Ver Rede
                </Text>
                <MaterialCommunityIcons name="access-point-network" size={24} color="white" />
            </HStack>
        </TouchableOpacity>
    )
}