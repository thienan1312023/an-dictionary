import { createStackNavigator } from "@react-navigation/stack";
import { MyVocabScreen } from "../screens";

const MyVocabStack = createStackNavigator();

export default function MyVocabStackScreen() {
  return (
    <MyVocabStack.Navigator>
      <MyVocabStack.Screen name="MyVocab" component={MyVocabScreen} />
    </MyVocabStack.Navigator>
  );
}
