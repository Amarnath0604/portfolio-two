import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  ScrollText,
  SunMoon,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
import { FaEnvelope, FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

const data = [
  {
    title: 'LinkedIn',
    icon: (
        <FaLinkedin className="w-full h-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: 'https://www.linkedin.com/in/amarnath9451/',
  },
  {
    title: 'Github',
    icon: (
      <FaGithubSquare className="w-full h-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: 'https://github.com/Amarnath0604',
  },
  {
    title: 'Gmail',
    icon: (
      <FaEnvelope className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: 'mailto:amarnathravi33@gmail.com',
  },
  {
    title: 'Instagram',
    icon: (
      <FaInstagram className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: 'https://www.instagram.com/amarna.th/',
  }
];

export function AppleStyleDock() {
  return (
    <div className='absolute bottom-2 left-1/2 max-w-full -translate-x-1/2'>
      <Dock className='items-end pb-3'>
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
            onClick={() => window.open(item.href, "_blank", "noopener,noreferrer")}
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}