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
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

const dimensions = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  scrollContent: {
    alignItems: 'center',
    height: dimensions.height,
    justifyContent: 'center',
    width: dimensions.width,
  },
  scrollHorizontal: {
  },
  scrollVertical: {
  },
});

type PropsType = {
  // navigation: Object,
};

const tmpmd = `# タイトル

2019/08/11
中村槙吾

## お品書き

1. ほげほげ1
1. ほげほげ2
1. ほげほげ3
1. ほげほげ4

## ほげほげ1

にゃーん

### 縦スワイプした

こうなる

### もう一つ縦スワイプ

こうなってくれ
`;

export default class Slide extends Component<PropsType> {
  componentDidMount() {
    console.log(tmpmd);
    const lines = tmpmd.split(/\n/g);
    console.log(lines);
    const pages = [];
    let x = 0;
    let y = 0;
    lines.forEach((line) => {
      if (/^# /.test(line)) {
        x = 0;
        y = 0;
        pages.push([[]]);
      } else if (/^## /.test(line)) {
        x += 1;
        y = 0;
        pages.push([[]]);
      } else if (/^### /.test(line)) {
        y += 1;
        pages[x].push([]);
      }
      const pushLine = line.replace(/^#+ /, '');
      pages[x][y].push(pushLine);
    });
    console.log(pages);
  }

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
