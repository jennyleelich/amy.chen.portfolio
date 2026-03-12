import { CategoryPage } from './CategoryPage';
import { useEffect } from 'react';

export function InstallationsSculpture() {
  useEffect(() => {
    document.title = 'Installations/Sculpture - Amy Chen';
  }, []);

  return <CategoryPage category="Installations/Sculpture" />;
}