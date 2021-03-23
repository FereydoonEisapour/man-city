import { Component } from 'react';
import FormField from '../Ui/FormFileld'
import { validate } from '../Ui/Misc'
class SignIn extends Component {
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
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                },
                validation: {
                    required: true,
                    password: true
                },
                valid: false,
                validationMessage: ''
            }
        }

    }
    updateForm(element) {
        const newFormData = { ...this.state.formdata }
        const newElement = { ...newFormData[element.id] }

        newElement.value = element.event.target.value
        let validData = validate(newElement)

        newElement.valid = validData[0]
        newElement.validationMessage = validData[1]

        newFormData[element.id] = newElement

        this.setState({
            formdata: newFormData,
            formError: false
        })

    }
    submitForm(event) {
        event.preventDefault()

    }


    render() {
        return (
            <div className="container">
                <div className="signin_wrapper" style={{ margin: '100px' }}>
                    <form onSubmit={(event) => this.submitForm(event)}>
                        <h2>Please log in</h2>
                        <FormField
                            id={"email"}
                            formdata={this.state.formdata.email}
                            change={(element) => this.updateForm(element)}
                        />
                        <FormField
                            id={"password"}
                            formdata={this.state.formdata.password}
                            change={(element) => this.updateForm(element)}
                        />
                        <button onClick={(event) => this.submitForm(event)}>Log in</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn;