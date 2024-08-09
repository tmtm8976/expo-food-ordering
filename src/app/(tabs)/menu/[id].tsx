import { Stack, useLocalSearchParams } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import products from "@assets/data/products";
import { useState } from "react";
import { PizzaSize } from "@types";
import { useCart } from "@provider/CartProvider";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const [size, setSize] = useState<PizzaSize>("S");
  const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

  const { addItem } = useCart();

  const product = products.find((p) => p.id.toString() === id);

  const handleAddToCart = () => {
    if (product === undefined) {
      return;
    }
    addItem(product, size);
  };

  return (
    <View style={styles.container}>
      <View>
        <Stack.Screen options={{ title: product?.name + " Details" }} />
        <Image source={{ uri: product?.image }} style={styles?.Image} />
        <View>
          <View style={styles.sizesContainers}>
            {sizes.map((s, i) => (
              <Pressable
                key={i}
                style={[
                  styles.sizeCircle,
                  s === size
                    ? { backgroundColor: "#8aa1a8d9" }
                    : {
                        backgroundColor: "#b5c5c99c",
                      },
                ]}
                onPress={() => setSize(s)}
              >
                <Text>{s}</Text>
              </Pressable>
            ))}
          </View>
        </View>
        <Text style={styles.title}>{product?.name}</Text>
        <Text style={styles.price}>{product?.price}</Text>
      </View>

      <Pressable style={styles.addToCartBtn} onPress={handleAddToCart}>
        <Text style={styles.btnText}>Add To Cart</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  Image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  price: {
    fontSize: 20,
  },
  sizesContainers: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  sizeCircle: {
    padding: 5,
    borderRadius: 999,
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addToCartBtn: {
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
});
