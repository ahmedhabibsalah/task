
const json={
    completedHtml: "<h1>your\nanswers are submitted successfully</h1>",

    title: "SPA for financial solutions",
    description: "Answer a questionnaire and a business plan will be generated",
        pages: [
     {
      name: "page1",
      elements: [
       {
        type: "radiogroup",
        name: "question1",
        title: "Is your business model B2C or B2B or both?",
        isRequired: true,
        choices: [
         {
          value: "item1",
          text: "B2C"
         },
         {
          value: "item2",
          text: "B2B"
         },
         {
          value: "item3",
          text: "both"
         }
        ]
       },
       {
        type: "radiogroup",
        name: "question2",
        visibleIf: "{question1} = 'item2' or {question1} = 'item3'",
        title: "Do you target all age brackets?",
        isRequired: true,
        choices: [
         {
          value: "item1",
          text: "Yes"
         },
         {
          value: "item2",
          text: "No"
         }
        ]
       },
       {
        type: "radiogroup",
        name: "question3",
        visibleIf: "{question1} = 'item1' or {question1} = 'item3'",
        title: "Do you target all industries?",
        isRequired: true,
        choices: [
         {
          value: "item1",
          text: "Yes"
         },
         {
          value: "item2",
          text: "No"
         }
        ]
       }
      ],
      title: "SPA for financial solutions",
      description: "Answer a questionnaire and a business plan will be generated"
     },
     {
      name: "page2",
      elements: [
       {
        type: "radiogroup",
        name: "question4",
        title: "Did you have an investment?",
        isRequired: true,
        choices: [
         {
          value: "item1",
          text: "Yes"
         },
         {
          value: "item2",
          text: "NO"
         }
        ]
       },
       {
        type: "text",
        name: "question5",
        visibleIf: "{question4} = 'item1'",
        isRequired: true,
        inputType: "number",
        min: "0"
       }
      ],
      title: "SPA for financial solutions",
      description: "Answer a questionnaire and a business plan will be generated"
     }
    ],
    showProgressBar: "bottom",
    progressBarType: "requiredQuestions",
    completeText: "Submit"
   }
   export default json;