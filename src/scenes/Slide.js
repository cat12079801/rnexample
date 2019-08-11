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
  StatusBar,
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
  contentBody: {
    flex: 8,
    justifyContent: 'center',
  },
  contentTitle: {
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
type StateType = {
  scrollContent: Object,
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

export default class Slide extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      scrollContent: null,
    };
  }

  componentDidMount() {
    const lines = tmpmd.split(/\n/g);
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

    const hContent = [];

    pages.forEach((vPages) => {
      const vContent = [];
      vPages.forEach((page) => {
        const contentTitle = page.shift();
        const contentBody = page;
        vContent.push(
          <View
            key={page[0]}
            style={styles.scrollContent}
          >
            <View style={styles.contentTitle}>
              <Text>
                {contentTitle}
              </Text>
            </View>
            <View style={styles.contentBody}>
              <Text>
                {contentBody}
              </Text>
            </View>
          </View>,
        );
      });
      hContent.push(
        <ScrollView
          key={vContent[0].key}
          style={styles.scrollVertical}
          pagingEnabled={true}
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          {vContent}
        </ScrollView>,
      );
    });
    this.setState({
      scrollContent: (
        <ScrollView
          style={styles.scrollHorizontal}
          horizontal={true}
          pagingEnabled={true}
          bounces={false}
          showsHorizontalScrollIndicator={false}
        >
          {hContent}
        </ScrollView>
      ),
    });
  }

  render(): React.DOM {
    return (
      <Fragment>
        <StatusBar hidden={true} />
        <View style={styles.container}>
          {this.state.scrollContent}
        </View>
      </Fragment>
    );
  }
}
