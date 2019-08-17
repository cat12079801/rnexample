/**
 * @format
 * @flow
 */

import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 2,
    width: '100%',
  },
});

type PropsType = {
  title: string,
  inputText: string,
  placeholder?: string,
  updateState: Function,
};

export default class InputBox extends Component<PropsType> {
  static defaultProps = {
    placeholder: '',
  }

  render(): React.DOM {
    return (
      <View style={styles.container}>
        <Text>
          {this.props.title}
        </Text>
        <TextInput
          style={styles.textInput}
          value={this.props.inputText}
          onChangeText={(text) => {
            this.props.updateState(text);
          }}
          placeholder={this.props.placeholder}
        />
      </View>
    );
  }
}
