import React, { useState } from 'react'

function NameInput() {
    const [firstName, setName] =  useState('');
    const [firstText, setFirstName] = useState('');
    const [secondText, setSecondName] = useState('');
    const [flag, setFlag] = useState(false)
    function displayByChange(e){
        setFirstName(`Hi ${e.target.value} How Are You? `);
        setName(e.target.value);
    }
    function displayByClick(){
        setSecondName(`Hay ${firstName} Keep Going`);
        setFlag(true);
    }
  return (
    <div>
        <div>
            <label htmlFor="name"></label>
            <input onChange={displayByChange} type="text" />
            <button onClick={displayByClick}>Motivate</button>
        </div>
        <div>
            <p>{flag? secondText:firstText }</p>
        </div>
    </div>
  )
}

export default NameInput
