import { IFormData } from "../interfaces/form-data.interface";

export const getDataFromLocalStorage = (): IFormData | null => {
	const data = localStorage.getItem('formData');
	if (data) {
		return JSON.parse(data) as IFormData;
	}
	return null;
}