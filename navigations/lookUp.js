import { createStackNavigator } from '@react-navigation/stack';
import {LookUpScreen} from '../screens';

const LookUpStack = createStackNavigator();

export default function LookUpStackScreen() {
  return (
    <LookUpStack.Navigator>
      <LookUpStack.Screen name="LookUp" component={LookUpScreen} />
    </LookUpStack.Navigator>
  );
}