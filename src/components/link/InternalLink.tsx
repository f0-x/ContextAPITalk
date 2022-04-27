import Link, { LinkProps } from 'next/link';
import React, { FunctionComponent, HTMLAttributes } from 'react';

interface Props extends LinkProps {
  className?: HTMLAttributes<HTMLElement>['className'];
  title?: HTMLAttributes<HTMLElement>['title'];
}

export const InternalLink: FunctionComponent<Props> = props => {
  const { className, title, children, ...linkProps } = props;

  return (
    <Link {...linkProps}>
      <a className={className} title={title}>
        {children}
      </a>
    </Link>
  );
};
