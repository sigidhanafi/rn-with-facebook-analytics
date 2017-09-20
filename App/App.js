import React from 'react'
import {
  Scene,
  Router
} from 'react-native-router-flux'

import Home from './Components/Home'
import Category from './Components/Category'
import Product from './Components/Product'

const App = () => (
  <Router>
    <Scene key='root'>
      <Scene key='home' component={Home} title='Home'/>
      <Scene key='category' component={Category} title='Category'/>
      <Scene key='product' component={Product} title='Product'/>
    </Scene>
  </Router>
)

export default App