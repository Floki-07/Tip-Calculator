import React from 'react'

const Display = ({ totalBill, tip }) => {
    const originalAmount = totalBill / (1 + tip / 100);
    return (
      <div className='box'>
        <h3>
          Total Bill: ₹{totalBill.toFixed(2)} ₹({originalAmount.toFixed(2)} + ₹{Math.round(totalBill - originalAmount.toFixed(2)    )})
        </h3>
      </div>
    );
  };
  

export default Display