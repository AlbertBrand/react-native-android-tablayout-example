import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Tab, TabLayout } from 'react-native-android-tablayout'
import Labels from './Labels';

export default class StatefulTabLayout extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      pagePosition: 2, // start on third tab
    };
  }

  render() {
    return (
      <View>
        <TabLayout
          style={styles.tabLayout}
          selectedTab={this.state.pagePosition}
          onTabSelected={(e:Event) => {
            this.setState({ pagePosition: e.nativeEvent.position });
          }}>
          <Tab name="Tab 1" accessibilityLabel={Labels.Stateful.tab1}/>
          <Tab name="Tab 2" accessibilityLabel={Labels.Stateful.tab2}/>
          <Tab name="Tab 3" accessibilityLabel={Labels.Stateful.tab3}/>
        </TabLayout>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.setState({ pagePosition: 1 });
          }}>
          <View accessibilityLabel={Labels.Stateful.button}>
            <Text>Switch to second tab</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabLayout: {
    backgroundColor: '#ddd'
  },
  button: {
    borderWidth: 1,
    borderColor: '#888',
    margin: 10,
    padding: 10,
  },
});
