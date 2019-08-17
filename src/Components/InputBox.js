/**
 * @format
 * @flow
 */

import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

type PropsType = {
};

export default class InputBox extends Component<PropsType> {
  render(): React.DOM {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}
