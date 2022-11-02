import React from 'react';
import scss from './ContactsList.module.scss';

export default function ContactsList({ contacts, removeContact }) {
    const markup = contacts.map(({ id, name, number }) => (
        <li className={scss.contactsList__item} key={id}>
            <p>
                {name}: {number}
                <button className={scss.contactsList__btn} type="button" onClick={() => removeContact(id)}>
                    Clear
                </button>
            </p>
        </li>));
    return (
        <ul className={scss.contactsList}>
            {markup}
        </ul>
    );
};
