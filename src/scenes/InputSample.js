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

import InputBox from 'rnexample/src/Components/InputBox';

const styles = StyleSheet.create({
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
      <Fragment>
        <View style={styles.container}>
          <InputBox
            title="メールアドレス"
            inputText={this.state.mailAddress}
            updateState={(v) => { this.setState({ mailAddress: v }); }}
          />

          <View style={styles.height20}>
          </View>

          <InputBox
            title="携帯電話番号"
            inputText={this.state.phoneNumber}
            updateState={(v) => { this.setState({ phoneNumber: v }); }}
          />
        </View>
      </Fragment>
    );
  }
}
