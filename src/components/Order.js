import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Order extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: "",
    //         email: "",
    //         address: "",
    //
    //     };
    // }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <Field name="firstName" component="input" type="text"/>
                </div>
                <div>
                    <label>Last Name</label>
                    <Field name="lastName" component="input" type="text"/>
                </div>
                <div>
                    <label>Email</label>
                    <Field name="email" component="input" type="email"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

Order = reduxForm({ form: 'order'})(Order);

export default Order;