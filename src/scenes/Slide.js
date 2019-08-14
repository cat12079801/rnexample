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
import axios from 'axios';

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

export default class Slide extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      scrollContent: null,
    };
  }

  componentDidMount() {
    axios({
      url: 'https://gist.githubusercontent.com/cat12079801/08bcd5a445499a1df88f138c397b4240/raw/714ac31ada409bea550bb8ab51cb8384d5a5bb6c/presentation-2019-08-17.md',
      method: 'GET',
    })
      .then((res) => {
        this.parseMarkdown(res.data);
      });
  }

  parseMarkdown = (markdown: string) => {
    const lines = markdown.split(/\n/g);
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
