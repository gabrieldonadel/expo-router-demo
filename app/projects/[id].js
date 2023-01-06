import { SafeAreaView, StyleSheet } from "react-native";
import { Stack } from "expo-router";

const Project = ({ route }) => {
  const { id } = route.params;

  return (
    <SafeAreaView style={styles.flex}>
      <Stack.Screen options={{ title: "Project " + id }} />
    </SafeAreaView>
  );
};

export default Project;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
