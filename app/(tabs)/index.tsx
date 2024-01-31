import { MonoText } from '@/components/StyledText'
import tw from '@/lib/tailwind'
import { View, Text } from 'react-native'
import { useDeviceContext } from 'twrnc'

export default function TabOneScreen() {
  useDeviceContext(tw)
  return (
    <View style={tw`flex-1 items-center justify-center gap-2`}>
      <Text style={tw`text-light-text dark:text-dark-text text-xl font-bold`}>
        Tab One
      </Text>
      <MonoText style={tw`text-light-text dark:text-dark-text text-base`}>
        Tab One Info
      </MonoText>
    </View>
  )
}
