import React, {useEffect, useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import '../widgets.style.css'
import './today-orders.style.css'
import OrderDelegate from './order-delegate/order-delegate.component'
import {devOrders} from "./dev-data";
import Dropdown from "../../dropdown/dropdown.component";
import SearchField from "../../search-field/search-field.component";
export default function TodayOrders() {

    const [orders, setOrders] = useState(devOrders)
    const [filteredOrders, setFilteredOrders] = useState(orders)
    const [searchString, setSearchString] = useState('')

    useEffect( () => {
        const filtered = orders.filter((order) => {
            const name = order.customer.name.toLowerCase();

            console.log(name, searchString, name.includes(searchString))

            return name.includes(searchString);
        })
        setFilteredOrders(filtered)
    }, [orders, searchString])

    return (
        <div className="dashboard-widget-container today-orders-widget">
            <div className="today-orders-header">
                <div className="today-orders-header-title-row">
                    <div className="today-orders-header-text">
                        <span className="widget-title-text">Today orders</span>
                        <span className="widget-title-text-secondary">List of orders to be given to customers today</span>
                    </div>
                    <div className="today-orders-header-find-container">
                        <SearchField placeholder="Find" onChangeHandler={
                            (event: any) => {
                                setSearchString(event.target.value.toLowerCase())
                            }
                        }/>
                    </div>
                </div>

                <div className="today-orders-header-orders-list-title">
                    <div className="today-orders-header-orders-list-title-item">
                        <span>Order</span>
                    </div>
                    <div className="today-orders-header-orders-list-title-item">
                        <span>Customer</span>
                    </div>
                    <div className="today-orders-header-orders-list-title-item">
                        <span>Total</span>
                    </div>
                </div>
            </div>
            <div className="orders-list-container">
                <div className="orders-list">
                    {
                        filteredOrders.map((order) => {
                            return <OrderDelegate key={order.id} data={order} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}