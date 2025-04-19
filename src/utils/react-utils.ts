import React from 'react';

export const isHtmlElement = (child: React.ReactNode): boolean => {
  return (
    React.isValidElement(child) && typeof child.type === 'string'
  );
};

export const isCustomComponent = (
  child: React.ReactNode,
): boolean => {
  return (
    React.isValidElement(child) &&
    (typeof child.type === 'function' || // regular component
      typeof child.type === 'object') // forwardRef, memo, etc.
  );
};

export const hasSingleChild = (
  children: React.ReactNode,
): boolean => {
  return React.Children.count(children) === 1;
};
