import { ICustomInputProps } from "./custom-input.props";
import styles from './styles.module.scss';
import cn from 'classnames';

export default function CustomInput({ label, value, maxLength, type, wrapperClassName, errorMsg, isError, className, placeholder, ...props }: ICustomInputProps) {
	return <div className={cn(styles.wrapper, wrapperClassName)}>
		{label && <label className={styles.label}>{label}</label>}
		<input maxLength={maxLength} value={value ?? ''} type={type} {...props} className={cn(styles.input, { [styles.error]: isError }, className)} placeholder={placeholder} />
		{isError && <span className={styles.errorMsg}>{errorMsg}</span>}
	</div>
}