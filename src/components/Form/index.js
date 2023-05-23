import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import ResultImc from './ResultImc/';

export default function Form(){

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState("preencha o peso e altura")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular IMC")

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}

function validationImc(){
    if (height != null && height != null) {
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual a:")
        setTextButton("Calcular Novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular IMC")
    setMessageImc("preencha o peso e altura")
}
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                 onChangeText={setHeight}
                 value={height}
                 placeholder='Ex. 1.67'
                 keyboardType='numeric'
                />

                <Text>Peso</Text>
                <TextInput
                 onChangeText={setWeight}
                 value={weight}
                 placeholder='Ex. 80.45'
                 keyboardType='numeric'
                />
                <Button
                 onPress={() => validationImc()} 
                 title={textButton}
                />
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}