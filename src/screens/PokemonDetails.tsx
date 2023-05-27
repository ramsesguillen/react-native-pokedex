import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

import { FadeInImage } from '../components/FadeInImage';
import { PokemonFull } from '../interfaces/pokemonInterces'
import React from 'react'

interface Props {
  pokemon: PokemonFull
}

export const PokemonDetails = ({ pokemon }: Props) => {
  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{
        ...styles.container,
        marginTop: 370,
      }}>
        <Text style={styles.title}>Types</Text>
        <View style={{ flexDirection: 'row' }}>
          {
            pokemon.types.map(({ type}) => (
              <Text
                style={{
                  ...styles.regularText,
                  marginRight: 10,
                }}
                key={type.name}
              >{type.name}</Text>
            ))
          }
        </View>
        <Text style={styles.title}>Peso</Text>
        <Text style={styles.regularText}>{pokemon.weight}kg</Text>
      </View>

      <View style={{
        ...styles.container,
      }}>
        <Text style={styles.title}>Sprites</Text>
      </View>

      <ScrollView
        // style={{}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprite}
        />
      </ScrollView>

      <View style={{
        ...styles.container,
      }}>
        <Text style={styles.title}>Habilidades</Text>
        <View style={{ flexDirection: 'row' }}>
          {
            pokemon.abilities.map(({ ability }) => (
              <Text
                style={{
                  ...styles.regularText,
                  marginRight: 10,
                }}
                key={ability.name}
              >{ability.name}</Text>
            ))
          }
        </View>
      </View>

      <View style={{
        ...styles.container,
      }}>
        <Text style={styles.title}>Movimientos</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {
            pokemon.moves.map(({ move }) => (
              <Text
                style={{
                  ...styles.regularText,
                  marginRight: 10,
                }}
                key={move.name}
              >{move.name}</Text>
            ))
          }
        </View>
      </View>

      <View style={{
        ...styles.container,
      }}>
        <Text style={styles.title}>Stats</Text>
        <View>
          {
            pokemon.stats.map((stat, index) => (
              <View key={stat.stat.name + index}
                style={{ flexDirection: 'row' }}
              >
                <Text
                  style={{
                    ...styles.regularText,
                    width: 160
                  }}
                >{stat.stat.name}</Text>
                <Text
                  style={{
                    ...styles.regularText,
                    fontWeight: 'bold'
                  }}
                >{stat.base_stat}</Text>
              </View>
            ))
          }
        </View>

        <View style={{
          marginBottom: 20,
          alignItems: 'center'
        }}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={styles.basicSprite}
          />
        </View>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 19,
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
});
