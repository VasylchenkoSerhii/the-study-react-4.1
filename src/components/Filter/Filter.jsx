import React from 'react';
import scss from './Filter.module.scss';

export default function Filter({onChange, filter}) {
    return (
        <label className={scss.filterWripper}>
            Find contacts by name
            <input className={scss.filterInput} type="text" name="filter" onChange={onChange} value={filter} />
        </label>
    );
};
