import { HTMLAttributes } from "react";

export interface ICustomTextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	errorMsg?: string;
	isError?: boolean;
	wrapperClassName?: string;
	placeholder?: string;
	value: string | null;
}