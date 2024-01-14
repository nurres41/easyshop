import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ActivityIndicator, Text, FlatList } from 'react-native'
import ProductList from './ProductList';

const data = require('../../assets/data/products.json');

const ProductContainer = () => {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    setProducts(data);

    return () => {
      setProducts([])
    }
  })

  return (
    <View>
      <Text>Product Container</Text>
      <FlatList 
        numColumns={2}
        data={products}
        renderItem={(item) => <ProductList key={item.brand} item={item} />}
        keyExtractor={item => item.name}
      />
    </View>
  )
}

export default ProductContainer
