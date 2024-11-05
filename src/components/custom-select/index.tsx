"use client";
import { ICustomSelectProps } from "./custom-select.props";
import styles from './styles.module.scss';
import cn from 'classnames';

export default function CustomSelect({ options, value, label, placeholder, wrapperClassName, errorMsg, isError, className, ...props }: ICustomSelectProps) {
	return <div className={cn(styles.wrapper, wrapperClassName)}>
		{label && <label className={styles.label}>{label}</label>}
		<select value={value} {...props} className={cn(styles.input, { [styles.error]: isError }, className)}>
			<option value="" disabled hidden>{placeholder}</option>
			{options.map((el) => <option key={el.value} value={el.value}>{el.option}</option>)}
		</select>
		{isError && <span className={styles.errorMsg}>{errorMsg}</span>}
	</div>
}