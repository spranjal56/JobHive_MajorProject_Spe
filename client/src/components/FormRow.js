import React from 'react'

//props
const FormRow = ({type , name , value , handleChange,labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      {/* Consider the name a required attribute (even though it's not). If an
           input has no name specified, or name is empty, the input's value is
           not submitted with the form! */}
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
}

export default FormRow