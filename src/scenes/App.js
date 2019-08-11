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
  // navigation: Object,
};

export default class App extends Component<PropsType> {
  transition = (destination: string) => {
    alert(destination);
  }

  render(): React.DOM {
    return (
      <Fragment>
        <View style={styles.container}>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => { this.transition(Scenes.Slide); }}
            >
              <Text>
                スライド
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Fragment>
    );
  }
}
