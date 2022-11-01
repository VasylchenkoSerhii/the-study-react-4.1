import React from 'react';

export default function ContactsList({ contacts, removeContact }) {
    const markup = contacts.map(({ id, name, number }) => (
        <li key={id}>
            <p>
                {name}: {number}
                <button type="button" onClick={() => removeContact(id)}>
                    Clear
                </button>
            </p>
        </li>));
    return (
        <ul>
            {markup}
        </ul>
    );
};
