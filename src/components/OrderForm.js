import React from 'react';
import { Field, reduxForm } from 'redux-form';


const OrderForm = props => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <div className="form-group">
            <form className=" form-order" onSubmit={handleSubmit}>
                <div>
                    <Field
                        className="input"
                        name="name"
                        component="input"
                        type="text"
                        placeholder="NAME"
                    />
                </div>
                <div>
                    <Field
                        className="input"
                        name="surname"
                        component="input"
                        type="text"
                        placeholder="SURNAME"
                    />
                </div>
                <div>
                    <Field
                        className="input"
                        name="address"
                        component="input"
                        type="text"
                        placeholder="ADDRESS"
                    />
                </div>
                <div>
                    <Field
                        className="input"
                        name="number"
                        component="input"
                        type="text"
                        placeholder="NUMBER"
                    />
                </div>

                <div>
                    <button  className="waves-effect waves-light btn btn-order " type="submit" disabled={pristine || submitting}>ORDER</button>
                </div>
            </form>
        </div>

    );
};

export default reduxForm({
    form: 'simple',
})(OrderForm);
