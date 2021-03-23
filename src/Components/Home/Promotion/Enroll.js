
import { Component } from 'react'
import Fade from 'react-reveal/Fade'
import { validate } from '../../Ui/Misc';
import FormField from '../../Ui/FormFileld'
import { firebasePromotions } from '../../../Firebase'

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
        const newFormdata = { ...this.state.formdata }
        const newElement = { ...newFormdata[element.id] }

        newElement.value = element.event.target.value;

        let validData = validate(newElement)

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
        let dataToSubmit = {};
        let formIsValid = true

        for (let key in this.state.formdata) {
            dataToSubmit[key] = this.state.formdata[key].value
            formIsValid = this.state.formdata[key].valid && formIsValid
        }
        if (formIsValid) {
            firebasePromotions.orderByChild('email').equalTo(dataToSubmit.email).once('value').then((snapshot) => {
                if (snapshot.val() === null) {
                    firebasePromotions.push(dataToSubmit)
                    this.resetFormSuccess(true);
                } else {
                    this.resetFormSuccess(false);
                }
            })

        } else {
            this.setState({
                formError: true
            })
        }
    }
    resetFormSuccess(type) {
        const newFormData = { ...this.state.formdata }

        for (let key in newFormData) {
            newFormData[key].value = '';
            newFormData[key].valid = false;
            newFormData[key].validationMessage = ''
        }
        this.setState({
            formError: false,
            formdata: newFormData,
            formSuccess: type ? 'Congratulations' : 'Already on the database'
        })
        this.sucssessMessage()
    }
    sucssessMessage() {
        setTimeout(() => {
            this.setState({
                formSuccess: ''
            })
        }, 2000);
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
                            {this.state.formError ?
                                <div className=" error_label">Something went wrong , try again</div>
                                : null
                            }
                            <div className=" success_label">{this.state.formSuccess}</div>
                            <button onClick={(event) => this.submitForm(event)}>Enroll</button>
                            <div className="enroll_discl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>

                    </form>
                </div>
            </Fade>
        );
    }
}

export default Enroll






// import { useState } from 'react';

// import Fade from 'react-reveal/Fade'
// import { validate } from '../../Ui/Misc';
// import FormField from '../../Ui/FormFileld'
// import {firebasePromotions} from '../../../Firebase'

// function Enroll () {
//     const [formError, setformError] = useState(false)
//     const [formSuccess, setformSuccess] = useState('') 
//   let  state = {
//         formError: formError,
//         formSuccess: formSuccess,
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
//     const [formData, setformData] = useState(state.formdata)


//   function  updateForm (element) {
//        // const newFormdata = { ...state.formdata }   
//           const newFormdata = { formData }   

//         const newElement =  newFormdata[element.id]   

//         newElement.value = element.event.target.value;      

//         let validData = validate(newElement)               

//         newElement.valid = validData[0];
//         newElement.validationMessage = validData[1]

//         newFormdata[element.id] = newElement;

//      //   this.setState({
//            // formError: false,
//           //  formdata: newFormdata
//       //  })

//         setformData(newFormdata)
//         setformError(false)

//     }
//     function sucssessMessage (){
//         setTimeout(() => {
//             // this.setState({
//             //     formSuccess:''
//             // })
//             setformSuccess('')
//         }, 2000);
//     }
//     function resetFormSuccess(type){
//      //   const newFormData={...state.formdata}
//   const newFormData={...formData}
//         for(let key in newFormData){
//             newFormData[key].value='';
//             newFormData[key].valid=false;
//             newFormData[key].validationMessage=''
//         }
//       //  this.setState({
//           //  formError:false,
//          //   formdata:newFormData,
//           //  formSuccess: type ? 'Congratulations' : 'Already on the database'
//       //  })
//         setformError(false)
//         setformData(newFormData)
//         setformSuccess(type ? 'Congratulations' : 'Already on the database')

//         sucssessMessage ()
//     }

//   function  submitForm (event) {
//         event.preventDefault();
//         let dataToSubmit={};
//         let formIsValid=true

//         for(let key in state.formdata){
//             dataToSubmit[key]=state.formdata[key].value
//             formIsValid=state.formdata[key].valid && formIsValid
//             console.log(formIsValid);
//         }
//         if(formIsValid){
//             firebasePromotions.orderByChild('email').equalTo(dataToSubmit.email).once('value').then((snapshot)=>{
//                if(snapshot.val()===null){
//                 firebasePromotions.push(dataToSubmit)
//                  resetFormSuccess(true);
//                }else{
//                    resetFormSuccess(false);
//                }
//             })

//         }else{
//             // this.setState({
//             //     formError:true
//             // })
//             setformError(false)
//         }
//     }


//         return (
//             <Fade>
//                 <div className="enroll_wrapper">
//                     <form onSubmit={(event) => submitForm(event)}>
//                         <div className="enroll_title">
//                             Enter your email
//                         </div>
//                         <div className="enroll_input">
//                             <FormField
//                                 id={'email'}
//                                 formdata={state.formdata.email}
//                                 change={(element) => updateForm(element)}
//                             />
//                             {state.formError?
//                             <div className=" error_label">Something went wrong , try again</div>
//                            :null
//                            }
//                            <div className=" success_label">{state.formSuccess}</div>
//                             <button onClick={(event) => submitForm(event)}>Enroll</button>
//                             <div className="enroll_discl">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                             </div>
//                         </div>

//                     </form>
//                 </div>
//             </Fade>
//         );
//     }


// export default Enroll


/////////////////////////////////
