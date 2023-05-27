import { ActivityIndicator, Button, FlatList, Image, Text, View } from 'react-native'

import { FadeInImage } from '../components/FadeInImage';
import Icon from 'react-native-vector-icons/Ionicons';
import { PokemonCard } from '../components/PokemonCard';
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props extends StackScreenProps<any, any> {}
export const HomeScreen = ({ navigation }: Props) => {
  const { top } = useSafeAreaInsets();

  const { simplePokemoList, loadPokemons } = usePokemonPaginated();

  // console.log(simplePokemoList);
  return (
    <>
      <Image
        source={ require('../assets/pokebola.png') }
        style={ styles.pokebolaBG }
      />

      <View style={{
        alignItems: 'center'
      }}>
        <FlatList
          data={ simplePokemoList }
          keyExtractor={(pokemon) => pokemon.id }
          showsVerticalScrollIndicator={ false }
          numColumns={2}
          renderItem={({ item }) => (<PokemonCard pokemon={item} />)}
          ListHeaderComponent={(
            <Text style={{
              ...styles.title,
              ...styles.globalMargin,
              top: top + 20,
              marginBottom: top + 20,
              paddingBottom: 10,
            }}>Pokedex</Text>
          )}
          onEndReached={ loadPokemons }
          onEndReachedThreshold={0.4}
          ListFooterComponent={(
            <ActivityIndicator
              style={{ height: 100 }}
              size={20}
              color='gray'
            />
          )}
        />
      </View>
    </>
  )
}
