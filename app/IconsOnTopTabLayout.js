import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Tab, TabLayout } from 'react-native-android-tablayout'
import Icon from 'react-native-vector-icons/FontAwesome';
import Labels from './Labels';

export default class IconsOnTopTabLayout extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      iconUri: ''
    };
  }

  componentDidMount() {
    Icon.getImageSource('user', 24, 'red').then(source => {
      this.setState({ iconUri: source.uri })
    });
  }

  render() {
    return (
      <View>
        <TabLayout style={styles.tabLayout}>
          <Tab
            name="Tab 1"
            accessibilityLabel={Labels.IconsOnTop.tab1}
            iconSize={24}
            iconUri={this.state.iconUri}/>
          <Tab
            name="Tab 2"
            accessibilityLabel={Labels.IconsOnTop.tab2}
            iconSize={24}
            iconResId="custom_icon"/>
          <Tab
            name="Tab 3"
            accessibilityLabel={Labels.IconsOnTop.tab3}
            iconSize={24}
            iconPackage="android"
            iconResId="emo_im_cool"/>
        </TabLayout>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabLayout: {
    backgroundColor: '#ddd',
    height: 72,
  },
});
