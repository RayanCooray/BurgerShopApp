import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";

const data = [
  {
    title: "Mega Burger",
    price: "Rs.1500",
    image: require("../../assets/burger1.jpg"),
    type: "burger",
    popular: true,
  },
  {
    title: "Cheese Beef Burger",
    price: "Rs.1200",
    image: require("../../assets/burger2.jpg"),
    type: "burger",
    popular: true,
  },
  {
    title: "Bacon Medium Burger",
    price: "Rs.900",
    image: require("../../assets/burger3.jpg"),
    type: "burger",
    popular: false,
  },
  {
    title: "Bacon Large Burger",
    price: "Rs.1350",
    image: require("../../assets/burger4.jpg"),
    type: "burger",
    popular: false,
  },
  {
    title: "Chicken Burger",
    price: "Rs.1000",
    image: require("../../assets/burger5.jpg"),
    type: "burger",
    popular: false,
  },
  {
    title: "Full Meal Burger with Fries/2x Coke",
    price: "Rs.2300",
    image: require("../../assets/burger6.jpg"),
    type: "burger",
    popular: true,
  },
  {
    title: "Mexican Spicy Pizza Medium",
    price: "Rs.2300",
    image: require("../../assets/pizza1.jpg"),
    type: "pizza",
    popular: false,
  },
  {
    title: "Salami Spicy Pizza Large",
    price: "Rs.5200",
    image: require("../../assets/pizza2.jpg"),
    type: "pizza",
    popular: false,
  },
  {
    title: "Pepperoni Large Pizza",
    price: "Rs.2300",
    image: require("../../assets/pizza3.jpg"),
    type: "pizza",
    popular: true,
  },
];

const { height } = Dimensions.get("window");

export default function MenuPage() {
  const [liked, setLiked] = useState(Array(data.length).fill(false));
  const [filterType, setFilterType] = useState("all");
  const [notificationsVisible, setNotificationsVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-height)).current;

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [quantities, setQuantities] = useState(Array(data.length).fill(0));

  const handleLike = (index: number) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  const handleFilter = (type: string) => {
    setFilterType(type);
  };

  const filteredData = data.filter((item) => {
    if (filterType === "all") return true;
    if (filterType === "popular") return item.popular;
    if (filterType === "favorite") return liked[data.indexOf(item)];
    return item.type === filterType;
  });

  const incrementQuantity = (index: number) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const decrementQuantity = (index: number) => {
    if (quantities[index] > 0) {
      const newQuantities = [...quantities];
      newQuantities[index]--;
      setQuantities(newQuantities);
    }
  };

  const handleAddToCart = () => {
    navigation.navigate("Cart");
  };

  const handleNotificationForYou = () => {
    setNotificationsVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeNotifications = () => {
    Animated.timing(slideAnim, {
      toValue: -height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setNotificationsVisible(false));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image
            source={require("../../assets/img.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.location}>Kalutara, Panadura</Text>
        </View>
        <Ionicons
          name="notifications-outline"
          size={24}
          color="black"
          onPress={handleNotificationForYou}
        />
      </View>

      {/* Filters */}
      <View style={styles.filters}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filterType === "all" && styles.activeFilterButton,
          ]}
          onPress={() => handleFilter("all")}
        >
          <Text
            style={[
              styles.filterText,
              filterType === "all" && styles.activeFilterText,
            ]}
          >
            All types
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filterType === "burger" && styles.activeFilterButton,
          ]}
          onPress={() => handleFilter("burger")}
        >
          <Text
            style={[
              styles.filterText,
              filterType === "burger" && styles.activeFilterText,
            ]}
          >
            Burger
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filterType === "pizza" && styles.activeFilterButton,
          ]}
          onPress={() => handleFilter("pizza")}
        >
          <Text
            style={[
              styles.filterText,
              filterType === "pizza" && styles.activeFilterText,
            ]}
          >
            Pizza
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filterType === "popular" && styles.activeFilterButton,
          ]}
          onPress={() => handleFilter("popular")}
        >
          <Text
            style={[
              styles.filterText,
              filterType === "popular" && styles.activeFilterText,
            ]}
          >
            Popular
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filterType === "favorite" && styles.activeFilterButton,
          ]}
          onPress={() => handleFilter("favorite")}
        >
          <Text
            style={[
              styles.filterText,
              filterType === "favorite" && styles.activeFilterText,
            ]}
          >
            Favorite
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.itemsbox}>
        {filteredData.map((item, index) => (
          <View key={index} style={styles.menuItem}>
            <Image source={item.image} style={styles.menuItemImage} />
            <View style={styles.menuItemInfo}>
              <Text style={styles.menuItemTitle}>{item.title}</Text>
              <Text style={styles.menuItemPrice}>{item.price}</Text>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => incrementQuantity(index)}
                >
                  <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => decrementQuantity(index)}
                >
                  <Text style={styles.buttonText}>Remove</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantities[index]}</Text>
                <TouchableOpacity onPress={() => handleLike(index)}>
                  <Ionicons
                    name={liked[index] ? "heart" : "heart-outline"}
                    size={24}
                    color={liked[index] ? "red" : "#000"}
                    style={styles.heartIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.topOfWeek}>
        <Text style={styles.topOfWeekText}>Top of the week</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuItems}></View>

      <View style={styles.navBar}>
        <Ionicons
          name="home-outline"
          size={24}
          color="black"
          onPress={() => navigation.navigate("Home")}
        />
        <Ionicons
          name="menu-outline"
          size={24}
          color="black"
          onPress={() => navigation.navigate("OrderSummary")}
        />
        <Ionicons
          name="basket-outline"
          size={24}
          color="black"
          onPress={() => navigation.navigate("Notification")}
        />
        <Ionicons
          name="person-outline"
          size={24}
          color="black"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>

      {notificationsVisible && (
        <TouchableWithoutFeedback onPress={closeNotifications}>
          <View style={styles.overlay}>
            <Animated.View
              style={[
                styles.notificationsContainer,
                { transform: [{ translateY: slideAnim }] },
              ]}
            >
              <Text style={styles.notificationsHeader}>Notifications</Text>
              <View style={styles.notificationItem}>
                <Text style={styles.notificationText}>
                  New offer on Mega Burger 💯
                </Text>
              </View>
              <View style={styles.notificationItem}>
                <Text style={styles.notificationText}>
                  Full Meal just for 4000😶😱
                </Text>
              </View>
              <View style={styles.notificationItem}>
                <Text style={styles.notificationText}>
                  Flash sale on Chicken Burger!
                </Text>
              </View>
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  heartIcon: {
    left: 60,
    bottom: 20,
  },
  quantity: {
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 0,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  addButton: {
    backgroundColor: "#FFAF32",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  removeButton: {
    backgroundColor: "#FF6347",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  itemsbox: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
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
    backgroundColor: "#fff",
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    top: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  location: {
    fontSize: 16,
    fontWeight: "bold",
  },
  filters: {
    top: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  filterButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  filterText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  activeFilterButton: {
    backgroundColor: "#FFAF32",
  },
  activeFilterText: {
    color: "#fff",
  },
  topOfWeek: {
    top: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  topOfWeekText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: 14,
    color: "blue",
  },
  menuitems: {
    flex: 1,
  },
  navBar: {
    backgroundColor: "#FFAF32",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#f0f0f0",
  },
  notificationsContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
  },
  notificationsHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  notificationItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e7e7e7",
  },
  notificationText: {
    fontSize: 20,
    paddingTop: 10,
    color: "#F47556",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
});
