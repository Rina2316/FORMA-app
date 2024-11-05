import { ICustomTextareaProps } from "./custom-textarea.props";
import styles from './styles.module.scss';
import cn from 'classnames';

export default function CustomTextarea({ label, value, wrapperClassName, errorMsg, isError, className, placeholder, ...props }: ICustomTextareaProps) {
	return <div className={cn(styles.wrapper, wrapperClassName)}>
		{label && <label className={styles.label}>{label}</label>}
		<textarea value={value ?? ''} {...props} className={cn(styles.input, { [styles.error]: isError }, className)} placeholder={placeholder} />
		{isError && <span className={styles.errorMsg}>{errorMsg}</span>}
	</div>
}