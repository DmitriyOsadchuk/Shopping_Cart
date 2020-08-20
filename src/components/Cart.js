import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import Recipe from './Recipe'
import OrderForm from './OrderForm'
import store from "../store"
import showResults from "../showResults"
import { Provider } from "react-redux"


class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item=>{
                    return(

                        <li className="collection-item avatar" key={item.id}>
                            <div className="item-img">
                                <img src={item.img} alt={item.img} className=""/>
                            </div>

                            <div className="item-desc">
                                <div className="item-info">
                                    <span className="title">{item.title}</span>
                                    <p>{item.desc}</p>
                                    <p><b>Price: {item.price}$</b></p>
                                    <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                </div>


                                <div className="add-remove">
                                    <Link to="/cart"><i className="material-icons icon" onClick={()=>{this.handleAddQuantity(item.id)}}>add</i></Link>
                                    <p>
                                        <b className="quantity-product">{item.quantity}</b>
                                    </p>
                                    <Link to="/cart"><i className="material-icons icon" onClick={()=>{this.handleSubtractQuantity(item.id)}}>remove</i></Link>
                                </div>
                            </div>

                        </li>

                    )
                })
            ):

            (
                <p>Nothing.</p>
            )
        return(
            <div className="container">
                <h5>You have ordered:</h5>
                <div className="cart">
                    <div className="collection list-order">
                        {addedItems}
                    </div>
                    <Provider store={store}>
                        <OrderForm onSubmit={showResults} />
                    </Provider>
                </div>
                <Recipe />
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Cart)