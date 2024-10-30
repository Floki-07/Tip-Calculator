import React from 'react'

const FriendTip = ({frating,handlefrating}) => {
  return (
    <div>
          <label htmlFor="tip">How much was your Friend satisfied     :</label>
            <select id="tip" value={frating} onChange={e=>(handlefrating(e.target.value))}>
                <option value="10">10 - Very Satisfied</option>
                <option value="8">8 - Satisfied</option>
                <option value="6">6 - Neutral</option>
                <option value="4">4 - Dissatisfied</option>
                <option value="2">2 - Very Dissatisfied</option>
                <option value="0">0 - Not Satisfied</option>
                <option value="0">Rate!!</option>

            </select>

    </div>
  )
}

export default FriendTip