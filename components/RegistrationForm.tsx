import React from 'react';
import validator from "@rjsf/validator-ajv6";
import { withTheme } from '@rjsf/core';
import { registrationFormSchema } from '../forms/registration-form/registrationFormSchema';
import { rjsfDaisyUiTheme } from '../forms/rjsf-daisyui-theme/rjsfDaisyUiTheme';
import { registrationFormUiSchema } from '../forms/registration-form/registrationFormUiSchema';

const ThemedForm = withTheme(rjsfDaisyUiTheme); 
const RegistrationForm = () => {
    return (
    <div className='max-w-2xl mx-auto card'>
        <div className='card-body'>
            <ThemedForm schema={registrationFormSchema} uiSchema={registrationFormUiSchema} validator={validator} />
        </div>
    </div>
    )
}
export default RegistrationForm;
