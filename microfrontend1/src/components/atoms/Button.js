import React from "react";
import styles from './Button.module.css';
const Button = ({ label, onClick }) => (
    <button className={'button'} onClick={onClick}>{label}</button>);
export default Button;