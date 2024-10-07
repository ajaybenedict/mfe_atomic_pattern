import React, { useState } from 'react';
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';
import styles from './TaskForm.module.css';

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, completed: false });
    setTitle('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputField
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <div className={styles.buttonWrapper}>
        <Button label="Add Task" />
      </div>
    </form>
  );
};

export default TaskForm;