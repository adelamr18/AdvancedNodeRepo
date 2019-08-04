import React from 'react'

function SurveyField({input,label}) {
    console.log({...input})
    return (
        <div>
            <label>{label}</label>
            <input {...input} />
        </div>
    )
}

export default SurveyField
