import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { AppEventsLogger, AppEvents } from 'react-native-fbsdk';

class Product extends React.Component {
  constructor (props) {
    super(props)
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
            iPhone x - Rp 13.000.000
          </Text>
          <Text style={styles.welcome}>
            new iPhone product, amazing feature, low budget
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              AppEventsLogger.logEvent('checkout', {'name': 'product 1', 'qty': '1'})
            }}
            style={styles.button}
          >
            <Text style={styles.white}>Beli Sekarang</Text>
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
    marginLeft: 20,
    marginRight: 20,
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
    alignItems: 'center',
    backgroundColor: '#365899',
    padding: 20,
    margin: 10
  },
  white: {
    color: '#FFFFFF'
  }
});

export default Product
