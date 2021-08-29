import React from 'react';
import './survey.css'
import 'survey-react/survey.css';
import * as Survey from "survey-react";
import Json from "../surveys/questionnaire"

const SurveyType = () => {
    return (
        <Survey.Survey
         onComplete= {data=>console.log(data.valueHash)}
         json={Json}
        />
    )
}

export default SurveyType
