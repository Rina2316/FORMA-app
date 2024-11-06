"use client";

import { useEffect, useState } from "react";
import CustomButton from "../components/custom-button";
import CustomInput from "../components/custom-input";
import CustomSelect from "../components/custom-select";
import CustomTextarea from "../components/custom-textarea";
import Pagination from "../components/pagination";
import { countries, formats, genres } from "../core/constants";
import styles from "./page.module.scss";
import { formatUnf } from "../core/utils/format-unf";
import { IFormData } from "../core/interfaces/form-data.interface";
import { saveToLocalStorage } from "../core/utils/save-to-local-storage";
import toast, { Toaster } from "react-hot-toast";
import { getDataFromLocalStorage } from "../core/utils/get-data-from-local-storage";
import Link from "next/link";

export default function Home() {
  const [projectName, setProjectName] = useState<string | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [selectedFormat, setSelectedFormat] = useState<string>('');
  const [unf, setUnf] = useState<string | null>(null);
  const [rawUnf, setRawUnf] = useState<number>(0);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [price, setPrice] = useState<string | null>(null);
  const [synopsis, setSynopsis] = useState<string | null>(null);

  const [isFormFilled, setIsFormFilled] = useState<boolean>(false);
  const [isSaveDisabled, setIsSaveDisabled] = useState<boolean>(true);
  const [initialData, setInitialData] = useState<IFormData | null>(null);

  const handleChangeUnf = (e: any) => {
    const rawValue = e.target.value.replace(/\D/g, ''); 
    setRawUnf(Number(rawValue));
    setUnf(formatUnf(rawValue));
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setInitialData(getDataFromLocalStorage());
    }
  }, []);

  useEffect(() => {
    if (initialData) {
      setProjectName(initialData.projectName);
      setSelectedGenre(initialData.genre ?? '');
      setSelectedFormat(initialData.format ?? '');
      setUnf(initialData.unf ? formatUnf(initialData.unf.toString()) : null);
      setRawUnf(initialData.unf ? Number(initialData.unf.toString()) : 0);
      setSelectedCountry(initialData.country ?? '');
      setPrice(initialData.price ? initialData.price.toString() : null);
      setSynopsis(initialData.synopsis);
    }
  }, [initialData]);

  useEffect(() => {
    if (projectName && projectName.trim() !== '' &&
      selectedGenre && selectedGenre.trim() !== '' &&
      selectedFormat && selectedFormat.trim() !== '' &&
      selectedCountry && selectedCountry.trim() !== '') {

      setIsSaveDisabled(false);
    } else {
      setIsSaveDisabled(true);
    }
  }, [projectName, selectedGenre, selectedFormat, selectedCountry]);

  useEffect(() => {
    if (projectName && selectedGenre && selectedFormat && selectedCountry) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [projectName, selectedGenre, selectedFormat, selectedCountry]);

  const saveData = () => {
    const data: IFormData = {
      projectName,
      genre: selectedGenre,
      format: selectedFormat,
      unf: unf ? Number(rawUnf) : null,
      country: selectedCountry,
      price: price ? Number(price) : null,
      synopsis
    };
    if (!isSaveDisabled) {
      saveToLocalStorage(data);
      toast.success('Данные успешно сохранены в local storage!');
    }
  };

  const handleCancel = () => {
    setProjectName(null);
    setSelectedGenre('');
    setSelectedFormat('');
    setUnf(null);
    setRawUnf(0);
    setSelectedCountry('');
    setPrice(null);
    setSynopsis(null);
  };

  return (
    <div className={styles.wrapper}>
      <Toaster />
      <div className={styles.header}>
        <h1>Производственные параметры фильма</h1>
        <CustomButton onClick={handleCancel}>Отменить заполнение</CustomButton>
      </div>
      <form className={styles.form}>
        <div className={styles.form__part}>
          <CustomInput
            wrapperClassName={styles.input}
            label="Название проекта"
            placeholder="Название"
            onChange={(e: any) => setProjectName(e.target.value)}
            isError={projectName === ''}
            errorMsg="Заполните поле"
            value={projectName}
          />
          <CustomSelect
            wrapperClassName={styles.input}
            placeholder="Жанр"
            label="Жанр"
            errorMsg="Заполните поле"
            options={genres}
            isError={!selectedGenre}
            onChange={(e: any) => setSelectedGenre(e.target.value)}
            value={selectedGenre}
          />
          <CustomSelect
            wrapperClassName={styles.input_last}
            label="Формат (для онлайн-платформ, большого экрана, интернета, другое)"
            options={formats}
            errorMsg="Заполните поле"
            placeholder="Формат"
            isError={!selectedFormat}
            onChange={(e: any) => setSelectedFormat(e.target.value)}
            value={selectedFormat}
          />
          <CustomInput
            value={unf}
            label="№ УНФ или отсутствует"
            placeholder="890-000-000-00-000"
            onChange={(e: any) => handleChangeUnf(e)}
            maxLength={15}
          />
        </div>
        <div className={styles.form__part}>
          <CustomSelect
            wrapperClassName={styles.input_right}
            label="Страна-производитель (копродукция)"
            placeholder="Страна"
            errorMsg="Заполните поле"
            options={countries}
            isError={!selectedCountry}
            onChange={(e: any) => setSelectedCountry(e.target.value)}
            value={selectedCountry}
          />
          <CustomInput
            value={price}
            wrapperClassName={styles.input_right}
            type="text"
            label="Сведения о сметной стоимости производства фильма на территории Нижегородской области, если есть"
            placeholder="Сметная стоимость"
            onChange={(e: any) => setPrice(e.target.value)}
          />
          <CustomTextarea
            label="Синопсис"
            placeholder="Напишите краткое изложение"
            value={synopsis}
            onChange={(e: any) => setSynopsis(e.target.value)}
          />
        </div>
      </form>

      <div className={styles.footer}>
        <Pagination isFormFilled={isFormFilled} />
        <Link href="/projects/page2"> 
          <CustomButton onClick={saveData} className={styles.btn} isDisabled={isSaveDisabled}>
            Следующий шаг
            <img src="/FORMA-app/arrow-right.svg" alt="arrow right"/>
          </CustomButton>
        </Link>
      </div>
    </div>
  );
}
