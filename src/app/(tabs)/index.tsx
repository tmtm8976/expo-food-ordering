import { StyleSheet } from "react-native";
import { Text, View } from "@/src/components/Themed";
import products from "@/assets/data/products";
import ProductLisItem from "@/src/components/ProductLisItem";

export default function TabOneScreen() {
  return (
    <View>
      <ProductLisItem product={products[1]} />
      <ProductLisItem product={products[5]} />
    </View>
  );
}

const styles = StyleSheet.create({});
