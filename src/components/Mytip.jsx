import React from 'react'

const Mytip = ({rating,handlerating}) => {
    return (
        <div>
            <label htmlFor="tip">How much were you satisfied</label>
            <select id="tip" value={rating} onChange={e=>(handlerating(e.target.value))}>

                <option value="10">10 - Very Satisfied</option>
                <option value="8">8 - Satisfied</option>
                <option value="6">6 - Neutral</option>
                <option value="4">4 - Dissatisfied</option>
                <option value="2">2 - Very Dissatisfied</option>
                <option value="0">0 - Not Satisfied</option>
            </select>
        </div>
    )
}

export default Mytip