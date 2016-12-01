import React, { Component } from 'react'
import {render} from 'react-dom'


// Pages

import MyEditor from './editor';

class App extends Component {

  render(){
    return <MyEditor />
  }

}

render((
  <App />

), document.getElementById('app'))
