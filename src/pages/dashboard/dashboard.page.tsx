import React from 'react'

import './dashboard.style.css'
import Income from "../../components/dashboard-widgets/income/income.component";
import TodayOrders from "../../components/dashboard-widgets/today-orders/today-orders.component";
import WeekOrders from "../../components/dashboard-widgets/week-orders/week-orders.component";

export default function Dashboard() {
  return (
    <div className="data-container dashboard-container">
        <div className="dashboard-content">
            <TodayOrders />
            <WeekOrders />
            <Income />
        </div>
    </div>
  )
}
