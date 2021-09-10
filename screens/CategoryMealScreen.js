import React from 'react'
import {View, Text} from 'react-native'
const CategoryMealScreen=props=>{
    return (<View style={styles.screen}>
          <Text>The categories Meal screen!</Text>
    </View>)
};

const styles= StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default CategoryMealScreen; 