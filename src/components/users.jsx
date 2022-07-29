import React, { useState } from 'react';
import api from '../api';

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    const renderPhrase = (number) => {
        if (number > 1) {
            return 'guys';
        } else {
            return 'and only';
        }
    };
    return (
        <>
            <h2>
                {' '}
                <span
                    className={
                        'badge bg-' + (users.length > 0 ? 'primary' : 'danger')
                    }
                >
                    {users.length > 0
                        ? `${users.length} ${renderPhrase(
                              users.length
                          )} hang out with you today`
                        : "You'll be alone toady"}
                </span>
            </h2>
            {users.length > 0 && (
                <table class='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Qualities</th>
                            <th scope='col'>Occupation</th>
                            <th scope='col'>Meetings</th>
                            <th scope='col'>Grade</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>
                                    {user.qualities.map((item) => (
                                        <span
                                            className={
                                                'badge m-1 bg-' + item.color
                                            }
                                            key={item._id}
                                        >
                                            {item.name}
                                        </span>
                                    ))}
                                </td>
                                <td>{user.profession.name}</td>
                                <td>{user.completedMeetings}</td>
                                <td>{user.rate}</td>
                                <td>
                                    <button
                                        className={'btn btn-danger'}
                                        onClick={() => handleDelete(user._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};
export default Users;
