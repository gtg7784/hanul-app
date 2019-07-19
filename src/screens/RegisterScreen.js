import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  SafeAreaView,
  ImageBackground,
  StatusBar
} from "react-native";
import {
  IMAGE_REGISTER_FIRST
} from '../constants/image';
import { COLOR_PURPLE, COLOR_WHITE, COLOR_GREEN } from '../constants/color';
import { width } from '../constants/size';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
  }

  static navigationOptions = ({
    header: null
  });

  render() {
    return (
      <SafeAreaView style={styles.container} >
        <Image source={IMAGE_REGISTER_FIRST} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  }
});

export default LoginScreen;
