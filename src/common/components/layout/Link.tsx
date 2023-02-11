import NextLink from 'next/link';
import { ReactNode } from 'react';
import { validateUrl } from '../../utils/helpers/regex/url';

function Link({
  children,
  rel,
  href,
  target,
  ...props
}: {
  children: ReactNode;
  rel?: 'author' | 'me';
  className?: string;
  href: string;
  target?: '_blank' | '_self';
}) {
  return (
    <NextLink href={href}>
      <a
        {...props}
        target={target ? target : validateUrl(href) ? '_blank' : '_self'}
        rel={validateUrl(href) ? 'external nofollow noopener' : rel ? rel : ''}
      >
        {children}
      </a>
    </NextLink>
  );
}

export default Link;
