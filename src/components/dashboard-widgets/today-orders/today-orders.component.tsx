import React, {Fragment} from 'react'

import '../widgets.style.css'
import './today-orders.style.css'
import OrderDelegate from '../../order-delegate/order-delegate.component'
export default function TodayOrders() {

    return (
        <div className="dashboard-widget-container today-orders-ext">
            <div className="dashboard-widget-title">
                <span>Today orders</span>
            </div>
            <div className="dashboard-widget-content dashboard-widget-content-today-orders-ext">
                <div className="orders-list-container">
                    <div className="orders-list">
                        <OrderDelegate/>
                        <OrderDelegate/>
                        <OrderDelegate/>
                    </div>
                </div>
            </div>
        </div>
    )
}