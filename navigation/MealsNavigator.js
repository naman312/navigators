import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoriesScreen'
import MealDetailScreen from '../screens/MealDetailScreen'


const MealsNavigator=createNativeStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealScreen,

    },
    MealDetail: MealDetailScreen
}) 
export default NavigationContainer(MealsNavigator)