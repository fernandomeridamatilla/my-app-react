/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const Li = ({ children, estado, casa, edad }) => {
//   console.log(casa, edad);

//   return (
//     <li>
//       {children} estoy {estado}
//     </li>
//   );
// };

// const X = () => (
//   <ul>
//     <Li estado={'feliz'} casa={false} edad={24}>
//       Item 1
//     </Li>

//     <Li estado={'triste'} casa={true} edad={35}>
//       Item 2
//     </Li>
//     <Li estado={'emocionado'} casa={true} edad={35}>
//       Item 3
//     </Li>
//   </ul>
// );

// ReactDOM.render(<X />, document.getElementById('root'));
