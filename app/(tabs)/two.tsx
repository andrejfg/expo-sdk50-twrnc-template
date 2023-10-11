import { View, Text } from 'react-native'
import tw from '@/lib/tailwind'
import React from 'react'

export default function TabTwoScreen() {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-xl font-bold`}>Tab Two</Text>
    </View>
  )
}
