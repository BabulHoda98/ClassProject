import React, { useState } from 'react'
import { Form, useFormik } from 'formik'
import { FormSchema } from './Yupone'

function Formikone() {

    let [data, setdata] = useState({})
    let formikValues = { name: '', email: '',age:'',pass:'',cpass:'' }

    let { values, handleChange, handleSubmit, errors, handleBlur,touched} = useFormik({
        initialValues: formikValues,
        validationSchema: FormSchema,
        onSubmit: (values) => {
            setdata(values)
            console.log(values);
        }
    })
    // const formikInitialValues = {
    // name: 'Hoda', email: "hoda@gamil.com"
    // }
    // let formik = useFormik ({
    //     initialValues: formikInitialValues,
    //     onSubmit:(values)=>{
    //         console.log(values);
    //         console.log(values.name,values.email)
    //     }
    // })
    // console.log(formik);

    return (
        <div>
            {/* <form onSubmit={formik.handleSubmit} > */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor=''>UserName</label>
                    <input
                        type='text'
                        name='name'
                        id=''
                        // value={formik.values.name}
                        value={values.name}
                        // onChange={formik.handleChange}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.email && touched.name ?<p style={{ color: 'red' }}>{errors.name}</p> : ''
                    }
                </div>
                <br /><br />
                <div>
                    <label htmlFor=''>UserEmailID</label>
                    <input
                        type='text'
                        name='email'
                        id=''
                        // value={formik.values.email}
                        value={values.email}
                        // onChange={formik.handleChange}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.email && touched.email ?<p style={{ color: 'red' }}>{errors.email}</p> : ''
                    }

                    <br />
                    <br />
                </div>
                <div>
                    <label htmlFor=''>User AGE</label>
                    <input
                        type='number'
                        name='age'
                        id=''
                        value={values.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.age && touched.age ?<p style={{ color: 'red' }}>{errors.age}</p> : ''
                    }
                    <br />
                    <br />
                </div>
                <div>
                    <label htmlFor=''>User Password</label>
                    <input
                        type='text'
                        name='pass'
                        id=''
                        value={values.pass}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.pass && touched.pass ?<p style={{ color: 'red' }}>{errors.pass}</p> : ''
                    }
                    <br />
                    <br />
                </div>
                <div>
                    <label htmlFor=''>User Confirm Password</label>
                    <input
                        type='text'
                        name='cpass'
                        id=''
                        value={values.cpass}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.cpass && touched.cpass ?<p style={{ color: 'red' }}>{errors.cpass}</p> : ''
                    }
                    <br />
                    <br />
                </div>
                <input type='submit' value="Login" />
            </form>
        </div>
    )
}

export default Formikone
