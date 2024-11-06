"use client";
import styles from './styles.module.scss';
import { IPaginationProps } from './pagination.props';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Pagination({ className, isFormFilled, ...props }: IPaginationProps) {
  const pathname = usePathname();

  const currentPage = pathname === '/' ? 1 :
                      pathname === '/projects/page2' ? 2 :
                      pathname === '/projects/page3' ? 3 : 4;

  const getLink = (page: number) => {
    if (pathname === '/' && !isFormFilled) {
      return "#"; 
    } else {
     
      return page === 1 ? '/' : `/projects/page${page}`;
    }
  };

  return (
    <div className={cn(styles.pagination, className)} {...props}>
      <Link href={getLink(1)}>
        <button className={cn({ [styles.active]: currentPage === 1 })}>1</button>
      </Link>

      <Link href={getLink(2)}>
        <button className={cn({ [styles.active]: currentPage === 2 })}>2</button>
      </Link>

      <Link href={getLink(currentPage === 1 ? 2 :
                          currentPage === 2 ? 3 :
                          currentPage === 3 ? 4 : 1)}>
        <button>...</button>
      </Link>

      <Link href={getLink(3)}>
        <button className={cn({ [styles.active]: currentPage === 3 })}>3</button>
      </Link>

      <Link href={getLink(4)}>
        <button className={cn({ [styles.active]: currentPage === 4 })}>4</button>
      </Link>

      <Link href={getLink(currentPage === 4 ? 1 : currentPage + 1)}>
        <img src="/FORMA-app/pagination.svg" alt="pagination icon" />
      </Link>
    </div>
  );
}
