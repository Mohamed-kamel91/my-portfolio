/**
 * Represents the `as` prop for polymorphic components.
 * This allows the component to render as a different element or component.
 *
 * @template C - The element type (e.g., 'div', 'button', or a custom component).
 */
type AsProp<C extends React.ElementType> = {
  as?: C;
};

/**
 * Utility type to determine which props to omit from the component's props.
 * This ensures that props like `as` and other custom props are not duplicated or conflicted.
 *
 * @template C - The element type.
 * @template P - The custom props type.
 */
type PropsToOmit<
  C extends React.ElementType,
  P,
> = keyof (AsProp<C> & P);

/**
 * Represents the props for a polymorphic component.
 * Combines custom props, the `as` prop, and the props of the element type,
 * while omitting any conflicting props.
 *
 * @template C - The element type.
 * @template Props - The custom props type (defaults to an empty object).
 */
type PolymorphicProps<
  C extends React.ElementType,
  Props = Record<string, unknown>,
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithRef<C>, PropsToOmit<C, Props>>;

/**
 * Represents the `ref` type for a polymorphic component.
 * This ensures that the `ref` is compatible with the element type.
 *
 * @template C - The element type.
 */
export type PolymorphicRef<C extends React.ElementType> =
  React.ForwardedRef<React.ElementType<C>>;

/**
 * Represents the props for a polymorphic component that includes a `ref`.
 * Combines `PolymorphicProps` with an optional `ref` prop.
 *
 * @template C - The element type.
 * @template Props - The custom props type (defaults to an empty object).
 */
export type PolymorphicPropsWithRef<
  C extends React.ElementType,
  Props = Record<string, unknown>,
> = PolymorphicProps<C, Props> & { ref?: PolymorphicRef<C> };

/**
 * Represents a polymorphic component type.
 * This is a reusable type signature for components that can render as different elements or components.
 *
 * @template D - The default element type (defaults to 'div').
 * @template Props - The custom props type (defaults to an empty object).
 */
export type PolymorphicComponent<
  D extends React.ElementType = 'div',
  Props = Record<string, unknown>,
> = (<C extends React.ElementType = D>(
  props: PolymorphicPropsWithRef<C, Props>,
) => React.JSX.Element | null) & {
  displayName?: string;
};
