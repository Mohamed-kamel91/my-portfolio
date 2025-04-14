'use client';

import React, { isValidElement, useCallback } from 'react';

import { Button, ButtonProps } from '../../buttons';

import { useDrawer } from '../useDrawer';

import { hasSingleChild } from '@/utils/react-utils';
import { cn } from '@/utils/cn';

type DrawerTriggerProps = React.HTMLAttributes<HTMLElement> &
  Pick<
    ButtonProps<'button'>,
    'size' | 'variant' | 'leftIcon' | 'rightIcon'
  > & {
    asChild?: boolean;
  };

export const DrawerTrigger = ({
  className,
  asChild = false,
  size,
  variant,
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...props
}: DrawerTriggerProps) => {
  const { id: drawerId, isOpen, toggle } = useDrawer();

  const a11y: React.AriaAttributes = {
    'aria-label': `${isOpen ? 'Close' : 'Open'} drawer`,
    'aria-haspopup': 'dialog',
    'aria-expanded': isOpen,
    'aria-controls': drawerId,
  };

  const handleToggle = useCallback(
    (handler?: React.MouseEventHandler<HTMLElement>) =>
      (e: React.MouseEvent<HTMLElement>) => {
        handler?.(e);
        toggle();
      },
    [toggle],
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
      ...a11y,
      className: cn(child.props.className || '', className),
      onClick: handleToggle(child.props.onClick),
    });
  }

  return (
    <Button
      className={className}
      size={size}
      variant={variant}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      onClick={handleToggle(onClick)}
      {...a11y}
      {...props}
    >
      {children}
    </Button>
  );
};
