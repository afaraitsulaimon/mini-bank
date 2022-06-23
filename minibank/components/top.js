import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'

const Top = ({navigation}) => {

  const handleGoHome = () => {
    navigation.push('HomePage');
  }

  return (
    <View>
      <TouchableOpacity >
    <Image
      source={require("../assets/groove-logo.png")}
      resizeMode="cover"
      style={styles.logoImage}
      onPress={handleGoHome}
    />
    </TouchableOpacity>
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