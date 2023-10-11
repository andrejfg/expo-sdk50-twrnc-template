import tw from '@/lib/tailwind'
import { View, Text } from 'react-native'

export default function TabOneScreen() {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-xl font-bold`}>Tab One</Text>
    </View>
  )
}
