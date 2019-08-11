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
  Image,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import Indicator from 'rnexample/src/Components/Indicator';

const dimensions = Dimensions.get('window');
const windowHeight = Math.min(dimensions.height, dimensions.width);
const windowWidth = Math.max(dimensions.height, dimensions.width);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  contentBody: {
    flex: 4,
    justifyContent: 'center',
    paddingHorizontal: 50,
    width: windowWidth,
  },
  contentBodyImage: {
    resizeMode: 'contain',
    width: '100%',
  },
  contentBodyTextList: {
    fontSize: 24,
    textAlign: 'left',
  },
  contentBodyTextNormal: {
    fontSize: 24,
    textAlign: 'center',
  },
  contentTitle: {
    flex: 1,
    justifyContent: 'center',
  },
  contentTitleText: {
    fontSize: 64,
  },
  scrollContent: {
    alignItems: 'center',
    height: windowHeight,
    justifyContent: 'center',
    width: windowWidth,
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

1. あいうおおおお
2. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
3. ほ
4. ほげほげ4

こんな感じで箇条書きもできます

## ほげほげ1

![200](http://i.imgur.com/Jjwsc.jpg)
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

    pages.forEach((vPages, ix) => {
      const vContent = [];
      vPages.forEach((page, iy) => {
        const contentTitle = page.shift();
        const contentBody = [];

        if (page[0] === '') {
          page.shift();
        }

        page.forEach((line) => {
          const key = String(Math.random());
          if (/^!\[.*\]\(.*\)$/.test(line)) {
            const height = line.replace(/^!\[/, '').replace(/\]\(.*\)$/, '');
            const uri = line.replace(/^!\[.*\]\(/, '').replace(/\)$/, '');
            contentBody.push(
              <Image
                key={key}
                style={[
                  styles.contentBodyImage,
                  {
                    height: Number(height),
                  },
                ]}
                source={{ uri: uri }}
              />,
            );
          } else if (/^(\d+\. |- )/.test(line)) {
            contentBody.push(
              <Text
                key={key}
                style={styles.contentBodyTextList}
              >
                {line}
              </Text>,
            );
          } else {
            contentBody.push(
              <Text
                key={key}
                style={styles.contentBodyTextNormal}
              >
                {line}
              </Text>,
            );
          }
        });
        vContent.push(
          <View
            key={page[0]}
            style={styles.scrollContent}
          >
            <View style={styles.contentTitle}>
              <Text style={styles.contentTitleText}>
                {contentTitle}
              </Text>
            </View>
            <View style={styles.contentBody}>
              {contentBody}
            </View>
            <Indicator
              activeTop={iy !== 0}
              activeLeft={ix !== 0}
              activeRight={ix !== x}
              activeBottom={iy !== vPages.length - 1}
            />
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
