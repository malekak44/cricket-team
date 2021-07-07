import { useEffect, useState } from 'react';
import './App.css';
import data from './data/data.json';
import Header from './components/Header/Header';
import Player from './components/Player/Player';
import Cart from './components/Cart/Cart';

function App() {
  const [players, setPlayers] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    setPlayers(data);
  }, [])

  const handleAddClick = (player) => {
    const newCart = [...carts, player];
    setCarts(newCart);
  }

  return (
    <div>
      <Header></Header>
      <Cart carts={carts}></Cart>
      <div className="players-container">
        {
          players.map(playerData => <Player player={playerData} handleAddClick={handleAddClick} key={playerData.id}></Player>)
        }
      </div>
    </div>
  );
}

export default App;
