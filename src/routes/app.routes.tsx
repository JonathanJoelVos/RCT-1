import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";
import { Home } from "../screens/Home";
import { AntDesign } from '@expo/vector-icons'
import BookPage from "../screens/BookPage";
import { BookType } from "../dtos/book";
import GrafanaPage from "../screens/GrafanaPage";

type AppRoutes = {
    home: undefined;
    read: {
        book: BookType;
    };
    grafana: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#e2e2e2',
                tabBarLabel: () => null,
            }}
        >
            <Screen name="home" component={Home} options={{
                tabBarIcon: ({ color }) => (
                    <Icon
                        name="home"
                        as={AntDesign}
                        color={color}
                        size={7}
                    />
                )
            }} />
            <Screen name="read" component={BookPage} options={{
                tabBarIcon: () => null
            }} />
            <Screen name="grafana" component={GrafanaPage} options={{
                tabBarIcon: ({ color }) => (
                    <Icon
                        name="database"
                        as={AntDesign}
                        color={color}
                        size={7}
                    />
                )
            }} />
        </Navigator>
    )
}