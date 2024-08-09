import CartListItem from "@components/CartListItem";
import { defaultPizzaImage } from "@components/ProductLisItem";
import { View } from "@components/Themed";
import Colors from "@constants/Colors";
import { useCart } from "@provider/CartProvider";
import { FlatList, Image, Pressable, StyleSheet, Text } from "react-native";

export default function CartScreen() {
  const { items, total } = useCart();
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <CartListItem cartItem={item} key={item.id} />
        )}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      />
      <Text style={styles.total}>{`Total: ${total.toFixed(2)} `}</Text>
      <Pressable style={styles.checkout}>
        <Text style={styles.btnText}>Checkout</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "rgba(1,1,1,0)",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  Image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  Item: {
    maxWidth: "50%",
  },
  checkout: {
    width: "100%",
    backgroundColor: "#2e5eaa",
    borderRadius: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    marginVertical: 10,
  },
  btnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
  total: {
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 10,
  },
});
