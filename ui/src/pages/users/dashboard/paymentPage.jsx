import React from 'react';
import UserUI from "../../../components/ui/userui"
import UserPaymentElemenet from "../../../components/elements/userpaymentelement"
const UserPaymentPage = () => {
    return (
        <UserUI>
            <h1>Payment Page</h1>
            <UserPaymentElemenet limit={100000} offset={0}/>
        </UserUI>
    );
};

export default UserPaymentPage;