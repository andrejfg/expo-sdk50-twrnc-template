import { View, Text } from 'react-native'
import tw from '@/lib/tailwind'
import React from 'react'
import { MonoText } from '@/components/StyledText'
import { useDeviceContext } from 'twrnc'

export default function TabTwoScreen() {
  useDeviceContext(tw)
  return (
    <View style={tw`flex-1 items-center justify-center gap-2`}>
      <Text style={tw`text-light-text dark:text-dark-text text-xl font-bold`}>
        Tab Two
      </Text>
      <MonoText style={tw`text-light-text dark:text-dark-text text-base`}>
        Tab Two Info
      </MonoText>
    </View>
  )
}
