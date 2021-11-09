import './App.css';
import Positioner from './components/Positioner';

function App() {
  return (
    <Positioner>
      {(style) =>
        <div style={{ ...style, backgroundColor: 'red', width: 50, height: 50 }}></div>}
    </Positioner>
  );
}

export default App;
