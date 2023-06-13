import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'
import { Link } from 'react-router-dom'

const FIELDS = [
    {label: "Survey Title", name: "title"},
    {label: "Subject Line", name: "subject"},
    {label: "Email Body", name: "body"},
    {label: "Recipient List", name: "emails"}
]

class SurveyForm extends Component {

    renderFields() {
        return (
            <div>
                {FIELDS.map((({label, name}, i) => (
                    <Field key={name} label={label} type="text" name={name} component={SurveyField} />
                )))}
            </div>
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Submit
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {}
    
    FIELDS.forEach(({ name }) => {
        if (!values[name]) {
            errors[name] = 'you must provide a ' + name
        }
    })

    return errors
}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm)