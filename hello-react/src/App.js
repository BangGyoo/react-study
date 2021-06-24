import React, {Component} from 'react';
import './App.css';
import MyName from './MyName';
import Counter from './Counter';
import PhoneForm from './PhoneForm';

class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }
  render() {
    return (
      <div>
        <MyName />
        <Counter />
        <PhoneForm onCreate={this.handleCreate} />
      </div>
    );
  }
}


export default App;
