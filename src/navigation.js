import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Servicios',
      href: getPermalink('/#servicios'),
    },
    {
      text: 'Nosotros',
      href: '/nosotros',
    },
    {
      text: 'Contactanos',
      href: '/contacto',
    },
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/maicronet?igsh=N3hla3k5c2QzZHNu',
    },
  ],
  socialLinks: [
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/maicronet?igsh=N3hla3k5c2QzZHNu',
    },
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/maicronetmty?mibextid=ZbWKwL',
    },
  ],
};

export const footerData = {
  socialLinks: [
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/maicronet?igsh=N3hla3k5c2QzZHNu',
    },
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/maicronetmty?mibextid=ZbWKwL',
    },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Creado por el equipo innovador de <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://maicronet.com/"> MAICRONET</a>
  `,
};
