import Pagination from '@/components/pagination';
import CustomButton from "@/components/custom-button";
import Link from "next/link";
import styles from "../../page.module.scss";

const ProjectsPage3 = () => (
  <div  className={styles.block}>
    <h1>Страница 3</h1>
    <Pagination /> 
    <Link href="/projects/page4"> 
          <CustomButton  className={styles.btn}>
            Следующий шаг
            <img src="/arrow-right.svg" alt="arrow right" />
          </CustomButton>
        </Link>
  </div>
);

export default ProjectsPage3;
