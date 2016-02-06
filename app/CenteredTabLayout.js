import React, {
  Component,
  StyleSheet,
  View
} from 'react-native';
import { Tab, TabLayout } from 'react-native-android-tablayout'
import Labels from './Labels';

export default class CenteredTabLayout extends Component {
  render() {
    return (
      <View>
        <TabLayout style={styles.tabLayout} tabGravity="center">
          <Tab name="Tab 1" accessibilityLabel={Labels.Centered.tab1}/>
          <Tab name="Tab 2" accessibilityLabel={Labels.Centered.tab2}/>
          <Tab name="Tab 3" accessibilityLabel={Labels.Centered.tab3}/>
        </TabLayout>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabLayout: {
    backgroundColor: '#ddd',
  },
});
