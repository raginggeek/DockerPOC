import React from 'react';

let User = ({id, name, age, title, project, handleClick}) => (
    <div>
        <strong>{name}</strong> is {age} years old, is a {title} working on {project} <button onClick={() => handleClick(id)}>remove user</button>
    </div>
);

export default User;