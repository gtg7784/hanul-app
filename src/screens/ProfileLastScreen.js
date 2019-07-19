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
import { COLOR_PURPLE, COLOR_WHITE, COLOR_BLACK } from '../constants/color';
import { width } from '../constants/size';

class ProfileLastScreen extends React.Component {
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
            fontWeight: '300',
            letterSpacing: -.81,
            color: COLOR_WHITE,
            marginTop: 50,
            marginBottom: 24
                }}>
                    <Text style={{ fontWeight: '600' }}>고태건</Text>님의 지난
                    {'\n'}<Text style={{ fontWeight: '600' }}>활동 분석 결과</Text>에 따른
                    {'\n'}<Text style={{ fontWeight: '600' }}>추천 전공</Text>입니다.</Text>
                <View>
                    <View style={{
                        width: 300,
                        height: 70,
                        borderRadius: 16,
                        shadowColor: 'rgb(34 ,34 ,34)',
                        shadowOffset: { width: 1, height: 2 },
                        shadowOpacity: .2,
                        shadowRadius: 5,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                    }}>
                        <Text style={{
                                fontSize: 18,
                                fontWeight: '500',
                                letterSpacing: -.81,
                                color: COLOR_BLACK
                            }}>
                            <Text style={{
                                fontSize: 24,
                                fontWeight: '600',
                                letterSpacing: -.81,
                                color: COLOR_BLACK
                            }}>{'1   '}</Text>
                            시작 디자인 계열
                        </Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '300',
                            letterSpacing: -.44,
                            color: COLOR_BLACK
                        }}>81%</Text>
                    </View>
                    <View style={{
                        width: 300,
                        height: 70,
                        borderRadius: 16,
                        shadowColor: 'rgb(34 ,34 ,34)',
                        shadowOffset: { width: 1, height: 2 },
                        shadowOpacity: .2,
                        shadowRadius: 5,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end'
                    }}>
                        <Text style={{
                                fontSize: 18,
                                fontWeight: '500',
                                letterSpacing: -.81,
                                color: COLOR_BLACK
                            }}>
                            <Text style={{
                                fontSize: 24,
                                fontWeight: '600',
                                letterSpacing: -.81,
                                color: COLOR_BLACK}}>{'2   '}</Text>
                            공학 교육 계열
                        </Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '300',
                            letterSpacing: -.44,
                            color: COLOR_BLACK
                        }}>63%</Text>
                    </View>
                    <View style={{
                        width: 300,
                        height: 70,
                        borderRadius: 16,
                        shadowColor: 'rgb(34 ,34 ,34)',
                        shadowOffset: { width: 1, height: 2 },
                        shadowOpacity: .2,
                        shadowRadius: 5,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end'
                    }}>
                        <Text style={{
                                fontSize: 18,
                                fontWeight: '500',
                                letterSpacing: -.81,
                                color: COLOR_BLACK
                            }}>
                            <Text style={{
                                fontSize: 24,
                                fontWeight: '600',
                                letterSpacing: -.81,
                                color: COLOR_BLACK}}>{'3   '}</Text>
                            사회 교육 계열
                            </Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '300',
                            letterSpacing: -.44,
                            color: COLOR_BLACK
                        }}>51%</Text>
                    </View>
                </View>
            <TouchableOpacity
                    style={{
                  marginTop: 100,
                paddingHorizontal: 20,
                width: width-76,
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

export default ProfileLastScreen;
