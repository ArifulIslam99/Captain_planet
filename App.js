import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { colors } from './src/theme/colors';
import { useFonts } from 'expo-font'
import { spacing } from './src/theme/spacing';
import { typography } from './src/theme/typography';
import Text from './src/components/Text/Text';

export default function App() {
  const [loaded] = useFonts({
    'Antonio-Medium' : require('./assets/fonts/Antonio-Regular.ttf'),
    'Spartan-Medium' : require('./assets/fonts/Spartan-Regular.ttf'),
    'Spartan-Bold' : require('./assets/fonts/Spartan-Bold.ttf'),
  })

  if(!loaded)
  {
    return <Text>Still Loading...</Text>
  }
  return (
    <View style={styles.container}>
      <Text preset='h2'>Ariful Afridi is not Calling!</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
