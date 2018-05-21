import React, { Component } from 'react';
import "./Menu2.css";
import Header from "../Header/Header";
import Appetizers from "../Appetizers/Appetizers";
import menu_data from "../../Data/manu_data.json";
class Menu2 extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="main_content">

                <div className="menu2 menu_groups" >
                <a> Appetizers</a>
                <a>Soups</a>
                <a>Noodles</a>
                <a>Entrees</a>
                <a>Dessert</a>
                <a>Beverages</a>
                </div>
              <div className="menu_discription"><Appetizers data={menu_data}/></div>
                </div>
               
           
                
            </div>
        );
    }
}

export default Menu2;