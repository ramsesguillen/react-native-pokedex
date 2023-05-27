import { Platform, StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native'
import React, { useEffect, useState } from 'react'

import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
  style?: StyleProp<ViewStyle>,
  onDebounce: (value: string) => void;
}

export const SearchInput = ({ style, onDebounce }: Props) => {
  const [textValue, setTextValue] = useState('');

  const debouncedValue =  useDebouncedValue(textValue, 1500);

  useEffect(() => {
    onDebounce(debouncedValue)
  }, [debouncedValue]);
  return (
    <View style={{
      ...styles.container,
      ...style as any
    }}>
      <View style={ styles.textBackground }>
        <TextInput placeholder='Buscar Pockemon'
          style={{
            ...styles.textInput,
            top: (Platform.OS === 'ios') ? 0 : 2
          }}
          autoCapitalize='none'
          autoCorrect={false}
          value={ textValue }
          onChangeText={ setTextValue }
        />

        <Icon
          name="search-outline"
          color='grey'
          size={30}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
    // flexDirection: 'row',
    // backgroundColor: 'red'
  },
  textBackground: {
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textInput: {
    fontSize: 18,
    flex: 1,
  }
});
