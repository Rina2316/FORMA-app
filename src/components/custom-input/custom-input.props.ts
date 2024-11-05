import { HTMLAttributes } from "react";

export interface ICustomInputProps extends HTMLAttributes<HTMLInputElement> {
	label?: string;
	errorMsg?: string;
	isError?: boolean;
	placeholder?: string;
	type?: 'text' | 'number' | 'textarea';
	wrapperClassName?: string;
	selectOptions?: string[]
	selectValues?: string[]
	value: string | null;
	maxLength?: number;
}