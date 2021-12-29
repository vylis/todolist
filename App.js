import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import TasksScreen from "./src/screens/Tasks/index";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <SafeAreaView />
        <TasksScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
