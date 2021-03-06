import * as React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Article, Home, NewMessage, Setting} from "../Container";

const DrawerNavigator = createDrawerNavigator();

export interface Props {

}

export const MyDrawer: React.FC<Props> = (props) => {
    return (
        <DrawerNavigator.Navigator>
            <DrawerNavigator.Screen name="Home" component={Home}/>
            <DrawerNavigator.Screen name="NewMessage" component={NewMessage}/>
            <DrawerNavigator.Screen name="Article" component={Article}/>
            <DrawerNavigator.Screen name="Setting" component={Setting}/>
        </DrawerNavigator.Navigator>
    );
};
