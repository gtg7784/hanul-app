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
  IMAGE_REGISTER_FIRST, IMAGE_PROFILE, IMAGE_PROFILE_AVARTA, IMAGE_PROFILE_RESEARCH
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
      <ImageBackground style={{ width: '100%', height: '100%', backgroundColor: COLOR_PURPLE, position: 'absolute', top: 0 }}>
        <SafeAreaView style={styles.container} >
          <Text style={{
            fontSize: 24,
            fontWeight: '600',
            letterSpacing: -.81,
            color: COLOR_WHITE,
            marginTop: 50,
            marginBottom: 24
          }}>유저 정보</Text>

          <Image style={{
            width: 112,
            height: 112,
            borderRadius: 56
          }} source={IMAGE_PROFILE}/>

          <Text style={{
            fontSize: 24,
            fontWeight: '600',
            letterSpacing: -.81,
            color: COLOR_WHITE,
            marginBottom: 10
          }}>고태건</Text>

          <Text style={{
            fontSize: 16,
            fontWeight: '300',
            letterSpacing: -.54,
            color: '#fff',
            marginBottom: 60
          }}>gtg7784@naver.com</Text>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'center'
          }}>
            <TouchableOpacity style={{
              width: 128,
              height: 128,
              justifyContent: 'center',
              alignContent: 'center',
              shadowColor: 'rgb(34, 34, 34)',
              shadowOffset: { width: 1, height: 2 },
              shadowOpacity: .2,
              shadowRadius: 10,
              backgroundColor: COLOR_WHITE,
              borderRadius: 16,
              marginRight: 48,
            }}
            onPress={() => this.props.navigation.navigate('Info')}>
              <Image source={IMAGE_PROFILE_AVARTA} style={{
                marginHorizontal: 48
              }}/>
              <Text style={{
                marginTop: 20,
                fontSize: 16,
                fontWeight: '600',
                letterSpacing: .16,
                color: COLOR_PURPLE,
                textAlign: 'center'
              }}>내 정보 관리</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              width: 128,
              height: 128,
              justifyContent: 'center',
              alignContent: 'center',
              shadowColor: 'rgb(34, 34, 34)',
              shadowOffset: { width: 1, height: 2 },
              shadowOpacity: .2,
              shadowRadius: 10,
              backgroundColor: COLOR_WHITE,
              borderRadius: 16
            }}
              onPress={() => this.props.navigation.navigate('ProfileLast')}>
              <Image source={IMAGE_PROFILE_RESEARCH} style={{
                marginHorizontal: 44
              }}/>
              <Text style={{
                marginTop: 20,
                fontSize: 16,
                fontWeight: '600',
                letterSpacing: .16,
                color: COLOR_PURPLE,
                textAlign: 'center'
              }}>활동 분석 결과</Text>
            </TouchableOpacity>

          </View>

          <TouchableOpacity
            style={{
                marginTop: 60,
                width: 304,
                height: 40,
                borderRadius: 12,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignContent: 'center'
              }}
              
              onPress={() => this.props.navigation.navigate('Home')}
            >
              <Text style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: '600',
                color: COLOR_PURPLE
              }}>확인</Text>
            </TouchableOpacity>
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
