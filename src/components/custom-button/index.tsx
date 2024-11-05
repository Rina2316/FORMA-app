import { ICustomButtonProps } from "./custom-button.props";
import styles from './styles.module.scss';
import cn from 'classnames';


export default function CustomButton({ children, className, isDisabled, ...props }: ICustomButtonProps) {
	return <button disabled={isDisabled} className={cn(styles.btn, className)} {...props}>{children}</button>
}