import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Details: " + id }} />
      <Text style={styles.title}>ProductDetailsScreen of id: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
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
