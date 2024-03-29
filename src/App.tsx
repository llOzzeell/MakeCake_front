import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './pages/login/login.page'
import Register from './pages/register/register.page'
import MainLayout from './pages/layouts/main.layout'
import DashboardLayout from './pages/layouts/dashboard.layout'
import Dashboard from './pages/dashboard/dashboard.page'
import Customers from './pages/customers/customers.page'
import Orders from './pages/orders/orders.page'
import Ingredients from './pages/ingredients/ingredients.page'
import Recipes from './pages/recipes/recipes.page'
import Settings from './pages/settings/settings.page'
import PasswordRestore from './pages/password-restore/password-restore.page'
import AddOrder from "./pages/orders/add-order.page";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="forgot-password" element={<PasswordRestore/>}/>
            </Route>
            <Route path="/" element={<DashboardLayout/>}>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="orders" element={<Orders/>}/>
                <Route path="orders/new" element={<AddOrder/>}/>
                <Route path="customers" element={<Customers/>}/>
                <Route path="recipes" element={<Recipes/>}/>
                <Route path="ingredients" element={<Ingredients/>}/>
                <Route path="settings" element={<Settings/>}/>
            </Route>
        </Routes>
    );
}

export default App;
