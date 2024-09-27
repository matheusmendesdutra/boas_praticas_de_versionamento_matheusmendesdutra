import React, { useState } from 'react';
import MemberList from './components/MemberList';
import AddMember from './components/AddMember';

function App() {
  const [members, setMembers] = useState([]);

  const addMember = (member) => {
    setMembers([...members, member]);
  };

  const removeMember = (name) => {
    setMembers(members.filter(member => member.name !== name));
  };

  return (
    <div>
      <h1>Bem-vindo à Academia!</h1>
      <AddMember addMember={addMember} />
      <MemberList members={members} removeMember={removeMember} />
    </div>
  );
}

import React, { useState } from 'react';

function AddMember({ addMember }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age) {  // Verifique se os campos não estão vazios
      addMember({ name, age: parseInt(age) });  // Converta idade para número
      setName('');
      setAge('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nome" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Idade" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
      />
      <button type="submit">Adicionar Membro</button>
    </form>
  );
}

import React from 'react';

function Member({ member, removeMember }) {
  return (
    <li style={{ margin: '10px 0' }}>
      {member.name} - {member.age} anos 
      <button onClick={() => removeMember(member.name)} style={{ marginLeft: '10px' }}>Remover</button>
    </li>
  );
}

export default Member;


