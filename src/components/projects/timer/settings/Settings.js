import React, { useState } from "react";

const Settings = () => {

    const title = `Eso es el titulo`
    const [clients, setClients] = useState([{ id: 1, nom: 'Flavie' }, { id: 2, nom: 'Pierre' }, { id: 3, nom: 'Nicolas' }, { id: 4, nom: 'Mathilde' }, { id: 5, nom: 'Valerie' }, { id: 6, nom: 'Christophe' }]);
    const [newUser, setNewUser] = useState('');

    const handleDelete = (id) => {
        console.log(id);
    }

    const handleChange = (event) => {
        setNewUser(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <h1 className=" bg-pink-500 font-extrabold text-6xl">{title}</h1>
            <button className="bg-red-500 border-4">Click me</button>
            <ul>
                {clients.length > 0 ? clients.map((client, index) => <li key={index}>{client.nom} <button onClick={() => handleDelete(client.id)}>X</button> </li>) : <p>rien</p>}
            </ul>
            <form>
                <input placeholder="Input" type='text' value={newUser} onChange={handleChange}></input>
                <button onClick={handleSubmit}>Add</button>
            </form>
        </div >
    )
}

export default Settings;
