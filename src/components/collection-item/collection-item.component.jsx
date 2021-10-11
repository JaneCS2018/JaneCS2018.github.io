import React from 'react'
import { connect } from 'react-redux'

import './collection-item.styles.scss'
import { addItem } from '../../redux/cart/cart.action'

const collectionItem = ({item, addItem})=>{
    const {name, price, imageUrl} = item;

    return(
    <div className='collection-item'>
        <div 
        className='image'
        style={{backgroundImage:`url(${imageUrl})`}}
        
        
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <button className='custom-button inverted' onClick={()=>addItem(item)}>ADD TO CART</button> 
     </div>
    )   
}

const mapDispatchToProps = dispatch =>({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(collectionItem);