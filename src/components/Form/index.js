import React from 'react'
import { Text, TextInput, View } from 'react-native'

export default function Form(){
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                placeholder='Ex. 1.67'
                keyboardType='numeric'
                />

                <Text>Peso</Text>
                <TextInput
                placeholder='Ex. 80.45'
                keyboardType='numeric'
                />
            </View>
        </View>
    );
}