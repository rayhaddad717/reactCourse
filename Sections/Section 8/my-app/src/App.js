import './App.css';
import IconList from './IconList';
import Lottery from './Lottery';
import ScoreKeeper from './ScoreKeeper';

function App() {
  return (
    <div className="App">
      <ScoreKeeper />
      <IconList />
      <Lottery title="mini daily" numBalls={4} maxNum={10} />
      <Lottery title="Loto" numBalls={6} maxNum={41} />
    </div>
  );
}

export default App;
