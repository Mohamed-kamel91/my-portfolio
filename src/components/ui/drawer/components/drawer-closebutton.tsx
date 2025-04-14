'use client';

import React, { isValidElement, useCallback } from 'react';

import { IconButton, IconButtonProps } from '../../buttons';

import { useDrawer } from '../useDrawer';

import { cn } from '@/utils/cn';
import { hasSingleChild } from '@/utils/react-utils';

type DrawerCloseButton = React.HTMLAttributes<HTMLElement> &
  Pick<IconButtonProps<'button'>, 'size' | 'variant'> & {
    asChild?: boolean;
  };

export const DrawerCloseButton = ({
  className,
  asChild = false,
  variant = 'ghost',
  size = 'sm',
  onClick,
  children,
  ...props
}: DrawerCloseButton) => {
  const { close } = useDrawer();

  const handleClickClose = useCallback(
    (originalHandler?: React.MouseEventHandler<HTMLElement>) =>
      (e: React.MouseEvent<HTMLElement>) => {
        originalHandler?.(e);
        close();
      },
    [close],
  );

  if (asChild && isValidElement(children)) {
    if (!hasSingleChild(children)) {
      console.error('Only a single child is accepted');
      return null;
    }

    const child = children as React.ReactElement<
      React.HTMLAttributes<HTMLElement>
    >;

    return React.cloneElement(child, {
      ...child.props,
      ...props,
      className: cn(child.props.className || '', className),
      'aria-label': 'Close drawer',
      onClick: handleClickClose(child.props.onClick),
    });
  }

  return (
    <IconButton
      className={cn(className)}
      variant={variant}
      size={size}
      type="button"
      aria-label="Close drawer"
      onClick={handleClickClose(onClick)}
      {...props}
    >
      {children}
    </IconButton>
  );
};
