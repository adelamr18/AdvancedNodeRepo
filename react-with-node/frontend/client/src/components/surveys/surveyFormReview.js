import React from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';
import _ from "lodash";
import * as actions from '../../actions';


 const SurveyFormReview = ({onCancel,formValues,submitSurvey})=>{
const reviewFields = _.map(formFields,({name,label})=>{
return (
    <div key={name}>
        <label>{label}</label>
        <div>
        {formValues[name]}
        </div>
    </div>
)
})
//putting an arrow function fe hetet el onSubmit onClick means dont do
//anything le 7ad ma el user yedos 3le el button otherwise el function hayet3melha
//submit automatically
    return (
        <div>
           <h5>Confirm your entries</h5> 
         {reviewFields}
           <button className="yellow darken-3 white-text btn-flat"
           onClick={onCancel}
           >Back</button>

           <button onClick={()=> submitSurvey(formValues)}
            className="green   white-text btn-flat right">
               Send Survey
               <i className="material-icons right">email</i>
           </button>
        </div>
    )
 }
function mapStateToProps(state){
console.log(state)
return {
formValues:state.form.surveyForm.values
};
}

export default connect(mapStateToProps,actions) (SurveyFormReview);