import React from 'react';

const CheckoutForm = ({ formValues, handleInputChange, handleSubmit, errorFirstName, errorLastName, payment }) => {

    return (
        <form onSubmit={handleSubmit}>
            <div className="container mt-3">
                <div className="mb-3 mt-3">
                    <label htmlFor="fname">First Name:</label>
                    <input name="firstName" type="text" className="form-control" placeholder="First Name" value={formValues.firstName} onChange={handleInputChange} required />
                    {errorFirstName && <div className="text-danger">{errorFirstName}</div>}
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="lname">Last Name:</label>
                    <input name="lastName" type="text" className="form-control" placeholder="Last Name" value={formValues.lastName} onChange={handleInputChange} required />
                    {errorLastName && <div className="text-danger">{errorLastName}</div>}
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Email:</label>
                    <input name="email" type="email" className="form-control" placeholder="Email" value={formValues.email} onChange={handleInputChange} required />
                </div>
                <h2 className="text-center" style={{color: "rgb(59, 255, 150)"}}><dl><dt>Total Cost: ${payment.toFixed(2)}</dt></dl></h2>
                <div className="d-flex justify-content-center">
                    <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                        <button type="submit" className="btn btn-primary d-flex justify-content-center">Complete Purchase</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CheckoutForm;
