import React, { useState } from "react";

const Settings = () => {

    const title = `Eso es el titulo`
    const [array, setArray] = useState(['Flavie', 'Pierre', 'Nicolas', 'Mathilde', 'Valerie', 'Christophe']);
    const [newUser, setNewUser] = useState('');

    const handleDelete = (perso, index) => {
        setArray(array.filter(perso => (index !== perso)))
        console.log(array);
    }

    const handleChange = (event) => {
        setNewUser(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        array.push(newUser)
        setNewUser('')
    }

    return (
        <div>
            <h1 className=" bg-pink-500 font-extrabold text-6xl">{title}</h1>
            <button className="bg-red-500 border-4">Click me</button>
            <ul>
                {array.length > 0 ? array.map((perso, index) => <li key={index}>{perso} <button onClick={() => handleDelete(index, perso)}>X</button> </li>) : <p>rien</p>}
            </ul>
            <form>
                <input placeholder="Input" type='text' value={newUser} onChange={handleChange}></input>
                <button onClick={handleSubmit}>Add</button>
            </form>
        </div >
    )
}

export default Settings;
