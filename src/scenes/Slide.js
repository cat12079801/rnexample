/**
 * @format
 * @flow
 */

import React, {
  Component,
  Fragment,
} from 'react';
import {
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import Scenes from 'rnexample/src/Scenes';

const dimensions  = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  scrollContent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: dimensions.height,
    width: dimensions.width,
  },
  scrollHorizontal: {
  },
  scrollVertical: {
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
          <ScrollView
            style={styles.scrollHorizontal}
            horizontal={true}
            pagingEnabled={true}
          >
            <ScrollView
              style={styles.scrollVertical}
              pagingEnabled={true}
            >
              <View style={styles.scrollContent}>
                <Text>
                  ページ1-1
                </Text>
              </View>
              <View style={styles.scrollContent}>
                <Text>
                  ページ1-2
                </Text>
              </View>
            </ScrollView>
            <ScrollView
              style={styles.scrollVertical}
              pagingEnabled={true}
            >
              <View style={styles.scrollContent}>
                <Text>
                  ページ2-1
                </Text>
              </View>
              <View style={styles.scrollContent}>
                <Text>
                  ページ2-2
                </Text>
              </View>
            </ScrollView>
          </ScrollView>
        </View>
      </Fragment>
    );
  }
}
