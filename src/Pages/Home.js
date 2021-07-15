import React from 'react'
import {View,Text} from 'react-native'
import GlobalStyles from '../styles/GlobalStyles';
import { MainButton } from '../components/MainButton';


export function Home( { navigation} ){
    return(
        <View style={GlobalStyles.screenContainer}>
            <Text style={GlobalStyles.title}>
                IFRN - Pau dos Ferros
            </Text>
            <MainButton title="Página 1" onPress={() => navigation.navigate('Pagina1')} />
            <MainButton title="Página 2" onPress={() => navigation.navigate('Pagina2')} />

        </View>
    )
}