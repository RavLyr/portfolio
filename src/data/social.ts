import type { SocialLink, ContactData } from '@/types';

export const contactData: ContactData = {
  email: 'ravlyb.works@gmail.com',
  location: 'Semarang, Indonesia',
  social: [
    {
      platform: 'Email',
      label: 'ravlyb.works@gmail.com',
      url: 'mailto:ravlyb.works@gmail.com',
      icon: 'email',
      primary: true,
      order: 1,
    },
    {
      platform: 'GitHub',
      label: 'RavLyr',
      url: 'https://github.com/RavLyr',
      icon: 'github',
      primary: true,
      order: 2,
    },
    {
      platform: 'LinkedIn',
      label: 'Ravly Ramdhani',
      url: 'https://linkedin.com/in/ravlyramdhani',
      icon: 'linkedin',
      primary: true,
      order: 3,
    },
    {
      platform: 'Instagram',
      label: '@ravlyramdhani',
      url: 'https://instagram.com/ravlyramdhani',
      icon: 'instagram',
      primary: true,
      order: 4,
    },
  ],
};
