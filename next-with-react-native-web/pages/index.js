import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center'
  },
  text: {
    alignItems: 'center',
    fontSize: 48
  },
  button: {
    padding: 200,
  }
})

export default props => (
  <View style={styles.container}>
    <Text style={styles.text}>Welcome to Next.js!</Text>
    <Button
      title={"My Button"} style={styles.button}
      onPress={()=>alert("Button onPress")}></Button>
  </View>
)
