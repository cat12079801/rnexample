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
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import InputBox from 'rnexample/src/Components/InputBox';

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
    paddingHorizontal: 50,
  },
  height20: {
    height: 20,
  },
});

type PropsType = {
  navigation: Object,
};
type StateType = {
  mailAddress: string,
  phoneNumber: string,
};

export default class InputSample extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      mailAddress: '',
      phoneNumber: '',
    };
  }

  transition = (destination: string) => {
    this.props.navigation.navigate(destination);
  }

  render(): React.DOM {
    return (
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
      >
        <View style={styles.container}>
          <InputBox
            title="メールアドレス"
            inputText={this.state.mailAddress}
            updateState={(v) => { this.setState({ mailAddress: v }); }}
            validateFunction={(v) => {
              return /^.+@.+\..+$/.test(v);
            }}
          />

          <View style={styles.height20}>
          </View>

          <InputBox
            title="携帯電話番号"
            placeholder="phone number"
            inputText={this.state.phoneNumber}
            updateState={(v) => { this.setState({ phoneNumber: v }); }}
            validateFunction={(v) => {
              return /^0[789]0\d{8}$/.test(v);
            }}
            titleStyle={{
              textAlign: 'center',
            }}
            textInputStyle={{
              borderColor: 'lightgray',
              borderRadius: 30,
              padding: 10,
            }}
            textInputErrorStyle={{
              borderColor: 'orange',
              borderStyle: 'dashed',
            }}
          />

          <View style={styles.height20}>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const states = [];
              Object.keys(this.state).forEach((k) => {
                states.push(`${k}: ${this.state[k]}`);
              });
              alert(states.join('\n')); // eslint-disable-line no-alert
            }}
          >
            <Text>
              show inputs
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
