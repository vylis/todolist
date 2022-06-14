import { StyleSheet, View, SafeAreaView } from "react-native";
import TasksScreen from "./src/screens/Tasks/TaskScreen";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView />
      <View style={styles.container}>
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
