import { defaultPizzaImage } from "@components/ProductLisItem";
import { View } from "@components/Themed";
import { useCart } from "@provider/CartProvider";
import { FlatList, Image, StyleSheet, Text } from "react-native";

export default function CartScreen() {
  const { items } = useCart();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>cart</Text>
      {/* {items?.map((item) => (
        <View key={item.id}>
          <Image
            source={{ uri: item?.product?.image || defaultPizzaImage }}
            style={styles.Image}
          />
          <Text>{item?.product?.name}</Text>
        </View>
      ))} */}

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.Item}>
            <Image
              source={{ uri: item?.product?.image || defaultPizzaImage }}
              style={styles.Image}
            />
            <Text>{item?.product?.name}</Text>
          </View>
        )}
        numColumns={2}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
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
