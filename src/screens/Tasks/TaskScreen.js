import { React, useState } from "react";
import { StyleSheet, Pressable, View, Text, FlatList } from "react-native";
import Header from "../../components/Header/index";
import TaskTile from "./TaskTile";
import TaskForm from "./TaskForm";
import FloatingButton from "../../components/FloatingButton";
import Counter from "../../components/Counter";

import { useSelector, useDispatch } from "react-redux";
import { getTasks } from "../../redux//selectors/selectors";
import { toggleTask, deleteTask } from "../../redux/actions/taskAction";

const TaskScreen = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const tasks = useSelector(getTasks);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
    return (
      <TaskTile
        task={item}
        onUpdateTask={onUpdateTask}
        onDeleteTask={onDeleteTask}
      />
    );
  };

  const onDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const onUpdateTask = (id) => {
    dispatch(toggleTask(id));
  };

  const _toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <Header />
            {isFormVisible && <TaskForm />}
            <View style={styles.containerCounter}>
              <Counter nb={tasks.length} title="Tâches créées" />
              <Counter
                nb={tasks.filter((t) => t.isCompleted === true).length}
                title="Tâches effectuées "
              />
            </View>
          </>
        }
        contentContainerStyle={{ flexGrow: 1 }}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <FloatingButton toggle={_toggleForm} isOpen={isFormVisible} />
    </>
  );
};

const styles = StyleSheet.create({
  containerCounter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 20,
  },
});

export default TaskScreen;
