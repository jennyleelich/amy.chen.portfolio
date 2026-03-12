import { CategoryPage } from './CategoryPage';
import { useEffect } from 'react';

export function Paintings() {
  useEffect(() => {
    document.title = 'Paintings - Amy Chen';
  }, []);

  return <CategoryPage category="Paintings" />;
}