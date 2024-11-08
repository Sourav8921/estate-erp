import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import EmployeeScreen from "./src/screens/EmployeeScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import WarehouseScreen from "./src/screens/WarehouseScreen";
import AccountsScreen from "./src/screens/AccountsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Employees") {
              iconName = focused ? "people" : "people-outline";
            } else if (route.name === "Warehouse") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Accounts") {
              iconName = focused ? "cash" : "cash-outline"
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#ECBC2A",
          tabBarInactiveTintColor: "#A09F9B",
          tabBarStyle: { backgroundColor: "#FDF9E8", height: 70 },
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "500",  
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Employees" component={EmployeeScreen} />
        <Tab.Screen name="Warehouse" component={WarehouseScreen} />
        <Tab.Screen name="Accounts" component={AccountsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
