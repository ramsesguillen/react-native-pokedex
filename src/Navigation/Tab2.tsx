import { PokemonScreen } from "../screens/PokemonScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { SimplePokemon } from "../interfaces/pokemonInterfaces";
import { createStackNavigator } from "@react-navigation/stack";

type RootStackParams = {
  SearchScreen: undefined,
  PokemonScreen: { simplePokemon: SimplePokemon, color: string }
}

const Tab2 = createStackNavigator<RootStackParams>();
export const Tab2Screen = () => {
  return (
    <Tab2.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Tab2.Screen name="SearchScreen" component={SearchScreen} />
      <Tab2.Screen name="PokemonScreen" component={PokemonScreen} />
    </Tab2.Navigator>
  );
}
