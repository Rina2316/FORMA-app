import { IFormData } from "../interfaces/form-data.interface";

export const saveToLocalStorage = (data: IFormData) => {
	localStorage.setItem('formData', JSON.stringify(data));
}