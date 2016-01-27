import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Tab, TabLayout } from 'react-native-android-tablayout';
import Labels from './Labels';

export default class SimpleTabLayout extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      tabSelected: 1
    };
  }

  render() {
    return (
      <View>
        <TabLayout style={styles.tabLayout}>
          <Tab
            name="Tab 1"
            accessibilityLabel={Labels.Simple.tab1}
            onTabSelected={()=>{ this.setState({tabSelected: 1}) }}/>
          <Tab
            name="Tab 2"
            accessibilityLabel={Labels.Simple.tab2}
            onTabSelected={()=>{ this.setState({tabSelected: 2}) }}/>
          <Tab
            name="Tab 3"
            accessibilityLabel={Labels.Simple.tab3}
            onTabSelected={()=>{ this.setState({tabSelected: 3}) }}/>
        </TabLayout>
        {this._createSelectedView()}
      </View>
    );
  }

  _createSelectedView() {
    return (
      <View style={styles.content}>
        <Text>Tab {this.state.tabSelected} selected</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabLayout: {
    backgroundColor: '#ddd'
  },
  content: {
    padding: 10
  },
});
