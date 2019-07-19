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
  IMAGE_CALENDAR, IMAGE_AVATAR, IMAGE_NOTIFICATION
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
      <React.Fragment>
        <View style={{
          width: width,
          height: 235,
          backgroundColor: COLOR_PURPLE,
          position: 'absolute',
          top: 0,
          zIndex: -1
        }} />
        <SafeAreaView style={styles.container} >
          <View style={{
            width: width - 44,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end'
          }}>
            <Text style={{
              position: 'absolute',
              top: 10,
              left: 0,
              fontSize: 24,
              color: COLOR_WHITE,
            }}>한울</Text>

            <View style={{
              position: 'absolute',
              top: 10,
              right: 0,
              flexDirection: 'row'
            }}>
              <TouchableOpacity style={{marginRight: 20}}>
                <Image source={IMAGE_NOTIFICATION} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={IMAGE_AVATAR} />
              </TouchableOpacity>
            </View>

          </View>
          <View style={{
            marginTop: 27,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: width - 60,
          }}>
            <Image source={IMAGE_CALENDAR} />
            <View style={{
              width: width - 60,
              height: 530,
              borderRadius: 12,
              backgroundColor: COLOR_WHITE,
              shadowOffset: { width: 3, height: 5 },
              shadowColor: 'rgb(34, 34, 34)',
              shadowOpacity: .2,
              shadowRadius: 10,
              marginTop: -8
            }}>
              <View style={{
                paddingVertical: 30,
                paddingVertical: 15
              }}>
                <View style={{
                  paddingVertical: 15
                }}>
                  <Image
                    source={}
                    style={{
                      position: 'absolute',
                      left: 0
                    }}
                  />
                  <Image/>
                </View>
              </View>
              <View></View>
            </View>
          </View>
        </SafeAreaView>
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

export default LoginScreen;
