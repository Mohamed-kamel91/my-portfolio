import React, { Children } from 'react';

import { Button, ButtonCustomProps } from '../buttons';

import { useTabs } from './tabs-context';
import { cn } from '@/utils/cn';

type TabsListProps = React.HTMLAttributes<HTMLDivElement>;

export const TabsList = ({ className, children }: TabsListProps) => {
  const { active, setActive } = useTabs();

  return (
    <div
      className={cn('flex gap-2 px-4 py-2', className)}
      role="tablist"
    >
      {Children.map(children, (child, index) => {
        return React.cloneElement(
          child as React.ReactElement<TabProps>,
          {
            id: `tab-${index}`,
            isActive: active === index,
            controls: `panel-${index}`,
            onClick: () => setActive(index),
          },
        );
      })}
    </div>
  );
};

export const TabsPanels = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const { active } = useTabs();

  return (
    <div className={cn('w-full', className)}>
      {Children.map(children, (child, index) => {
        return React.cloneElement(
          child as React.ReactElement<TabPanelProps>,
          {
            id: `panel-${index}`,
            isActive: active === index,
            labelledBy: `tab-${index}`,
          },
        );
      })}
    </div>
  );
};

type TabProps = React.HTMLAttributes<HTMLButtonElement> &
  ButtonCustomProps & {
    id?: string;
    isActive?: boolean;
    controls?: string;
    children: React.ReactNode;
    onClick?: () => void;
  };

export const Tab = ({
  id,
  className,
  isActive,
  controls,
  onClick,
  children,
  ...props
}: TabProps) => {
  return (
    <Button
      id={id}
      className={cn('shrink-0', className)}
      variant={isActive ? 'primary' : 'outline'}
      size="lg"
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={controls}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

type TabPanelProps = {
  id?: string;
  className?: string;
  isActive?: boolean;
  labelledBy?: string;
  children: React.ReactNode;
};

export const TabPanel = ({
  id,
  className,
  isActive,
  labelledBy,
  children,
}: TabPanelProps) => {
  return (
    <div
      id={id}
      className={cn(
        'hidden px-4 py-2',
        isActive && 'block',
        className,
      )}
      role="tabpanel"
      aria-labelledby={labelledBy}
      hidden={!isActive}
    >
      {children}
    </div>
  );
};
