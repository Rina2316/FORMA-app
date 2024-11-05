import { HTMLAttributes } from "react";

export interface ICustomButtonProps extends HTMLAttributes<HTMLButtonElement> {
	isDisabled?: boolean;
}