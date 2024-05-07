import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MensajesGrupales = () => {

  //ESTO ES PARA ACCEDER A LA NAVEGACION 
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>MensajesGrupales</Text>

      <Pressable style={styles.boton}
        onPress={() => { navigation.navigate('Mensajes', { param1: 'valor1', param2: 'valor2' }) }}
      >
        <Text style={{ color: "#fff" }}>Ir a mensajes 1</Text>
      </Pressable>

      <Pressable style={styles.boton}
        onPress={() => { navigation.navigate('Mensajes', { param1: 'valor3', param2: 'valor4' }) }}
      >
        <Text style={{ color: "#fff" }}>Ir a mensajes 2</Text>
      </Pressable>

    </View>
  )
}

export default MensajesGrupales

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  boton: {
    backgroundColor: "red",
    width: 150,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 4,

  }
})