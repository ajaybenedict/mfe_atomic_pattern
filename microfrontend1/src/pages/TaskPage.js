import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, addTask, updateTask, deleteTask } from '../features/tasks/taskSlice';
import TaskForm from '../components/molecules/TaskForm';
import TaskList from '../components/organisms/TaskList';

const TaskPage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAddTask = (task) => {
    dispatch(addTask(task));
  };

  const handleUpdateTask = (task) => {
    dispatch(updateTask({ ...task, title: `${task.title} (Updated)` }));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <h1>Task List</h1>
      <TaskForm onSubmit={handleAddTask} />
      <TaskList tasks={tasks} onUpdate={handleUpdateTask} onDelete={handleDeleteTask} />
    </div>
  );
};

export default TaskPage;