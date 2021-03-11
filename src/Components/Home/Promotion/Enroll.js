import { Component } from 'react'
import Fade from 'react-reveal/Fade'
import { validate } from '../../Ui/Misc';
import FormField from '../../Ui/FormFileld'


class Enroll extends Component {

    state = {
        formError: false,
        formSuccess: '',
        formdata: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage: ''
            }
        }

    }

    updateForm(element) {
        const newFormdata = { ...this.state.formdata }      // formdata
        const newElement = { ...newFormdata[element.id] }   // input

        newElement.value = element.event.target.value;      // 

        let validData = validate(newElement)                // [ bool , 'message']

        newElement.valid = validData[0];
        newElement.validationMessage = validData[1]

        newFormdata[element.id] = newElement;

        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }

    submitForm(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={(event) => this.submitForm(event)}>
                        <div className="enroll_title">
                            Enter your email
                        </div>
                        <div className="enroll_input">
                            <FormField
                                id={'email'}
                                formdata={this.state.formdata.email}
                                change={(element) => this.updateForm(element)}
                            />
                        </div>
                    </form>
                </div>
            </Fade>
        );
    }
}

export default Enroll;


// import Fade from 'react-reveal/Fade'
// import { validate } from '../../Ui/Misc';
// import FormField from '../../Ui/FormFileld'

// function Enroll() {
//     let state = {
//         formError: false,
//         formSuccess: '',
//         formdata: {
//             email: {
//                 element: 'input',
//                 value: '',
//                 config: {
//                     name: 'email_input',
//                     type: 'email',
//                     placeholder: 'Enter your email'
//                 },
//                 validation: {
//                     required: true,
//                     email: true
//                 },
//                 valid: false,
//                 validationMessage: ''
//             }
//         }
//     }
//     function formSubmit(event) {
//         event.preventDefault();
//     }
//     const updateForm = (element) => {
//         console.log(element);
//         const newFormData = { ...state.formdata }
//         const newElement = { ...newFormData[element.id] }

//         newElement.value = element.event.target.value;

//         let validData = validate(newElement)
//         newElement.valid = validData[0];
//         newElement.validationMessage = validData[1]

//         newFormData[element.id] = newElement;

//         state.formdata = newFormData
//         state.formError = false

//     }
//     return (
//         <Fade>
//             <div className=" enroll_wrapper">
//                 <form onSubmit={(event) => formSubmit(event)}>
//                     <div className=" enroll_title">
//                         Enter your email
//                     </div>
//                     <div className=" enroll_input">
//                         <FormField
//                             id="email"
//                             formdata={state.formdata.email}
//                             change={(element) => updateForm(element)}
//                         />
//                     </div>

//                 </form>
//             </div>
//         </Fade>
//     )
// }

// export default Enroll
