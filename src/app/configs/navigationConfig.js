import i18next from 'i18next';
import DocumentationNavigation from '../main/documentation/DocumentationNavigation';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';
import authRoles from '../auth/authRoles';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'dashboards',
    title: 'Início',
    subtitle: 'Setores Auxiliares',
    type: 'group',
    icon: 'heroicons-outline:home',
    translate: 'Início',
    children: [
      {
        id: 'dashboards.analytics',
        title: 'Informações Gerais',
        type: 'item',
        icon: 'heroicons-outline:clipboard-check',
        url: '/dashboards/analytics',
      },
    ],
  },
  {
    id: 'apps',
    title: 'Funcionalidades',
    subtitle: 'Principais opções do sistema',
    type: 'group',
    icon: 'heroicons-outline:clipboard-check',
    translate: 'FUNCIONALIDADES',
    children: [
      {
        id: 'apps.ecommerce',
        title: 'Gerenciamento de ART',
        type: 'collapse',
        icon: 'heroicons-outline:clipboard-check',
        translate: 'GERENCIAMENTO',
        children: [
          {
            id: 'e-commerce-products',
            title: 'Histórico',
            type: 'item',
            url: 'apps/e-commerce/products',
            end: true,
          },
          {
            id: 'e-commerce-new-product',
            title: 'Cadastrar ART',
            type: 'item',
            url: 'apps/e-commerce/products/new',
          },
        ],
      },
    ],
  },
  {
    id: 'divider-1',
    type: 'divider',
  },
];

export default navigationConfig;
