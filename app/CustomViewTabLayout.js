import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Tab, TabLayout } from 'react-native-android-tablayout';
import Icon from 'react-native-vector-icons/FontAwesome';
import Labels from './Labels';

export default class CustomViewTabLayout extends Component {
  render() {
    return (
      <View>
        <TabLayout style={styles.tabLayout}>
          <Tab
            accessibilityLabel={Labels.CustomView.tab1}
            onTabSelected={()=>{ this.setState({tabSelected: 1}) }}
            style={styles.tab1}>
            <Text style={{fontWeight: 'bold', fontSize: 30}}>Big size</Text>
          </Tab>
          <Tab
            accessibilityLabel={Labels.CustomView.tab2}
            onTabSelected={()=>{ this.setState({tabSelected: 2}) }}
            style={styles.tab2}>
            <Icon name="rocket" size={30} color="#6c1d5f" style={{marginRight: 10}}/>
            <Text>Fly!</Text>
          </Tab>
          <Tab
            accessibilityLabel={Labels.CustomView.tab3}
            onTabSelected={()=>{ this.setState({tabSelected: 3}) }}
            style={styles.tab3}>
            <Image
              source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
              style={{width: 48, height: 48, marginRight: 10}}/>
            <Text style={{width: 40}}>React Native</Text>
          </Tab>
        </TabLayout>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabLayout: {
    backgroundColor: '#ddd'
  },
  tab1: {
    width: 110,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tab2: {
    width: 110,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tab3: {
    width: 110,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
