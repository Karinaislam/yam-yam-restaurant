import React, { Component } from "react";
import "./Appetizers.css";
class Appetizers extends Component {
  render() {
    return (
      <div>
        <div className="appetizers_menu">
          <div >
            <h2>Appetizers</h2>
          </div>
          <a>
            <table >
              <tbody className="table_items">
                {this.props.data.items.map(row => (
                  <tr className="menu_items">
                    <td className="itemNameDescription">
                      <h4>{row.item_Name}</h4>
                      <p>{row.description}</p>
                    </td>
                    <td class="price">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </a>

          <div className="items_head">
            <h2>Soups</h2>
          </div>
          <div>
         
            <table className="table_items">
              <tbody >
                {this.props.data.soups.map(row => (
                  <tr className="menu_items">
                    <td className="itemNameDescription">
                      <h4>{row.item_Name}</h4>
                      <p>{row.description}</p>
                    </td>
                    <td class="price">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        

          </div>
          

          <div className="items_head">
            <h2>Noodles</h2>
          </div>
          
            <table>
              <tbody className="table_items">
                {this.props.data.noodles.map(row => (
                  <tr className="menu_items">
                    <td className="itemNameDescription">
                      <h4>{row.item_Name}</h4>
                      <p>{row.description}</p>
                    </td>
                    <td class="price">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
       


          <div className="items_head">
            <h2>Entrees</h2>
          </div>
          <a>
            <table>
              <tbody className="table_items">
                {this.props.data.entrees.map(row => (
                  <tr className="menu_items">
                    <td className="itemNameDescription">
                      <h4>{row.item_Name}</h4>
                      <p>{row.description}</p>
                    </td>
                    <td class="price">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </a>



        </div>
      </div>
    );
  }
}

export default Appetizers;
