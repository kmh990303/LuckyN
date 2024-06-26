import './App.css'
import LuckyN from './LuckyN'
import { sum } from './utils'

const lessThan4 = (dice) => {
  return sum(dice) < 4;
}

function App() {

  return (
    <>
      <LuckyN winCheck={lessThan4} />
    </>
  );
}

export default App;
