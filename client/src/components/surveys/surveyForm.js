import _ from "lodash"
import { Link } from "react-router-dom"
import React,{ Component } from "react" 
import { reduxForm, Field } from "redux-form"
import SurveyField from "./SurveyField"



const FIELDS=[
  {label:"Survey Title",name:"title"},
  {label:"Subject Line",name:"subjet"},
  {label:"Email Body",name:"body"},
  {label:"Recipient List",name:"emails"},
]


class SurveyForm extends Component{

  renderFields(){
  
      return _.map(FIELDS,({label,name})=>{
        return  (
          <Field key={name} component={SurveyField} type="text" label={label} name={name} />
        )
      })
    
  }

  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(values=>console.log(values))}>
          {this.renderFields()}
          <Link to="/survey" className="red btn-flat white-text">
          <i className="material-icons right">cancel</i>Cancel
          </Link>
          <button className="btn  red-text text-lighten-5 teal lighten-1 right" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    )

  }
}

export default reduxForm({
  form:"surveyForm"
})(SurveyForm)