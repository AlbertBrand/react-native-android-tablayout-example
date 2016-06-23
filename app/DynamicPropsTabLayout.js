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

export default class DynamicPropsTabLayout extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      names: ['QWERTY', 'UIOP', 'AS'],
      iconResIds: ['ic_menu_home', 'btn_rating_star_off_pressed', ''],
      iconSizes: [24, 36, 0]
    };
  }

  render() {
    return (
      <View>
        <TabLayout style={styles.tabLayout}>
          <Tab
            name={this.state.names[0]}
            iconSize={this.state.iconSizes[0]}
            iconResId={this.state.iconResIds[0]}
            iconPackage='android'
            accessibilityLabel={Labels.DynamicProps.tab1}/>
          <Tab
            name={this.state.names[1]}
            iconSize={this.state.iconSizes[1]}
            iconResId={this.state.iconResIds[1]}
            iconPackage='android'
            accessibilityLabel={Labels.DynamicProps.tab2}/>
          <Tab
            name={this.state.names[2]}
            iconSize={this.state.iconSizes[2]}
            iconResId={this.state.iconResIds[2]}
            iconPackage='android'
            accessibilityLabel={Labels.DynamicProps.tab3}/>
        </TabLayout>
        <TouchableOpacity
          style={styles.button}
          onPress={this.changeTabs}>
          <View accessibilityLabel={Labels.DynamicProps.button}>
            <Text>Change tabs</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  changeTabs = () => {
    const names = this.roundRobin(this.state.names);
    const iconResIds = this.roundRobin(this.state.iconResIds);
    const iconSizes = this.roundRobin(this.state.iconSizes);
    this.setState({names, iconResIds, iconSizes});
  };

  roundRobin(list) {
    const newList = list.slice();
    const first = newList.shift();
    newList.push(first);
    return newList;
  }
}

const styles = StyleSheet.create({
  tabLayout: {
    backgroundColor: '#ddd',
    height: 56,
  },
  button: {
    borderWidth: 1,
    borderColor: '#888',
    margin: 10,
    padding: 10,
  },
});
