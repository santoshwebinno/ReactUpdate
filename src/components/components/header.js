import React from 'react';
import logo from '../../images/logo.png';  
import {NavLink} from "react-router-dom";
import Searchinput from './search'; 
import Search from "../../images/search";
import ShoppingBag from "../../images/ShoppingBag";
import Menu from "../../images/menu";
import Remove from "../../images/close";

 
class Header extends React.Component {
	
	constructor() {
    super();

    this.state = { 
	    isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {},
	    displayMenu: false,
      displaySearch: false
    };
	this.showSearch = this.showSearch.bind(this);
	this.hideSearch = this.hideSearch.bind(this);
	
  }
  
  hideSearch() {
    this.setState({ displaySearch: false }); 
  }
  showSearch(event) {
    this.setState({ displaySearch: true });
  }
  render() {
    return (
<header className="Apps__header">

    
  <div className="container-fluid">
    <div className="row headder">
      <div className="col-4 header_left">
        <div className="nav-side-menu">
          <div className="toggle-button" onClick={() => this.props.sidebarOpen(true)}>
            <Menu width={60}  />
          </div>
        </div>
      </div>
      <div className="col-4 header_center">
        <NavLink to="/" exact={true} > <img src={logo} alt="" /> </NavLink>
      </div>
      <div className="col-4 header_right">
        <ul>
          <li>
            <div className="search_c" onClick={this.showSearch}>
              <Search width={40}  />
            </div>
            { this.state.displaySearch ? (
            <div className="light_search_box_cnt">
              <div className="light_search_box">
                <Search width={30} />
                <Searchinput hideSearch={this.hideSearch}/>
                <div className="close_search" onClick={this.hideSearch}>
                  <Remove width={20}  />
                </div>
              </div>
            </div>
            ):
            (
            null
            )
            } </li>
          <li> {!this.state.isCartOpen &&
            <div className="cart_icon" onClick={()=> this.props.openCartSlide(true)}>
              <ShoppingBag width={40}  />
              {(this.props.cartCount > 0) ? <span className="cartCount">({this.props.cartCount})</span> : null }</div>
            } </li>
        </ul>
      </div>
    </div>
  </div>
</header>
);
  }
}
 
export default Header; 