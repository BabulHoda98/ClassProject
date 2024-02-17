import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'

function Formiktwo() {
    let [data, setdata] = useState({})

    const formikCompoValidation = yup.object({
        name: yup.string().required("Name is Blank"),
        age: yup.number().required("Age is Must"),
        pass: yup.string().required("Password is Required"),
        gender:yup.string().required("Select Gender"),
        country:yup.string().required("Country is Blank"),
        comment:yup.string().max(),
    })

    return (
        <div>
            <Formik validationSchema={formikCompoValidation}
                initialValues={{ name: '', age: '', pass: '', gender: '', hobby: '', country: '', comment: '' }}
                onSubmit={(values) => {
                    console.log(values)
                    axios
                        .post('http://localhost:4000/mydata', data)
                        .then(response => console.log(response))
                    setdata(values);
                }}
            >
                <Form>
                    <div>
                        <label htmlFor={{ name: "Bus" }}>Full name:</label>
                        <Field
                            type='text'
                            name="name"
                        />
                    </div>

                    <div style={{ color: 'red' }}>
                        <ErrorMessage name='name' />
                    </div>
                    <br /> <br />

                    <div>
                        <label htmlFor={{ name: "age" }}>Age:</label>
                        <Field type='number' name="age" />
                    </div>
                        <div style={{ color: 'red' }}>
                            <ErrorMessage name='age' />
                        </div>
                    <br /><br />

                    <div>
                        <label htmlFor={{ name: "pass" }}>Password:</label>
                        <Field type='text' name="pass" />
                    </div>
                    <div style={{ color: 'red' }}>
                        <ErrorMessage name='pass' />
                    </div>
                    <br /><br />

                    <div>
                        <label htmlFor="">Gender:</label>
                        <label htmlFor="">Male:</label>
                        <Field type='radio' name="gender" value="Male" />&nbsp;&nbsp;&nbsp;&nbsp;
                        <label htmlFor="">Female:</label>
                        <Field type='radio' name="gender" value="Female" />
                    </div>
                    <div style={{ color: 'red' }}>
                        <ErrorMessage name='gender'/>
                    </div>
                    <br/><br/>
                    <div>
                        <label htmlFor=''>Hobbies:</label>
                        <label htmlFor=''>Writing</label>
                        <Field type='checkbox' name='hobby' value='Writing' />&nbsp;&nbsp;&nbsp;&nbsp;
                        <label htmlFor=''>Cooking</label>
                        <Field type='checkbox' name='hobby' value='Cooking' />&nbsp;&nbsp;&nbsp;&nbsp;
                        <label htmlFor=''>Swimming</label>
                        <Field type='checkbox' name='hobby' value='Swimming' />&nbsp;&nbsp;&nbsp;&nbsp;
                    </div><br />
                    <div>
                        <label htmlFor=''>County:</label>
                        <Field name="country" as='select' >
                            <option value="">Please Select Your Country</option>
                            <option value="Italy1">ITLAY1</option>
                            <option value="Italy2">ITLAY2</option>
                            <option value="Italy3">ITLAY3</option>
                            <option value="Italy4">ITLAY4</option>
                            <option value="Italy5">ITLAY5</option>
                        </Field>
                    </div>
                    <div style={{ color: 'red' }}>
                        <ErrorMessage name='country'/>
                    </div><br /><br />
                    <div>
                        <label htmlFor=''>Comments:</label>
                        <textarea name='' id='' cols='30' rows="5"></textarea>
                    </div>
                    {/* <div style={{ color: 'red' }}>
                        <ErrorMessage name='comment'/>
                    </div> */}
                    <br/>
                    <button type='submit'>Submit</button>
                    <h1>{JSON.stringify(data)}</h1>
                </Form>
            </Formik>
        </div>
    )
}

export default Formiktwo
