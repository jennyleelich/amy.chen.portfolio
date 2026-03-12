import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Paintings } from './pages/Paintings';
import { Drawings } from './pages/Drawings';
import { InstallationsSculpture } from './pages/InstallationsSculpture';
import { ProjectDetail } from './pages/ProjectDetail';
import { About } from './pages/About';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'paintings',
        Component: Paintings,
      },
      {
        path: 'drawings',
        Component: Drawings,
      },
      {
        path: 'installations-sculpture',
        Component: InstallationsSculpture,
      },
      {
        path: 'project/:id',
        Component: ProjectDetail,
      },
    ],
  },
]);