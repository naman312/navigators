import React from 'react'
import {View, Text} from 'react-native'
const FavouriteScreen=props=>{
    return (<View style={styles.screen}>
          <Text>The Favourite Meal screen!</Text>
    </View>)
};

const styles= StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default FavouriteScreen; 