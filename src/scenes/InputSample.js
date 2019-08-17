/**
 * @format
 * @flow
 */

import React, {
  Component,
  Fragment,
} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import InputBox from 'rnexample/src/Components/InputBox';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  height20: {
    height: 20,
  },
});

type PropsType = {
  navigation: Object,
};

export default class InputSample extends Component<PropsType> {
  transition = (destination: string) => {
    this.props.navigation.navigate(destination);
  }

  render(): React.DOM {
    return (
      <Fragment>
        <View style={styles.container}>
          <InputBox />

          <View style={styles.height20}>
          </View>

          <InputBox />
        </View>
      </Fragment>
    );
  }
}
