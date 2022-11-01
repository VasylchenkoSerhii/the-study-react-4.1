import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';

const shema = yup.object().shape({
    name: yup.string()
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/ , 'Name may contain only letters, apostrophe, dash and spaces')
        .required("name is required"),
    number: yup.string()
        .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/ , 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +')
        .required("name is required"),
});

export default function FormContacts({addContact}) {
      const initialValues = {
        name: "",
        number: "",
    };
    
    const handleSubmit = (values, {resetForm}) => {
        addContact(values)
        resetForm()
    };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={shema}
        >
            <Form>
                <label>
                    Name
                    <Field type="text" name="name" />
                    <ErrorMessage component="div" name="name" />
                </label>
                <label>
                    Number
                    <Field type="tel" name="number" />
                    <ErrorMessage component="div" name="number" />
                </label>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};
