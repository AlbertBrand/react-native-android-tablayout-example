import React, {
  Component,
  StyleSheet,
  View
} from 'react-native';
import { Tab, TabLayout } from 'react-native-android-tablayout'
import Labels from './Labels';

export default class ScrollableTabLayout extends Component {
  render() {
    return (
      <View>
        <TabLayout style={styles.tabLayout} tabMode="scrollable">
          <Tab name="Tab one"   accessibilityLabel={Labels.Scrollable.tab1}/>
          <Tab name="Tab two"   accessibilityLabel={Labels.Scrollable.tab2}/>
          <Tab name="Tab three" accessibilityLabel={Labels.Scrollable.tab3}/>
          <Tab name="Tab four"  accessibilityLabel={Labels.Scrollable.tab4}/>
          <Tab name="Tab five"  accessibilityLabel={Labels.Scrollable.tab5}/>
          <Tab name="Tab six"   accessibilityLabel={Labels.Scrollable.tab6}/>
          <Tab name="Tab seven" accessibilityLabel={Labels.Scrollable.tab7}/>
          <Tab name="Tab eight" accessibilityLabel={Labels.Scrollable.tab8}/>
          <Tab name="Tab nine"  accessibilityLabel={Labels.Scrollable.tab9}/>
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
