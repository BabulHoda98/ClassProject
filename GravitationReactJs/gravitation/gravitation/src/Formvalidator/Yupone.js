import *as Yup from 'yup'

export const FormSchema = Yup.object({
    name: Yup.string().min(3).max(10).required('Name is empty'),
    email: Yup.string().email().required('Email is Blank'),
    age: Yup.number().min(18, 'Minimum Age is must BE 18').max(59, 'Age is must be less than or equal to 59').required('Age is Must'),
    pass: Yup.string() 
        .required('Password is Required')
        .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/,
            'Enter Strong Password'),
    cpass: Yup.string()
        .required('Confirm Password is must')
        .oneOf([Yup.ref('pass'),null],'Password not matched')
})
