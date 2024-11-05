"use client";
import styles from './styles.module.scss';
import { IPaginationProps } from './pagination.props';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Pagination({ className, ...props }: IPaginationProps) {
  const pathname = usePathname();

  const currentPage = pathname === '/' ? 1 :
                      pathname === '/projects/page2' ? 2 :
                      pathname === '/projects/page3' ? 3 : 4;

  return (
    <div className={cn(styles.pagination, className)} {...props}>
      <Link href="/">
        <button className={cn({ [styles.active]: currentPage === 1 })}>1</button>
      </Link>
      <Link href="/projects/page2">
        <button className={cn({ [styles.active]: currentPage === 2 })}>2</button>
      </Link>

      <Link href={currentPage === 1 ? "/projects/page2" :
                    currentPage === 2 ? "/projects/page3" :
                    currentPage === 3 ? "/projects/page4" :
                    "/"}>
        <button>...</button>
      </Link>

      <Link href="/projects/page3">
        <button className={cn({ [styles.active]: currentPage === 3 })}>3</button>
      </Link>
      <Link href="/projects/page4">
        <button className={cn({ [styles.active]: currentPage === 4 })}>4</button>
      </Link>
      
      <Link href={currentPage === 4 ? "/" : `/projects/page${currentPage + 1}`}>
        <img src="/FORMA-app/pagination.svg" alt="pagination icon" />
      </Link>
    </div>
  );
}
