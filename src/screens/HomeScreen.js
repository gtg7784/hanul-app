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
  IMAGE_CALENDAR, IMAGE_AVATAR, IMAGE_NOTIFICATION, IMAGE_LEFT, IMAGE_RIGHT
} from '../constants/image';
import {
  COLOR_PURPLE, COLOR_WHITE, COLOR_BLUE, COLOR_PINK, COLOR_BLACK, COLOR_SHADOW, COLOR_SHELL
} from '../constants/color';
import { width, height } from '../constants/size';
import RecordScreen from './RecordScreen.js'
import KeywordScreen from './KeywordScreen.js'

const calendar = [
  [null, 1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, 31, null, null, null, null]
]

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    onRecord: false,
    onKeyword: false
  }

  static navigationOptions = ({
    header: null,
  });

  onRecord = () => {
    const { onRecord } = this.state;

    this.setState({
      onRecord: !onRecord
    })
  }

  onKeyword = () => {
    const { onKeyword } = this.state;

    this.setState({
      onKeyword: !onKeyword
    })
  }

  render() {
    const { navigation } = this.props;
    const { onRecord, onKeyword } = this.state;
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
          {onRecord ? (
            <RecordScreen />
          ) : null}
          {onKeyword ? (
            <KeywordScreen />
          ) : null }
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
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Profile')}>
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
              borderRadius: 12,
              backgroundColor: COLOR_WHITE,
              shadowOffset: { width: 3, height: 5 },
              shadowColor: COLOR_SHADOW,
              shadowOpacity: .2,
              shadowRadius: 10,
              marginTop: -8,
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              <View style={{
                width: width - 60,
                paddingVertical: 30,
                paddingVertical: 15
              }}>
                <View style={{
                  marginTop: 32,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Image
                    source={IMAGE_LEFT}
                    style={{
                      position: 'absolute',
                      left: 32
                    }}
                  />
                  <Text style={{
                    fontSize: 18,
                    fontWeight: '600'
                  }}>
                    2018
                    <Text style={{ fontWeight: '300' }}>{'년 '}</Text> 
                    07
                    <Text style={{ fontWeight: '300' }}>월</Text>
                  </Text>
                  <Image
                    source={IMAGE_RIGHT}
                    style={{
                      position: 'absolute',
                      right: 32
                    }}
                  />
                </View>
              </View>
              <View style={{
                width: '100%',
                marginTop: 32,
                paddingHorizontal: 16,
                flexDirection: 'column',
              }}>
                <View style={{
                  flexDirection: 'row',
                  width: '100%',
                  marginBottom: 8
                }}>
                  <Text style={{
                    width: 28.6,
                    textAlign: 'center',
                    marginRight: 12.8,
                    fontSize: 15,
                    fontWeight: '300',
                    letterSpacing: -.5,
                    color: COLOR_PINK}}>Sun</Text>
                  <Text style={{
                    width: 28.6,
                    textAlign: 'center',
                    marginRight: 12.8,
                    fontSize: 15,
                    fontWeight: '300',
                    letterSpacing: -.5,
                    color: COLOR_BLACK}}>Mon</Text>
                  <Text style={{
                    width: 28.6,
                    textAlign: 'center',
                    marginRight: 12.8,
                    fontSize: 15,
                    fontWeight: '300',
                    letterSpacing: -.5,
                    color: COLOR_BLACK}}>Tue</Text>
                  <Text style={{
                    width: 28.6,
                    textAlign: 'center',
                    marginRight: 12.8,
                    fontSize: 15,
                    fontWeight: '300',
                    letterSpacing: -.5,
                    color: COLOR_BLACK}}>Wen</Text>
                  <Text style={{
                    width: 28.6,
                    textAlign: 'center',
                    marginRight: 12.8,
                    fontSize: 15,
                    fontWeight: '300',
                    letterSpacing: -.5,
                    color: COLOR_BLACK}}>Thu</Text>
                  <Text style={{
                    width: 28.6,
                    textAlign: 'center',
                    marginRight: 12.8,
                    fontSize: 15,
                    fontWeight: '300',
                    letterSpacing: -.5,
                    color: COLOR_BLACK}}>Fri</Text>
                  <Text style={{
                    width: 28.6,
                    textAlign: 'center',
                    fontSize: 15,
                    fontWeight: '300',
                    letterSpacing: -.5,
                    color: COLOR_BLUE}}>Sat</Text>
                </View>
                {calendar.map((item, i) => (
                  <View style={{
                    flexDirection: 'row',
                    width: '100%',
                    marginBottom: 8
                  }}>
                    <View key={i}
                      style={{
                        width: 28.6,
                        height: 29,
                        shadowOffset: { width: 3, height: 5},
                        shadowOpacity: .2,
                        shadowColor: COLOR_SHADOW,
                        shadowRadius: 10,
                        backgroundColor: COLOR_SHELL,
                        marginRight: 12.8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 8
                      }}>
                      {item[0] !== null ? (  
                        <Text style={{
                          fontSize: 12,
                          fontWeight: '600',
                          letterSpacing: -.4
                        }}>
                          {item[0]}
                        </Text>
                      ) : null}
                    </View>
                    <View key={i}
                      style={{
                        width: 28.6,
                        height: 29,
                        shadowOffset: { width: 3, height: 5},
                        shadowOpacity: .2,
                        shadowColor: COLOR_SHADOW,
                        shadowRadius: 10,
                        backgroundColor: COLOR_SHELL,
                        marginRight: 12.8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 8
                      }}>
                      {item[1] !== null ? (  
                        <Text style={{
                          fontSize: 12,
                          fontWeight: '600',
                          letterSpacing: -.4
                        }}>
                          {item[1]}
                        </Text>
                      ) : null}
                    </View>
                    <View key={i}
                      style={{
                        width: 28.6,
                        height: 29,
                        shadowOffset: { width: 3, height: 5},
                        shadowOpacity: .2,
                        shadowColor: COLOR_SHADOW,
                        shadowRadius: 10,
                        backgroundColor: COLOR_SHELL,
                        marginRight: 12.8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 8
                      }}>
                      {item[2] !== null ? (  
                        <Text style={{
                          fontSize: 12,
                          fontWeight: '600',
                          letterSpacing: -.4
                        }}>
                          {item[2]}
                        </Text>
                      ) : null}
                    </View>
                    <View key={i}
                      style={{
                        width: 28.6,
                        height: 29,
                        shadowOffset: { width: 3, height: 5},
                        shadowOpacity: .2,
                        shadowColor: COLOR_SHADOW,
                        shadowRadius: 10,
                        backgroundColor: COLOR_SHELL,
                        marginRight: 12.8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 8
                      }}>
                      {item[3] !== null ? (  
                        <Text style={{
                          fontSize: 12,
                          fontWeight: '600',
                          letterSpacing: -.4
                        }}>
                          {item[3]}
                        </Text>
                      ) : null}
                    </View>
                    <View key={i}
                      style={{
                        width: 28.6,
                        height: 29,
                        shadowOffset: { width: 3, height: 5},
                        shadowOpacity: .2,
                        shadowColor: COLOR_SHADOW,
                        shadowRadius: 10,
                        backgroundColor: COLOR_SHELL,
                        marginRight: 12.8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 8
                      }}>
                      {item[4] !== null ? (  
                        <Text style={{
                          fontSize: 12,
                          fontWeight: '600',
                          letterSpacing: -.4
                        }}>
                          {item[4]}
                        </Text>
                      ) : null}
                    </View>
                    <View key={i}
                      style={{
                        width: 28.6,
                        height: 29,
                        shadowOffset: { width: 3, height: 5},
                        shadowOpacity: .2,
                        shadowColor: COLOR_SHADOW,
                        shadowRadius: 10,
                        backgroundColor:  item[5] === 20 ? COLOR_PURPLE : COLOR_SHELL,
                        marginRight: 12.8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 8
                      }}>
                      {item[5] !== null ? (  
                        <Text style={{
                          fontSize: 12,
                          fontWeight: '600',
                          letterSpacing: -.4,
                          color: item[5] === 20 ? COLOR_WHITE : COLOR_BLACK
                        }}>
                          {item[5]}
                        </Text>
                      ) : null}
                    </View>
                    <View key={i}
                      style={{
                        width: 28.6,
                        height: 29,
                        shadowOffset: { width: 1, height: 2},
                        shadowOpacity: .1,
                        shadowColor: COLOR_SHADOW,
                        shadowRadius: 10,
                        backgroundColor: COLOR_SHELL,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 8
                      }}>
                      {item[6] !== null ? (  
                        <Text style={{
                          fontSize: 12,
                          fontWeight: '600',
                          letterSpacing: -.4
                        }}>
                          {item[6]}
                        </Text>
                      ) : null}
                    </View>
                  </View>
                ))}
              </View>
              <TouchableOpacity
                style={{
                  paddingVertical: 12,
                  backgroundColor: COLOR_PURPLE,
                  borderRadius: 20,
                  marginHorizontal: 62,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 40,
                  marginBottom: 20
                }}
                // onPress={navigation.navigate('Record')}
                onPress={onRecord === false ? this.onRecord : this.onKeyword}
              >
                <Text style={{
                  fontSize: 16,
                  letterSpacing: -.54,
                  color: COLOR_WHITE,
                  paddingHorizontal: 12
                }}>
                  {onRecord ? (
                    '오늘의 키워드 확인하기'
                  ) : '오늘의 하루 기록하기'}
                </Text>
              </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: 'center',
    width: width,
    height: height
  }
});

export default HomeScreen;
