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
  StatusBar,
  Button
} from "react-native";
import Modal from "react-native-modal";

import {
  IMAGE_CALENDAR, IMAGE_AVATAR, IMAGE_NOTIFICATION, IMAGE_LEFT, IMAGE_RIGHT
} from '../constants/image';
import {
  COLOR_PURPLE, COLOR_WHITE, COLOR_BLUE, COLOR_PINK, COLOR_BLACK, COLOR_SHADOW, COLOR_SHELL, COLOR_TEXT_GRAY
} from '../constants/color';
import { width, height } from '../constants/size';

const keywords = ['수학공부', '영상', '독서']

class KeywordScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    isModalVisible: true,
    text: ''
  }

  static navigationOptions = ({
    header: null,
    headerStyle: {
      elevation: 0,
      shadowOffset: { height: 0, width: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
      backgroundColor: 'transparent',
      shadowColor: "transparent"
    }
  });

  toggleModal = () => {
    const { isModalVisible } = this.state;
    this.setState({
      isModalVisible: !isModalVisible
    })
  }

  render() {
    const { navigation } = this.props;
    const { isModalVisible } = this.state;
    return (
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={this.toggleModal}
        style={{
          justifyContent: "flex-end",
          margin: 0
        }}
      >
        <View style={{
          marginLeft: 22,
          marginTop: 50,
          width: width - 44,
          height: 480,
          paddingHorizontal: 32,
          paddingTop: 20,
          paddingBottom: 16,
          backgroundColor: COLOR_WHITE,
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 16,
            fontWeight: '600',
            letterSpacing: .16,
            color: '#000',
            marginTop: 25,
            marginBottom: 32
          }}>오늘의 하루 키워드로 정리하기</Text>

          {keywords.map((item, i) => (
            <Text
              style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 16,
                fontSize: 19,
                fontWeight: '600',
                letterSpacing: .19,
                color: '#fff',
                marginBottom: 20,
                backgroundColor: COLOR_PURPLE
              }}
              key={i}
            >
              {item}
            </Text>
          ))}
          <TouchableOpacity
            style={{
              width: 178,
              height: 40,
              borderRadius: 20,
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLOR_PURPLE
            }}
            onPress={this.toggleModal}
          >
            <Text style={{
              fontSize: 16,
              letterSpacing: .16,
              color: '#fff'
            }}>FINISH</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: 'center'
  }
});

export default KeywordScreen;
