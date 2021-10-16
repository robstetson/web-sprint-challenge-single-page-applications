import React from 'react';

function Form(props) {
    const {
    values,
    submit,
    change,
    disabled,
    errors
} = props

const onSubmit = event => {
    event.preventDefault()
    submit()
}

const onChange = event => {
    const { name, value, checked, type } = event.target
    const usedValues = type === 'checkbox' ? checked : value;
    change(name,usedValues); 
}


return (

    <form id='pizza-form' onSubmit={onSubmit}>
<div className='form-submition'>
<h2>Order your pizza here!</h2> 


<div classname='errors'>
<div>{errors.name}</div>
<div>{errors.size}</div>
<div>{errors.sauce}</div>
<div>{errors.instructions}</div>
</div>
</div>

<div className='form-inputs'>
<label>Name
    <input
    id='name-input'
    value={values.name}
    onChange={onChange}
    name='name'
    type='text'
    />
</label>

<label>Special Instructions
    <input
    id='special-text'
    value={values.instructions}
    onChange={onChange}
    name='instructions'
    type='text'
    />
</label>

<label>Size
          <select
          id='size-dropdown'
            onChange={onChange}
            value={values.size}
            name='size'
          >
            <option value=''>- Select a Size -</option>
            <option value='Small'>Small</option>
            <option value='Medium'>Medium</option>
            <option value='Large'>Large</option>
            <option value='XL'>XL</option>
          </select>
        </label>


<label>House Sauce
    <input
    type='radio'
    name='sauce'
    value='Tomato'
    onChange={onChange}
    checked={values.sauce === 'Tomato'}
    />
</label>
<label>Garlic Parm
    <input
    type='radio'
    onChange={onChange}
    name='sauce'
    value='Garlic'
    checked={values.sauce === 'Garlic'}
    />
</label>

<label>BBQ
    <input
    type='radio'
    onChange={onChange}
    name='sauce'
    value='BBQ'
    checked={values.sauce === 'BBQ'}
    />
</label>

<label>Spinach Alfredo
    <input
    type='radio'
    onChange={onChange}
    name='sauce'
    value='Alfredo'
    checked={values.sauce === 'Alfredo'}
    />
</label>

<label>Pepporoni
    <input
    type='checkbox'
    name='pepporoni'
    onChange={onChange}
    checked={values.pepporoni}
    />
</label>

<label>Onion
    <input
    type='checkbox'
    name='onion'
    onChange={onChange}
    checked={values.onion}
    />
</label>

<label>Bacon
    <input
    type='checkbox'
    name='bacon'
    onChange={onChange}
    checked={values.bacon}
    />
</label>

<label>Extra Cheese
    <input
    type='checkbox'
    name='extraCheese'
    onChange={onChange}
    checked={values.extraCheese}
    />
</label>
<button id='order-button' disabled={disabled}> Submit your order here</button>


</div>
</form>
)


}

export default Form