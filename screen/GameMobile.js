// react
import React from 'react'
// react native
import {  View } from 'react-native'
// morra component
import {Game} from 'morra_components'


const GameMobile = ({navigation}) => {

    const goBack = () => {
      navigation.goBack()
    }

    return (
      <View style={{flex:1}}>
        <Game callback={goBack}/>
      </View>
    )
}

export default GameMobile
