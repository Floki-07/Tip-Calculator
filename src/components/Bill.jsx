import React from 'react'

const Bill = ({bill,onchangebill}) => {
  return (
    <div>
        <label htmlFor="bill">What the total cost  :</label>
        <input type="text" id='bill'
        placeholder='Enter the cost'
        value={bill}
        onChange={(e)=>(onchangebill(e.target.value))}
        />
    </div>
  )
}

export default Bill