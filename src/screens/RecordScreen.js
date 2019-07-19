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
  Button,
  Keyboard
} from "react-native";
import Modal from "react-native-modal";

import {
  IMAGE_CALENDAR, IMAGE_AVATAR, IMAGE_NOTIFICATION, IMAGE_LEFT, IMAGE_RIGHT
} from '../constants/image';
import {
  COLOR_PURPLE, COLOR_WHITE, COLOR_BLUE, COLOR_PINK, COLOR_BLACK, COLOR_SHADOW, COLOR_SHELL, COLOR_TEXT_GRAY
} from '../constants/color';
import { width, height } from '../constants/size';

class RecordScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    isModalVisible: true,
    text: '',
    next: false
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

  onPress = () => {
    const { isModalVisible } = this.state;
    this.setState({
      isModalVisible: !isModalVisible,
      next: true
    })
  }

  render() {
    const { navigation } = this.props;
    const { isModalVisible, next } = this.state;
    return (
      <React.Fragment>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => Keyboard.dismiss()}
          style={{
            justifyContent: "flex-end",
            margin: 0
          }}
        >
          <View style={{
            marginHorizontal: 22,
            marginVertical: 162,
            width: width - 44,
            height: height - 312,
            paddingHorizontal: 32,
            paddingTop: 20,
            paddingBottom: 16,
            backgroundColor: COLOR_WHITE,
            borderRadius: 12,
          }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              <Text style={{
                fontSize: 28,  
                color: COLOR_TEXT_GRAY,
                fontWeight: '300', 
                letterSpacing: -.94
              }}>제목</Text>
              <View style={{
                width: 14,
                height: 14,
                borderRadius: 7,
                backgroundColor: COLOR_PURPLE
              }} />
            </View>
            <TextInput
              style={{
                flex: 1,
                width: width - 112,
                height: height - 452,
                backgroundColor: COLOR_SHELL,
                shadowColor: COLOR_SHADOW,
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 20,
                paddingRight: 20,
                alignItems: 'flex-start',
                marginTop: 16,
                borderRadius: 12,
                shadowColor: 'rgb(34, 34, 34)',
                shadowOpacity: .2,
                shadowOffset: { width: 1, height: 2 },
                borderWidth: .3,
                borderColor: '#979797'
              }}
              onChangeText={(text) => this.setState({ input: text })}
              multiline={true}
              placeholder='오늘 하루를 표현해주세요'
            />
            <View style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center'
            }}>
              <TouchableOpacity
                style={{
                  marginTop: 16,
                  width: 178,
                  height: 40,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: COLOR_PURPLE
                }}
                onPress={this.onPress}
              >
                <Text style={{
                  fontSize: 16,
                  letterSpacing: .16,
                  color: COLOR_WHITE
                }}>NEXT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </React.Fragment>
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

export default RecordScreen;
