/* eslint-disable */
// import './App.css';

import './main.css';

// const estilo2 = {
//   boxShadow: '0 5px 3px rgba(0,0,0, 0.8)'
// };

// const estilo = ({ bg = '#222' }) => ({
//   backgroundColor: bg,
//   color: '#fff',
//   padding: '10px 15px',
//   margin: '10px 15px'
// });

const Li = ({ state, children }) => {
  return (
    // style={{ ...estilo2, ...estilo({ bg: '#333' }) }}
    <li className="clase-li">
      {children} {state}
    </li>
  );
};

const App = () => {
  return (
    // style={estilo({ bg: '#750' })}
    <ul className="clase-lu">
      <Li state="feliz"> valor de li </Li>
    </ul>
  );
};

export default App;
