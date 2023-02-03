import React from 'react';

import './order-delegate.style.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

interface IOrderProps{
    orderID: string,
    customerID: string,
    customerName: string,
    totalAmount: number
}

function OrderDelegate(props: IOrderProps) {
    return (
        <div className="order-delegate-container">
            <button className="delegate-button">
                <FontAwesomeIcon icon={ solid('receipt') } />
                <span>{props.orderID}</span>
            </button>
            <button className="delegate-button">
                <FontAwesomeIcon icon={ solid('user') } />
                <span>{props.customerName}</span>
            </button>
            <div>
                <span>{props.totalAmount}</span>
                <span>₪</span>
            </div>
            <button className="expand-button">
                <FontAwesomeIcon icon={ solid('caret-down') } />
            </button>

        </div>
    );
}

OrderDelegate.defaultProps = {
    orderID: "HM-437893",
    customerID: "",
    customerName: "John Doe",
    totalAmount: 300
}

export default OrderDelegate;