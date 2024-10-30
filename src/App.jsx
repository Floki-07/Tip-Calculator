// App.js
import { useState, useEffect } from 'react';
import Bill from './components/Bill';
import Mytip from './components/Mytip';
import FriendTip from './components/FriendTip';
import Reset from './components/Reset';
import Display from './components/Display';

function App() {
  const [bill, setBill] = useState(null);
  const [rating, setMyrating] = useState(0);
  const [friendrating, setFriendrating] = useState(0);
  const [totalbill, setTotalbill] = useState(0);
  const [tip, settip] = useState(0);

  const reset = () => {
    setBill(null);
    setMyrating(10);
    setFriendrating(10);
    setTotalbill(0);
    settip(0);
    console.log('Reset called'); // Debugging log
  };
  const handleMyRatingChange = (rating) => {
    setMyrating(rating);
  };
  const handleFriendRatingChange = (frating) => {
    setFriendrating(frating);
  };
  useEffect(() => {
    if (bill !== null && rating !== 0 && friendrating !== 0) {
      const tip = Math.round((parseInt(rating) + parseInt(friendrating)) / 2);
      settip(tip);
      const totalBill = parseInt(bill) + (parseInt(bill) * tip) / 100;
      setTotalbill(totalBill);
    }
  }, [bill, rating, friendrating]);

  return (
    <>
      <Bill bill={bill} onchangebill={setBill} />
      <Mytip rating={rating} handlerating={handleMyRatingChange} />
      <FriendTip frating={friendrating} handlefrating={handleFriendRatingChange} />

      {totalbill !== 0 && <Display totalBill={totalbill} tip={tip} />}
      
      <Reset handlereset={reset} />
    </>
  );
}

export default App;
