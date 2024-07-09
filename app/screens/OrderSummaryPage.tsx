import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity , Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

const data = [
  {
    title: "Mega Burger",
    price: "Rs.1500",
    image: require("../../assets/burger1.jpg"),
  },
  {
    title: "Salami Spicy Pizza Large",
    price: "Rs.5200",
    image: require("../../assets/pizza2.jpg"),
  },
  {
    title: "Peparoni  Large Pizza",
    price: "Rs.2300",
    image: require("../../assets/pizza3.jpg"),
  },
];


export default function OrderSummaryPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Order Summary</Text>
      <View style={styles.divider}>
        <View style={styles.orderdItems}>
      {data.slice(0, 1).map((item, index) => (
          <View key={index} style={styles.menuItem}>
            <Image source={item.image} style={styles.menuItemImage} />
            <View style={styles.menuItemInfo}>
              <Text style={styles.menuItemTitle}>{item.title}</Text>
              <Text style={styles.menuItemPrice}>{item.price}</Text>
            </View>
          </View>
        ))}
        {data.slice(2, 3).map((item, index) => (
          <View key={index} style={styles.menuItem}>
            <Image source={item.image} style={styles.menuItemImage} />
            <View style={styles.menuItemInfo}>
              <Text style={styles.menuItemTitle}>{item.title}</Text>
              <Text style={styles.menuItemPrice}>{item.price}</Text>
            </View>
          </View>
        ))}
        </View>
        <View style={styles.finalOrderInformationTab}>
          <Text style={styles.totalHeader}>Item Total</Text>
          <Text style={styles.DiscountHeader}>Item Discount</Text>
          <Text style={styles.TaxHeader}>Tax</Text>
          <Text style={styles.FinalTotalHeader}>Total</Text>
          <Text style={styles.FinalPriceHeader}>Rs.3800</Text>
          <Text style={styles.DiscountPriceHeader}>30%</Text>
          <Text style={styles.TaxPriceHeader}>Rs.200</Text>
          <Text style={styles.FinalTotalPriceHeader}>Rs.2860</Text>
        </View>
      </View>
      <View style={styles.cardPayment}>
        <Text style={styles.cardheader}>Balance</Text>
        <Text style={styles.cardAmount}>$340.00</Text>
        <Text style={styles.cardNumber}>******** 4868</Text>
        <Text style={styles.cardType}>MasterCard</Text>
        <View style={styles.logoCircle}></View>
        <View style={styles.logoCircle2}></View>
      </View>
      <View>
        <TouchableOpacity style={styles.Paybutton}>
          <Text style={styles.buttonText}>Proceed To Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  FinalTotalPriceHeader:{
    fontSize: 17,
    fontWeight : '500',
    color : '#FFAF32',
    position : 'absolute',
    left : 280,
    top : 140
  },
  TaxPriceHeader:{
    fontSize: 17,
      fontWeight : '500',
      color : '#FFAF32',
      position : 'absolute',
      left : 280,
      top : 100
  },
  DiscountPriceHeader:{
      fontSize: 17,
      fontWeight : '500',
      color : '#FFAF32',
      position : 'absolute',
      left : 280,
      top : 60
  },
  FinalPriceHeader:{
    fontSize: 17,
    fontWeight : '500',
    color : '#FFAF32',
    position : 'absolute',
    left : 280,
    top : 20
  },
  FinalTotalHeader:{
    fontSize: 17,
    fontWeight : '500',
    color : '#A6A6A6',
    position : 'absolute',
    left : 15,
    top : 140
  },
  TaxHeader:{
    fontSize: 17,
    fontWeight : '500',
    color : '#A6A6A6',
    position : 'absolute',
    left : 15,
    top : 100
  },
  DiscountHeader : {
    fontSize: 17,
    fontWeight : '500',
    color : '#A6A6A6',
    position : 'absolute',
    left : 15,
    top : 60
  },
  totalHeader: {
    fontSize: 17,
    fontWeight : '500',
    color : '#A6A6A6',
    position : 'absolute',
    left : 15,
    top : 20
  },
  finalOrderInformationTab : {
      position : 'absolute',
      width : '100%',
      height : '48%',
      // backgroundColor : 'rgba(36, 35, 37, 0.2)',
      top : 235,
  },
  orderdItems :{
    height : '50%'
  },
  divider: {
    position : 'absolute',
    width : '100%',
    height : '65%',
    backgroundColor : 'rgba(207, 216, 220, 0.2)',
    top : 50,
    left : 20,
    bottom : 0,
    margin : 'auto',
  },
  logoCircle2: {
    backgroundColor : '#FFAF32',
    width : 30,
    height : 30,
    borderRadius : 100,
    top : 40,
    right : 169,
  },
  logoCircle: {
    backgroundColor : 'white',
    width : 30,
    height : 30,
    borderRadius : 100,
    top : 40,
    right : 160,
  },
  cardType: {
    fontSize: 16,
    color: 'white',
    top: 40,
    right: 165,
    position: 'relative',
  },
  cardNumber: {
    fontSize: 20,
    fontWeight: 'light',
    color: 'white',
    bottom: 40,
    right: 36,
    position: 'relative',
  },
  cardAmount: {
    fontSize: 40,
    fontWeight: 'light',
    color: 'white',
    right: 90,
    top : 30,
    position : 'relative',
  },
  cardheader: {
    fontSize: 20,
    fontWeight: 'light',
    bottom: 40,
    right: 16,
    color: 'white',
  },
  cardPayment: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#242325',
    padding: 40,
    top: 450,
    borderRadius: 5,
    shadowColor: '#000',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  Paybutton : {
    position: 'absolute',
    width: '100%',
    height: 50,
    top: 459,
    backgroundColor: '#FFAF32',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItems: {
    flex: 1,
  },
  menuItem: {
    top: 20,
    flexDirection: "row",
    height: 100,
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  menuItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  menuItemInfo: {
    flex: 1,
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  menuItemPrice: {
    fontSize: 14,
    color: "#777",
  },
});
