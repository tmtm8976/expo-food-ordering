import { FlatList, StyleSheet, View } from "react-native";
// import products from "../../../assets/data/products";
import ProductLisItem from "@/components/ProductLisItem";
import products from "@assets/data/products";

export default function TabOneScreen() {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductLisItem product={item} key={item.id} />
        )}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
