import React from 'react'
import ReactDOM from 'react-dom'
import './sass/main.scss'
import Router from './routes/Routes'
import { ChakraProvider } from '@chakra-ui/react'
import 'react-quill/dist/quill.snow.css'
import { Provider } from 'react-redux'
import { store } from './store/store'

const rootContainer = document.getElementById('root')

const app = (
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
)

ReactDOM.render(app, rootContainer)
