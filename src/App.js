/* eslint-disable */

import { Component } from 'react';

// EXAMPLE 3

class Input extends Component {
  render() {
    return <input value={this.props.value} onChange={this.props.onChange} />;
  }
}
class App extends Component {
  state = { name: '', surname: '' };

  updateName = (event) => this.onChangeInput('name', event.target.value);

  updateSurname = (event) => this.onChangeInput('surname', event.target.value);

  onChangeInput(prop, value) {
    this.setState({ [prop]: value });
  }

  render() {
    return (
      <div>
        <span>
          Nombre completo: {`${this.state.name} ${this.state.surname}`}
        </span>

        <br />

        <Input
          value={this.state.name}
          onChange={this.updateName}
          // onChange={(event) => this.onChangeInput('name', event.target.value)}
        />
        <Input
          value={this.state.surname}
          onChange={this.updateSurname}
          // onChange={(event) =>
          //   this.onChangeInput('surname', event.target.value)
          // }
        />
      </div>
    );
  }
}

export default App;

// EXAMPLE 2

// class Button extends Component {
//   state = {};

//   constructor(props) {
//     super(props);
//     console.log('constructor', props);
//   }

//   componentDidMount() {
//     console.log('componentDidMount');
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('componentDidUpdate', prevProps, prevState);
//   }

//   componentWillUnmount() {
//     console.log('componentWillUnmount', this.props, this.state);
//   }

//   render() {
//     console.log('ejecutando render button');
//     return (
//       <button onClick={() => this.setState({ propButton: 1 })}> Enviar </button>
//     );
//   }
// }

// class App extends Component {
//   state = { valor: 3 };

//   render() {
//     console.log(this.state);
//     return (
//       <div>
//         <p>Hola Mundo</p>
//         {this.state.valor === 3 ? <Button valorButton="feliz" /> : null}
//         <button
//           className={`${this.state.valor}`}
//           onClick={() => this.setState({ valor: 2 })}
//         >
//           Enviar en app
//         </button>
//       </div>
//     );
//   }
// }

// EXAMPLE 1

// import Button from './button';

// const arr = ['item1', 'item2', 'item3'];

// const App = () => {
//   const myVar = false;

//   if (myVar) {
//     return <p> Mi variable es true</p>;
//   }

//   return (
//     <div>
//       <h1 onClick={(e) => console.log('click', e)}>Hola mundo</h1>
//       {arr.map((el, index) => (
//         <p key={index}> {el} </p>
//       ))}
//       <Button onClick={() => console.log('clickeado')}>Enviar</Button>
//     </div>
//   );
// };
