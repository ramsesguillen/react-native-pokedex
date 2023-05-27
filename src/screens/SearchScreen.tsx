import { Dimensions, FlatList, Platform, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react'

import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { styles } from '../theme/appTheme';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const screenWidth = Dimensions.get('window').width;


export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isFetching, simplePokemoList } = usePokemonSearch();

  const [term, setTerm] = useState('')
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([])


  useEffect(() => {
    if (term.length === 0 ) {
      return setPokemonFiltered([]);
    }

    if (isNaN(Number(term))) {
      setPokemonFiltered(
        simplePokemoList.filter(poke => poke.name.toLocaleLowerCase().includes(term.toLowerCase()))
      );
    } else {
      const pokemonFound = simplePokemoList.find(poke => poke.id === term);
      setPokemonFiltered(pokemonFound ? [pokemonFound] : []);
    }

  }, [term]);

  if (isFetching) {
    return <Loading />
  }

  return (
    <View style={{
      flex: 1,
      marginHorizontal: 10,
    }}>
      <SearchInput
        onDebounce={(value) => setTerm(value)}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 55,
          top: (Platform.OS === 'ios') ? top : top + 30
        }}
      />

      <FlatList
          data={ pokemonFiltered }
          keyExtractor={(pokemon) => pokemon.id }
          showsVerticalScrollIndicator={ false }
          numColumns={2}
          renderItem={({ item }) => (<PokemonCard pokemon={item} />)}
          ListHeaderComponent={(
            <Text style={{
              ...styles.title,
              ...styles.globalMargin,
              paddingBottom: 10,
              marginTop:  (Platform.OS === 'ios') ? top + 60 : top + 90,
            }}>{ term }</Text>
          )}
        />
    </View>
  )
}
