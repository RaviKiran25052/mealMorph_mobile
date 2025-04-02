import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

const categories = [
  { name: 'Healthy', icon: 'fitness-outline' },
  { name: 'Fast Food', icon: 'fast-food-outline' },
  { name: 'Breakfast', icon: 'cafe-outline' },
  { name: 'Non-Veg', icon: 'fish-outline' },
  { name: 'Desserts', icon: 'ice-cream-outline' },
  { name: 'Drinks', icon: 'wine-outline' },
];

const recipes = [
  { name: 'Avocado Toast', image: 'https://picsum.photos/200/200?toast', time: '10 min' },
  { name: 'Pasta Primavera', image: 'https://picsum.photos/200/200?pasta', time: '20 min' },
  { name: 'Berry Smoothie', image: 'https://picsum.photos/200/200?smoothie', time: '5 min' },
];

const HomeScreen = () => {
  return (
    <ScrollView className="flex-1 bg-white px-4 py-6">
      
      {/* Header & Search */}
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-3xl font-bold text-gray-900">Welcome Back! 👋</Text>
        <TouchableOpacity className="p-2 bg-gray-200 rounded-full">
          <Ionicons name="notifications-outline" size={24} color="#ea580c" />
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center bg-gray-100 px-3 rounded-full border border-orange-400">
        <Feather name="search" size={20} color="#ea580c" className="mr-2" />
        <TextInput placeholder="Search for recipes..." className="flex-1 text-gray-800" />
      </View>

      {/* Categories */}
      <Text className="text-xl font-semibold text-gray-900 mt-6">Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row mt-3">
        {categories.map((category, index) => (
          <TouchableOpacity 
            key={index} 
            className="p-3 min-w-24 bg-orange-500 rounded-lg mr-3 items-center shadow-lg">
            <Ionicons name={category.icon as any} size={24} color="white" />
            <Text className="text-sm text-white font-semibold mt-1">{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Featured Recipes */}
      <Text className="text-xl font-semibold text-gray-900 mt-6">Featured Recipes</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row mt-3 pb-4">
        {recipes.map((recipe, index) => (
          <View key={index} className="mr-4 bg-white rounded-xl shadow-xl overflow-hidden w-48">
            <Image source={{ uri: recipe.image }} className="w-full h-32" />
            <View className="p-3">
              <Text className="font-semibold text-gray-900 text-lg">{recipe.name}</Text>
              <Text className="text-gray-600 text-sm">⏳ {recipe.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Quick Actions */}
      <Text className="text-xl font-semibold text-gray-900 mt-6">Quick Actions</Text>
      <View className="flex-row justify-between mt-4">
        <TouchableOpacity className="bg-orange-500 px-5 py-3 rounded-lg flex-1 mr-2 items-center shadow-md">
          <Feather name="plus" size={22} color="white" />
          <Text className="text-white font-semibold mt-1">Add Recipe</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border border-orange-600 bg-white px-5 py-3 rounded-lg flex-1 ml-2 items-center shadow-md">
          <Feather name="shopping-cart" size={22} color="#ea580c" />
          <Text className="text-orange-600 font-semibold mt-1">Shopping List</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

export default HomeScreen;
