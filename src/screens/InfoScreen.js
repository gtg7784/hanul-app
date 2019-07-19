import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
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
      <ImageBackground style={{ width: '100%', height: '100%', backgroundColor: COLOR_PURPLE }}>
        <SafeAreaView style={styles.container} >
          <ScrollView contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps='handled'>
            <Text style={{
              marginTop: 20,
              fontSize: 26,
              letterSpacing: .5,
              color: COLOR_WHITE,
              marginBottom: 20
            }}>REGISTER</Text>
            <View style={{
              flexDirection: 'column',
              marginBottom: 30,
              marginTop: 20
            }}>
              <Text style={{
                fontSize: 16,
                fontWeight: '600',
                color: COLOR_WHITE,
                marginBottom: 10
              }}>이메일</Text>
              <TextInput
                style={{
                  paddingLeft: 14,
                  width: width - 76,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: '#fff'
                }}
                placeholder='example@example.com'
                value="gtg7784@naver.com"
              />
            </View>
            <View style={{
              flexDirection: 'column',
              marginBottom: 30
            }}>
              <Text style={{
                fontSize: 16,
                fontWeight: '600',
                color: COLOR_WHITE,
                marginBottom: 10,
              }}>비밀번호</Text>
              <TextInput
                secureTextEntry={true}
                style={{
                  paddingLeft: 14,
                  width: width - 76,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: '#fff',
                  marginBottom: 20
                }}
                placeholder="password"
                value="asdfqwer"
              />
            </View>
            <View style={{
              flexDirection: 'column',
              marginBottom: 30
            }}>
              <Text style={{
                fontSize: 16,
                fontWeight: '600',
                color: COLOR_WHITE,
                marginBottom: 10,
              }}>이름</Text>
              <TextInput
                style={{
                  paddingLeft: 14,
                  width: width - 76,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: '#fff'
                }}
                value="고태건"
              />
            </View>
            <View style={{
              flexDirection: 'column',
              marginBottom: 30
            }}>
              <Text style={{
                fontSize: 16,
                fontWeight: '600',
                color: COLOR_WHITE,
                marginBottom: 10
              }}>생년월일</Text>
              <TextInput
                style={{
                  paddingLeft: 14,
                  width: width - 76,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: '#fff'
                }}
                placeholder='YYYY/MM/DD'
              value="2019/08/04"
              />
            </View>
            <TouchableOpacity
              style={{
                paddingHorizontal: 20,
                height: 40,
                borderRadius: 12,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignContent: 'center'
              }}
              
              onPress={() => this.props.navigation.navigate('Profile')}
            >
              <Text style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: '600',
                color: COLOR_PURPLE
              }}>확인</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 38
  }
});

export default LoginScreen;
