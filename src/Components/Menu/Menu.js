import React, { Component } from "react";
import "./Menu.css";
import Header from "../Header/Header";
class Menu extends Component {
  render() {
    return (
      <div>
        <Header />
        <table className="menu">
          <tr>
            <td class="menu_groups">
              <div  >
                <a> Appetizers</a>
                <a>Soups</a>
                <a>Salads</a>
                <a>Noodles</a>
                <a>Curry</a>
                <a>Entrees</a>
                <a>Specials</a>
                <a>Low Carb</a>
                <a>Crispy Cod Fish Filet</a>
                <a>Side Orders</a>
                <a>Dessert</a>
                <a>Beverages</a>
              </div>
            </td>

            <td className="menuList">
              <div>
                <h2>Appetizers</h2>
              </div>

              <div class="items_wrapper">
                <a className="menu_items">
                  <table className="table_items">
                    <tbody>
                      <tr>
                        <td>
                          <h4>Chicken Satay (5 pieces)</h4>
                          <p>
                            Grilled strips of chicken breast, curry, served with
                            delicious peanut sauce and cucumber salad.
                          </p>
                        </td>
                        <td class="price">6.25</td>
                      </tr>
                    </tbody>
                  </table>
                </a>
                <a className="menu_items">
                  <table className="table_items">
                    <tbody>
                      <tr>
                        <td>
                          <h4>Tofu Satay</h4>
                          <p>Served with peanut sauce and cucumber salad.</p>
                        </td>
                        <td class="price">6.25</td>
                      </tr>
                    </tbody>
                  </table>
                </a>
                <a className="menu_items">
                  <table className="table_items">
                    <tbody>
                      <tr>
                        <td>
                          <h4>Fish Cake</h4>
                          <p>
                            Ground fillet of fish mixed with Thai curry served
                            with sweet sour sauce topped with pieces of cucumber
                            and crunched peanut.
                          </p>
                        </td>
                        <td class="price">6.25</td>
                      </tr>
                    </tbody>
                  </table>
                </a>
                <a className="menu_items">
                  <table className="table_items">
                    <tbody>
                      <tr>
                        <td>
                          <h4>Shrimp Cake</h4>
                          <p>
                            A luscious blend of shrimp and deep fried till
                            crispy.
                          </p>
                        </td>
                        <td class="price">6.75</td>
                      </tr>
                    </tbody>
                  </table>
                </a>
                <a className="menu_items">
                  <table className="table_items">
                    <tbody>
                      <tr>
                        <td>
                          <h4>Shrimp Rolls (5 pieces)</h4>
                          <p>
                            Deep fried shrimp wrapped with spring roll skin.
                          </p>
                        </td>
                        <td class="price">4.50</td>
                      </tr>
                    </tbody>
                  </table>
                </a>
                <a className="menu_items">
                  <table className="table_items">
                    <tbody>
                      <tr>
                        <td>
                          <h4>Spring Rolls (2 rolls)</h4>
                          <p>
                            Fresh spring roll stuffed with cooked bean curd,
                            bean sprout, cucumber, omelet and topped with
                            tamarind sauce.
                          </p>
                        </td>
                        <td class="price">4.25</td>
                      </tr>
                    </tbody>
                  </table>
                </a>
                <a className="menu_items">
                  <table className="table_items">
                    <tbody>
                      <tr>
                        <td>
                          <h4>Vegetable Rolls (5 pieces)</h4>
                          <p>
                            Fresh rolls with mixed vegetables, noodles, splashed
                            with our house dressing. Served with peanut sauce.
                          </p>
                        </td>
                        <td class="price">4.50</td>
                      </tr>
                    </tbody>
                  </table>
                </a>
                <a className="menu_items">
                  <table className="table_items">
                    <tbody>
                      <tr>
                        <td>
                          <h4>Vegetable Egg Rolls (3 pieces)</h4>
                          <p>
                            Home-made egg rolls stuffed with bean thread
                            noodles, carrots, and cabbage. Served with sweet
                            &amp; sour sauce.
                          </p>
                        </td>
                        <td class="price">4.25</td>
                      </tr>
                    </tbody>
                  </table>
                </a>
                <a className="menu_items">
                  <table className="table_items">
                    <tbody>
                      <tr>
                        <td>
                          <h4>Baby Egg Rolls (6 pieces)</h4>
                          <p>
                            Tiny egg rolls filled with chicken, shrimp, black
                            mushroom and bean thread noodle. Served with sweet
                            &amp; sour sauce
                          </p>
                        </td>
                        <td class="price">4.25</td>
                      </tr>
                    </tbody>
                  </table>
                </a>
                <a className="menu_items">
                  <table className="table_items">
                    <tbody>
                      <tr>
                        <td>
                          <h4>Crab Rangoon (6 pieces)</h4>
                          <p>
                            A mixture of crab meat, cream cheese, celery and
                            homemade sauce, wrapped in thin crepes and deep
                            ffied till crispy. Served with sweet &amp; sour
                            sauce
                          </p>
                        </td>
                        <td class="price">4.50</td>
                      </tr>
                    </tbody>
                  </table>
                </a>
                <a className="menu_items">
                  <table className="table_items">
                    <tbody>
                      <tr>
                        <td>
                          <h4>Shumai (6 pieces)</h4>
                          <p>
                            Steamed shrimp or fried shrimp dumpling. Served with
                            special homemade sauce.
                          </p>
                        </td>
                        <td class="price">4.25</td>
                      </tr>
                    </tbody>
                  </table>
                </a>
                <a className="menu_items">
                  <table className="table_items">
                    <tbody>
                      <tr>
                        <td>
                          <h4>Pot Stickers (5 pieces)</h4>
                          <p>
                            Wheat flour pastries filled with a luscious blend of
                            shrimp and garden vegetables. Served with homemade
                            sesame sauce.
                          </p>
                        </td>
                        <td class="price">4.25</td>
                      </tr>
                    </tbody>
                  </table>
                </a>
                <a className="menu_items">
                  <table className="table_items">
                    <tbody>
                      <tr>
                        <td>
                          <h4>Fried Tofu</h4>
                          <p>
                            Deep-fried flesh bean curds. Served with sweet &amp;
                            sour sauce topped with ground peanuts and onion.
                          </p>
                        </td>
                        <td class="price">3.95</td>
                      </tr>
                    </tbody>
                  </table>
                </a>
                <a className="menu_items">
                  <table className="table_items">
                    <tbody>
                      <tr>
                        <td>
                          <h4>Edamame</h4>
                          <p>Steamed soybean served with salt.</p>
                        </td>
                        <td class="price">3.95</td>
                      </tr>
                    </tbody>
                  </table>
                </a>
                <a className="menu_items">
                  <table className="table_items">
                    <tbody>
                      <tr>
                        <td>
                          <h4>Ocean Shrimp</h4>
                          <p>Crispy shrimp served with lime sauce.</p>
                        </td>
                        <td class="price">6.75</td>
                      </tr>
                    </tbody>
                  </table>
                </a>
                <a className="menu_items">
                  <table className="table_items">
                    <tbody>
                      <tr>
                        <td>
                          <h4>Mixed Appetizers</h4>
                          <p>
                            Pot stickers (3), Crab Rangoon (3), baby Egg Roll
                            (3), Shrimp Roll (3) and Fried tofu.
                          </p>
                        </td>
                        <td class="price">8.95</td>
                      </tr>
                    </tbody>
                  </table>
                </a>
                <a className="menu_items">
                  <table className="table_items">
                    <tbody>
                      <tr>
                        <td>
                          <h4>Takoyaki</h4>
                          <p>
                            Octopus Ball with Japanese barbeque sauce, mayo,
                            bonito flakes.
                          </p>
                        </td>
                        <td class="price">5.95</td>
                      </tr>
                    </tbody>
                  </table>
                </a>
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Menu;
