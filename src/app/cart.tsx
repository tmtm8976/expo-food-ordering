import CartListItem from "@components/CartListItem";
import { defaultPizzaImage } from "@components/ProductLisItem";
import { View } from "@components/Themed";
import { useCart } from "@provider/CartProvider";
import { FlatList, Image, StyleSheet, Text } from "react-native";

export default function CartScreen() {
  const { items } = useCart();
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <CartListItem cartItem={item} key={item.id} />}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
});
