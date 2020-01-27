import * as React from 'react';
import {useForm} from '../lib/useForm';


export const MyForm = () => {
    const logFieldValues = () => {
        console.log(values);
    }

    const [values, handleChange, handleSubmit] = useForm(logFieldValues);

    return (
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={values.name || ""}
          onChange={handleChange}
          name="name"
        />
        <label>Team</label>
        <input
          type="text"
          value={values.team || ""}
          onChange={handleChange}
          name="team"
        />
        <button type="submit">Save</button>
      </form>
    );
};
