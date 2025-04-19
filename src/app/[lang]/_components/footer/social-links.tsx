import Link from 'next/link';

import { Stack } from '@/components/ui/stack';

const socials = [
  { name: 'Linkedin', link: 'https://www.linkedin.com/in/mo-kamel' },
  { name: 'Github', link: 'https://github.com/Mohamed-kamel91' },
];

export const SocialLinks = () => {
  return (
    <Stack gap={4} align="center">
      {socials.map((social) => (
        <Link
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.name}
        </Link>
      ))}
    </Stack>
  );
};
