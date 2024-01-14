import React from 'react'
import { Dimensions, TouchableOpacity, View } from 'react-native'
import ProductCard from './ProductCard';

let { width } = Dimensions.get('window');

const ProductList = ({item}) => {
    console.log(item)
  return (
    <TouchableOpacity style={{width: '50%'}}>
        <View style={{ width: width / 2, backgroundColor: 'gainsboro'}}>
            <ProductCard name={item.item.name} price={item.item.price} image={item.item.image} countInStock={item.item.countInStock}  />
        </View>
    </TouchableOpacity>
  )
}

export default ProductList
