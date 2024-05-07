import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';


const Mensajes = () => {

    //ESTO ES PARA ACCEDER A LA NAVEGACION 
    const navigation = useNavigation();

    //ESTO ES PARA ACCEDER A LOS PARAMETROS ENVIADOS DESDE EL PADRE
    const route = useRoute()

    // Accede a los parámetros enviados desde MensajesGrupales
    const { param1, param2 } = route.params;

    return (
        <View style={styles.container}>
            <Pressable style={styles.volver}
                onPress={() => { navigation.navigate('Grupo') }}
            >
                <Text>Volver</Text>
            </Pressable>

            <Text>Mensajes</Text>

            <Text>Mensajes</Text>
            <Text>Parametro 1: {param1}</Text>
            <Text>Parametro 2: {param2}</Text>

        </View>
    )
}

export default Mensajes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    volver: {
        backgroundColor: "red",
        width: 100,
        alignItems: "center",
        paddingVertical: 10,
        borderRadius: 5,
    }
})