import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Provider } from 'react-redux'
import TodoNavigation from './src/navigations/TodoNavigation'
import store from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TodoNavigation />
      </NavigationContainer>
    </Provider>
  )
}


export default App