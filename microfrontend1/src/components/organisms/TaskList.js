import React from 'react';
import Button from '../atoms/Button';
import styles from './TaskList.module.css'; // Import the CSS Module

const TaskList = ({ tasks, onUpdate, onDelete }) => (
  <ul className={styles.taskList}>
    {tasks.map(task => (
      <li key={task.id} className={styles.taskItem}>
        <span className={styles.taskTitle}>{task.title}</span>
        <div className={styles.taskActions}>
          <Button label="Edit" onClick={() => onUpdate(task)} />
          <Button label="Delete" onClick={() => onDelete(task.id)} />
        </div>
      </li>
    ))}
  </ul>
);

export default TaskList;