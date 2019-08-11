/**
 * @format
 * @flow
 */

import React, {
  Component,
  Fragment,
} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

import Scenes from 'rnexample/src/Scenes';

const color = {
  button: '#92f0d7',
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: color.button,
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    width: 150,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

type PropsType = {
  navigation: Object,
};

export default class Slide extends Component<PropsType> {
  render(): React.DOM {
    return (
      <Fragment>
        <View style={styles.container}>
          <View>
            <Text>
              スライド予定
            </Text>
          </View>
        </View>
      </Fragment>
    );
  }
}
