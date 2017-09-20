import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import { AppEventsLogger, AppEvents } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux'

class Home extends React.Component {
  constructor (props) {
    super(props)
    AppEventsLogger.logEvent('home')
  }

  componentWillMount () {
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.welcome}>
            Home Page
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              AppEventsLogger.logEvent('category', {'name': 'kaos'})
              Actions.category()
            }}
            style={styles.button}
          >
            <Text style={styles.white}>Kaos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              AppEventsLogger.logEvent('category', {'name': 'kemeja'})
              Actions.category()
            }}
            style={styles.button}
          >
            <Text style={styles.white}>Kemeja</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              AppEventsLogger.logEvent('category', {'name': 'celana panjang'})
              Actions.category()
            }}
            style={styles.button}
          >
            <Text style={styles.white}>Celana Panjang</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              AppEventsLogger.logEvent('category', {'name': 'celana pendek'})
              Actions.category()
            }}
            style={styles.button}
          >
            <Text style={styles.white}>Celana Pendek</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              AppEventsLogger.logEvent('category', {'name': 'asesoris'})
              Actions.category()
            }}
            style={styles.button}
          >
            <Text style={styles.white}>Asesoris</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              AppEventsLogger.logEvent('category', {'name': 'lainnya', 'promo': 'no'})
              Actions.category()
            }}
            style={styles.button}
          >
            <Text style={styles.white}>Lainnya</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcomeContainer: {
    marginBottom: 100
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#365899',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 40,
    paddingBottom: 40,
    margin: 10
  },
  white: {
    color: '#FFFFFF'
  }
});

export default Home
