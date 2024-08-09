import { Image, StyleSheet, Text, View } from "react-native";

export default function ProductLisItem({ product }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.Image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text>{product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  Image: {
    width: "100%",
    aspectRatio: 1,
  },
});
