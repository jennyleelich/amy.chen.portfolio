import { CategoryPage } from './CategoryPage';
import { useEffect } from 'react';

export function Drawings() {
  useEffect(() => {
    document.title = 'Drawings - Amy Chen';
  }, []);

  return <CategoryPage category="Drawings" />;
}