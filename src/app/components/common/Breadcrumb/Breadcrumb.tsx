'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Breadcrumb.module.css';

const Breadcrumb = () => {
  const pathname = usePathname();

  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = () => {
    const paths = pathname.split('/').filter(path => path);
    
    const breadcrumbs = [
      { label: 'Home', href: '/' }
    ];

    let currentPath = '';
    paths.forEach((path) => {
      currentPath += `/${path}`;
      // Convert kebab-case to Title Case
      let label = path
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      let href = currentPath;

      // Custom override for blog posts
      if (path === 'blog-post') {
        label = 'Blog';
        href = '/blog';
      }
      
      breadcrumbs.push({
        label,
        href
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <div className={styles.bredcontainer}>
      <ol className={styles.breadcrumbList}>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className={styles.breadcrumbItem}>
            {index < breadcrumbs.length - 1 ? (
              <>
                <Link href={crumb.href} className={styles.breadcrumbLink}>
                  {crumb.label}
                </Link>
                <span className={styles.separator}>{'>'}</span>
              </>
            ) : (
              <span className={styles.breadcrumbCurrent} aria-current="page">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
