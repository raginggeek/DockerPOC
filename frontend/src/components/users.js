import React from 'react';
import User from './user';

let Users = ({users, handleClick}) => (
    <section>
        <h2>Our users</h2>
        <section>
            {users.map(user => <User key={user.id}
                                     {...user}
                                     handleClick={handleClick} />)}
        </section>
    </section>
);

export default Users;