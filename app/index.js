import { SafeAreaView, StyleSheet } from "react-native";
import { Stack, Link } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <Stack.Screen options={{ title: "Home" }} />
      <Link href="projects/custom-project">Navigate to project</Link>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
