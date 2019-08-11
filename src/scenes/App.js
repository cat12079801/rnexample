/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {
  Component,
  Fragment,
} from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

type PropsType = {
  // navigation: Object,
};

export default class App extends Component<PropsType> {
  render(): React.DOM {
    return (
      <Fragment>
        <View style={styles.container}>
          <Text>
            hello world!
          </Text>
        </View>
      </Fragment>
    );
  }
}
