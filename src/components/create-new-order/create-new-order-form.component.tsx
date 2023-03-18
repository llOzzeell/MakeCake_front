import React, {useState} from 'react'
import '../../App.css'
import './create-new-order-form.style.css'
import {NavLink, useNavigate} from "react-router-dom";
import Dropdown from "../dropdown/dropdown.component";
import InputField from "../input-field/input-field.component";
import {devRecipes} from "./dev-data";
import RecipeDelegate from "./recipe-delegate/recipe-delegate.component";


export default function NewCustomerForm() {

    const [recipes, setRecipes] = useState(devRecipes)
    const [name, setName] = useState();
    const [dueDate, setDueDate] = useState();

    function sendDataToBackend() {
        console.log(`Submit clicked`);
    }

    function addRecipe() {
        console.log(`addRecipe clicked`);
        //TODO: implement.
        // Should add another row to the table.
        // drop down with input: recipe name
        // choose number with input: quantity
        // ingredients cost calculated automatically -> not editable
        // total cost = ingredients cost * 1.5 -> editable
    }

    return (
        <div className="dashboard-widget-container new-order-widget all-orders-container inputs-container">
            {/*<Dropdown model={["A", "B", "C"]} onChanged={() => {*/}
            {/*    console.log("drop down")*/}
            {/*}}/>/!* TODO: should work inside the form(???)*!/*/}
            <div className="input-fields">
                <InputField placeholder='Customer Name' onChange={(e: any) => {
                    setName(e.target.value)
                }}/>{/* TODO: change to drop down with typing*/}
                <InputField placeholder='Due date' onChange={(e: any) => {
                    setDueDate(e.target.value)
                }}/> {/* TODO: change to calendar select*/}
            </div>
            <div className="orders-header">
                <div className="recipes-header-title-row">
                    <div className="orders-header-text">
                        <span className="widget-title-text">Recipes</span>
                        <span className="widget-title-text-secondary"> </span>
                    </div>
                </div>


                <div className=" recipes-widget">
                    <div className="recipes-header-recipes-list-title">
                        <div className="recipes-header-list-title">
                            <span>Name</span>
                        </div>
                        <div className="recipes-header-list-title">
                            <span>Quantity</span>
                        </div>
                        <div className="recipes-header-list-title">
                            <span>Ingredients Cost</span>
                        </div>
                        <div className="recipes-header-list-title">
                            <span>Total Cost</span>
                        </div>

                    </div>
                    <div className="orders-list-container">
                        <div className="orders-list">
                            {
                                recipes.map((recipe) => {
                                    const totalCost = (Number(recipe.ingredientsCost) * 1.5).toString();
                                    console.log(`total cost: ${totalCost}`);
                                    return <RecipeDelegate key={recipe.name} name={recipe.name} quantity={recipe.quantity} ingredientsCost={recipe.ingredientsCost} totalCost={totalCost} />

                                })
                            }
                        </div>
                    </div>

                    <div className="submit-button-container add-item-button">
                        <button className='button button-text' onClick={addRecipe} >Add recipe</button>
                    </div>
                </div>

            </div>

            <div className="submit-button-container">
                <button className='button button-gradient' onClick={sendDataToBackend}>Create</button>
            </div>
        </div>
    )
}
