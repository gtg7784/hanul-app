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
  IMAGE_LOGO,
  IMAGE_LOGIN_BACK,
  IMAGE_LOGIN_CHECK,
  IMAGE_SNS_KAKAO,
  IMAGE_SNS_FACEBOOK,
  IMAGE_SNS_INSTA,
  IMAGE_SNS_GOOGLE
} from '../constants/image';
import { COLOR_PURPLE, COLOR_WHITE, COLOR_GREEN } from '../constants/color';
import { width } from '../constants/size';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    auto: false
  }

  autoLogin = () => {
    const { auto } = this.state;
    this.setState({
      auto: !auto
    })
  }

  onLogin = () => {
    const { navigation } = this.props;
    navigation.navigate('Home')
  }

  onRegister = () => {
    const { navigation } = this.props;
    navigation.navigate('Register')
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

  render() {
    const { auto } = this.state;
    return (
      <React.Fragment>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={IMAGE_LOGIN_BACK} style={{ width: '100%', height: '100%' }}>
          <SafeAreaView style={styles.container} >
            <View style={{
              width: width,
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 46
            }}>
              <Image source={IMAGE_LOGO} />
            </View>
            <TextInput style={{
              marginHorizontal: 36,
              width: width - 72,
              height: 48,
              borderRadius: 20,
              paddingHorizontal: 20,
              fontSize: 15,
              fontWeight: '600',
              backgroundColor: '#fff',
              textAlign: 'left',
              marginBottom: 16
            }}
              placeholder='아이디'
              placeholderTextColor={COLOR_PURPLE}
            />
            
            <TextInput style={{
              marginHorizontal: 36,
              width: width - 72,
              height: 48,
              borderRadius: 20,
              paddingHorizontal: 20,
              fontSize: 15,
              fontWeight: '600',
              backgroundColor: '#fff',
              textAlign: 'left',
              marginBottom: 16
            }}
              placeholder='비밀번호'
              placeholderTextColor={COLOR_PURPLE}
              secureTextEntry={true} />
            <View style={{
              marginHorizontal: 36,
              marginBottom: 36
            }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  paddingLeft: 4
                }}
                onPress={this.autoLogin}
              >
                <View style={{
                  width: 14,
                  height: 14,
                  borderWidth: 1,
                  borderRadius: 2,
                  borderColor: COLOR_PURPLE,
                  backgroundColor: COLOR_WHITE,
                  marginRight: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {auto === true ? <Image source={IMAGE_LOGIN_CHECK} /> : null }
                </View>
                <Text style={{
                  fontSize: 12,
                  fontWeight: '600',
                  color: COLOR_WHITE
                }}>로그인 상태 유지</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              width: width,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <TouchableOpacity
                style={{
                  width: 140,
                  height: 46,
                  borderRadius: 20,
                  backgroundColor: COLOR_PURPLE,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 42
                }}
                onPress={this.onLogin}
              >
                <Text style={{
                  fontSize: 17,
                  color: COLOR_WHITE,
                  letterSpacing: 1.4
                }}>
                  SIGN IN
                </Text>
              </TouchableOpacity>
              <View style={{
                width: width,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 32
              }}>
                <Text style={{
                  color: COLOR_WHITE,
                  fontSize: 16,
                  fontWeight: '300',
                }}>
                  아직 회원이 아니신가요? 
                </Text>
                <TouchableWithoutFeedback onPress={this.onRegister}>
                  <Text style={{
                    fontSize: 16,
                    fontWeight: '700',
                    color: COLOR_GREEN
                  }}>
                    {' 회원가입'}
                  </Text>
                </TouchableWithoutFeedback>
              </View>
              <TouchableWithoutFeedback>
                <Text style={{
                  fontSize: 15,
                  fontWeight: '600',
                  color: COLOR_WHITE
                }}>ID/PW 찾기</Text>
              </TouchableWithoutFeedback>
              <View style={{
                width: width,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 32
              }}>
                <View style={{
                  height: 2,
                  width: 64,
                  backgroundColor: COLOR_WHITE
                }}/>
                <Text style={{
                  fontSize: 15,
                  fontWeight: '600',
                  marginHorizontal: 10,
                  color: COLOR_WHITE
                }}>SNS로 시작하기</Text>
                <View style={{
                  height: 2,
                  width: 64,
                  backgroundColor: COLOR_WHITE
                }} />
              </View>
              <View style={{
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: 32
              }}>
                <TouchableOpacity style={{
                  marginRight: 20
                }}>
                  <Image source={IMAGE_SNS_KAKAO} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                  marginRight: 20
                }}>
                  <Image source={IMAGE_SNS_FACEBOOK} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                  marginRight: 20
                }}>
                  <Image source={IMAGE_SNS_INSTA} />
                </TouchableOpacity>
                <TouchableOpacity >
                  <Image source={IMAGE_SNS_GOOGLE} />
                </TouchableOpacity>
              </View>
            </View>

          </SafeAreaView>
        </ImageBackground>
      </React.Fragment>
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
