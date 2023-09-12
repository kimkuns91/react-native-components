import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Typography } from './src/components/Typography';
import { LocalImage } from './src/components/LocalImage';
import { RemoteImage } from './src/components/RemoteImage';
import { Icon } from './src/components/Icons';
import { Badge } from './src/components/Badge';
import { Button } from './src/components/Button';
import { Divider } from './src/components/Divider';
import { Spacer } from './src/components/Spacer';
import { TabIcon } from './src/components/TabIcon';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HeaderWithoutCompound } from './src/components/HeaderWithoutCompound';
import { Header } from './src/components/Header/Header';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Typography color={'red'} fontSize={ 20 }>
//         이것은 텍스트 입니다.
//       </Typography>

//       <Spacer space={ 20 } />
//       <Divider />
//       <Spacer space={ 20 } />

//       <LocalImage localAsset={require('./assets/favicon.png')} width ={ 50 } height={ 50 }  />

//       <Spacer space={ 20 } />
//       <Divider />
//       <Spacer space={ 20 } />

//       <RemoteImage url={'https://wevibebucket.s3.ap-northeast-2.amazonaws.com/Model30.png'} width ={ 200 } height={ 100 }  />
//       <Icon name='ios-add-circle-outline' size={ 40 } color='red' />
//       <View style={{ flexDirection: 'row' }}>
//         <Badge fontSize={10}>
//           <Typography>BADGE</Typography>
//         </Badge>
//         <Badge fontSize={10}>
//           <Icon name='home' size={ 50 } color='black' />
//         </Badge>
//       </View>

//       <View style={{ flexDirection: 'row', marginTop: 32 }}>
//         <Button onPress={()=>{
//           console.log('PRESSED BUTTON')
//         }}>
//           <Typography>TEXT BUTTON</Typography>
//         </Button>
//         <Button onPress={()=>{
//           console.log('PRESSED ICON BUTTON')
//         }}>
//           <Icon name='home' size={ 50 } color='green' />
//         </Button>
//       </View>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <TabIcon iconName={ 'home' } />
//       <TabIcon iconName={ 'home' } visibleBadge/>
//     </View>
//   );
// }

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, }}>
        {/* <HeaderWithoutCompound title='HEADER'/> */}
        <Header>
          <Header.Group>
            <Header.Icon iconName="arrow-back"></Header.Icon>
            <Header.Title title="HEADER"></Header.Title>
          </Header.Group>
          <Header.Icon iconName="close"></Header.Icon>
        </Header>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
