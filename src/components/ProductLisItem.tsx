import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Product } from "../types";
import { Link } from "expo-router";

type ProductLisItemProps = {
  product: Product;
};

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

export default function ProductLisItem({ product }: ProductLisItemProps) {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          style={styles.Image}
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text>{product.price}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
    flex: 1,
    backgroundColor: "#fff",
    maxWidth: "50%",
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
});
