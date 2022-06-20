import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

const Top = () => {
  return (
    <View>
    <Image
      source={require("../assets/groove-logo.png")}
      resizeMode="cover"
      style={styles.logoImage}
    />
  </View>
  )
}

export default Top

const styles = StyleSheet.create({

    logoImage: {
        width: 100,
        height: 100,
      }
})