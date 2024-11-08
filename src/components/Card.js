import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import {useWindowDimensions} from 'react-native';

export default function Card({text, iconName}) {

  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, ]}>
      <Ionicons name={iconName} size={20} color="black" />
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        paddingTop:24,
        paddingHorizontal:12,
        paddingBottom: 10, 
        alignItems: 'center',
        backgroundColor: '#FFFCF1',
        margin: 5,
        flex: 1,
        elevation: 2
    }
})