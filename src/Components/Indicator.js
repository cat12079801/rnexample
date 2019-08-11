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

const color = {
  emeraldGreen: '#92f0d7',
  active: '#92f0d7',
  inactive: '#c9f2e7',
  white: 'white',
};

const styles = StyleSheet.create({
  container: {
    bottom: 10,
    flex: 1,
    height: 60,
    position: 'absolute',
    right: 10,
    width: 60,
  },
  triangleBase: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderStyle: 'solid',
  },
  triangleTop: {
    position: 'absolute',
    top: 0,
    left: 30 - 10,
    backgroundColor: 'transparent',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  triangleLeft: {
    position: 'absolute',
    top: 20,
    left: 0,
    backgroundColor: 'transparent',
    borderRightWidth: 20,
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  triangleRight: {
    position: 'absolute',
    top: 20,
    left: 40,
    backgroundColor: 'transparent',
    borderLeftWidth: 20,
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  triangleBottom: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'transparent',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
});

type PropsType = {
  activeTop: boolean,
  activeLeft: boolean,
  activeRight: boolean,
  activeBottom: boolean,
};

export default class Slide extends Component<PropsType> {
  render(): React.DOM {
    return (
      <Fragment>
        <View style={styles.container}>
          <View
            style={[
              styles.triangleBase,
              styles.triangleTop,
              {
                borderColor: this.props.activeTop ? color.active : color.inactive,
              },
            ]}
          >
          </View>
          <View
            style={[
              styles.triangleBase,
              styles.triangleLeft,
              {
                borderColor: this.props.activeLeft ? color.active : color.inactive,
              },
            ]}
          >
          </View>
          <View
            style={[
              styles.triangleBase,
              styles.triangleRight,
              {
                borderColor: this.props.activeRight ? color.active : color.inactive,
              },
            ]}
          >
          </View>
          <View
            style={[
              styles.triangleBase,
              styles.triangleBottom,
              {
                borderColor: this.props.activeBottom ? color.active : color.inactive,
              },
            ]}
          >
          </View>
        </View>
      </Fragment>
    );
  }
}
