import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ListPage, UserPage } from "..";
import { BottomBarComponent } from "./component-bottom-bar";
import { ListProvider } from "@/context/list";
import { FormTaskListProvider } from "@/context";

const Tab = createBottomTabNavigator();

export function BottomBar() {
  return (
    <ListProvider>
      <FormTaskListProvider>
        <Tab.Navigator
          screenOptions={{ headerShown: false }}
          tabBar={(propsTabBar) => {
            return <BottomBarComponent {...propsTabBar} />;
          }}>
          <Tab.Screen name="List" component={ListPage} />
          <Tab.Screen name="User" component={UserPage} />
        </Tab.Navigator>
      </FormTaskListProvider>
    </ListProvider>
  );
}
