import { HTMLAttributes } from "react";

export interface ISelectOption {
	value: string;
	option: string
}

export interface ICustomSelectProps extends HTMLAttributes<HTMLSelectElement> {
	label?: string;
	errorMsg?: string;
	isError?: boolean;
	options: ISelectOption[]
	wrapperClassName?: string;
	placeholder?: string;
	value: string;
}