/**
 * @format
 * @flow
 */

import React, {
  Component,
  Fragment,
} from 'react';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
} from 'react-native';

import Scenes from 'rnexample/src/Scenes';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#92f0d7',
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
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    height: 20,
    marginBottom: 40,
    width: 300,
  },
});

type PropsType = {
  navigation: Object,
};
type StateType = {
  url: string,
};

export default class SlidePre extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      url: '',
    };
  }

  transition = (destination: string) => {
    this.props.navigation.navigate(destination, {
      url: this.state.url,
    });
  }

  render(): React.DOM {
    return (
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
      >
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            value={this.state.url}
            onChangeText={(text) => {
              this.setState({
                url: text,
              });
            }}
            placeholder="url"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => { this.transition(Scenes.Slide); }}
          >
            <Text>
              GO
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
