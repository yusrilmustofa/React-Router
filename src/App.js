import React from 'react';
import Utama from './utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <div className="navbar navbar-expand-md bg-light navbar-dark fixed-top"> <hr />
      <Link to="/" className="judul">Beranda</Link>|
      <Link to="/tentangsaya">TentangSaya</Link> |
      <Link to="/karya">Galeri</Link> |
      <Link to="/kontak">HariBesar</Link> <hr />
      <Utama />
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
