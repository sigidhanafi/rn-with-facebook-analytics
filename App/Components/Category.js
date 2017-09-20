import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { AppEventsLogger, AppEvents } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux'

class Category extends React.Component {
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              AppEventsLogger.logEvent('product', {'name': 'product 1'})
              Actions.product()
            }}
            style={styles.button}
          >
            <Text style={styles.white}>Product 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              AppEventsLogger.logEvent('product', {'name': 'product 1'})
              Actions.product()
            }}
            style={styles.button}
          >
          <Text style={styles.white}>Product 2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              AppEventsLogger.logEvent('product', {'name': 'product 3'})
              Actions.product()
            }}
            style={styles.button}
          >
            <Text style={styles.white}>Product 3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              AppEventsLogger.logEvent('product', {'name': 'product 4'})
              Actions.product()
            }}
            style={styles.button}
          >
          <Text style={styles.white}>Product 4</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              AppEventsLogger.logEvent('product', {'name': 'product 5'})
              Actions.product()
            }}
            style={styles.button}
          >
            <Text style={styles.white}>Product 5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              AppEventsLogger.logEvent('product', {'name': 'product 6'})
              Actions.product()
            }}
            style={styles.button}
          >
          <Text style={styles.white}>Product 6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              AppEventsLogger.logEvent('product', {'name': 'product 7'})
              Actions.product()
            }}
            style={styles.button}
          >
            <Text style={styles.white}>Product 7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              AppEventsLogger.logEvent('product', {'name': 'product 8'})
              Actions.product()
            }}
            style={styles.button}
          >
          <Text style={styles.white}>Product 8</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              AppEventsLogger.logEvent('product', {'name': 'product 9'})
              Actions.product()
            }}
            style={styles.button}
          >
            <Text style={styles.white}>Product 9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              AppEventsLogger.logEvent('product', {'name': 'product 10'})
              Actions.product()
            }}
            style={styles.button}
          >
          <Text style={styles.white}>Product 10</Text>
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

export default Category
