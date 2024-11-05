import Pagination from '@/components/pagination';
import CustomButton from "@/components/custom-button";
import Link from "next/link";
import styles from "../../page.module.scss";

const ProjectsPage2 = () => (
  <div className={styles.block}>
    <h1>Страница 2</h1>
    <Pagination /> 
    <Link href="/projects/page3"> 
          <CustomButton className={styles.btn}>
            Следующий шаг
            <img src="/arrow-right.svg" alt="arrow right" />
          </CustomButton>
        </Link>
  </div>
);

export default ProjectsPage2;
