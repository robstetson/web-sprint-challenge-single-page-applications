import * as yup from 'yup'

const formSchema = yup.object().shape({
name: yup
.string()
.trim()
.required('Must be a valid name')
.min(2, 'name must be at least 2 characters'),

size: yup
.string()
.oneOf(['Small', 'Medium','Large', 'XL'], 'Size is required'),

sauce: yup
.string()
.oneOf(['Tomato', 'Garlic','BBQ', 'Alfredo'], 'Sauce is required'),

instructions: yup.string(),
pepporoni: yup.boolean(),
onion: yup.boolean(),
bacon: yup.boolean(),
extraCheese: yup.boolean(),


})
export default formSchema