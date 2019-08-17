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
  validateFunction?: Function,
  titleStyle?: Object,
  textInputStyle?: Object,
  textInputErrorStyle?: Object,
};
type StateType = {
  isValid: boolean,
};

export default class InputBox extends Component<PropsType, StateType> {
  static defaultProps = {
    placeholder: '',
    validateFunction: (v: ?string) => { return true; }, // eslint-disable-line no-unused-vars
    titleStyle: {},
    textInputStyle: {},
    textInputErrorStyle: {},
  }

  // flow が undefined function の実行を抑制してくることの回避
  validator = this.props.validateFunction || InputBox.defaultProps.validateFunction;

  constructor(props: PropsType) {
    super(props);
    this.state = {
      isValid: true,
    };
  }

  render(): React.DOM {
    return (
      <View style={styles.container}>
        <Text style={this.props.titleStyle}>
          {this.props.title}
        </Text>
        <TextInput
          style={[
            styles.textInput,
            this.props.textInputStyle,
            this.state.isValid ? {} : {
              borderColor: 'red',
              ...this.props.textInputErrorStyle,
            },
          ]}
          value={this.props.inputText}
          onChangeText={(text) => {
            this.props.updateState(text);
            this.setState({
              isValid: text === '' || this.validator(text),
            });
          }}
          placeholder={this.props.placeholder}
        />
      </View>
    );
  }
}
