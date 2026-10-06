import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { Icon } from "./icon";
import { linkVariants } from "./link";
import { MobileNavigationContext } from "./navigation-context";

export const navDropdownContentVariants = cva(
  "z-50 min-w-48 rounded-card border border-border bg-popover p-2 text-popover-foreground shadow-overlay",
  {
    variants: { align: { start: "", end: "" } },
    defaultVariants: { align: "start" },
  },
);

export const navDropdownItemVariants = cva(
  [
    "flex w-full cursor-pointer select-none items-center gap-2 rounded-field px-3 py-2 text-body text-foreground outline-none",
    "transition-colors duration-(--duration-fast) ease-(--ease-standard)",
    "hover:bg-primary-subtle hover:text-primary focus-visible:bg-primary-subtle focus-visible:text-primary data-[highlighted]:bg-primary-subtle data-[highlighted]:text-primary",
    "focus-visible:ring-2 focus-visible:ring-ring",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  ].join(" "),
  {
    variants: { active: { true: "text-primary", false: "" } },
    defaultVariants: { active: false },
  },
);

export interface NavDropdownProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenu.Root> {
  /** Trigger label, styled like Link variant="nav". */
  label: React.ReactNode;
  /** Marks the trigger as the current section. */
  active?: boolean;
  align?: "start" | "end";
  className?: string;
  children: React.ReactNode;
}

/** A nav link that opens a menu of NavDropdownItem links, with a chevron. */
export const NavDropdown = React.forwardRef<HTMLButtonElement, NavDropdownProps>(
  ({ label, active = false, align = "start", className, children, ...props }, ref) => {
    const mobile = React.useContext(MobileNavigationContext);
    if (mobile) return (
      <div className={cn("flex flex-col gap-1", className)}>
        <span className="px-3 py-2 text-small text-muted-foreground">{label}</span>
        {children}
      </div>
    );
    return (
    <DropdownMenu.Root modal={false} {...props}>
      <DropdownMenu.Trigger
        ref={ref}
        className={cn(
          linkVariants({ variant: "nav", active }),
          "group cursor-pointer data-[state=open]:text-primary disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
      >
        {label}
        <Icon
          name="chevronDown"
          aria-hidden
          className="transition-transform duration-(--duration-fast) group-data-[state=open]:rotate-180"
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align={align}
          sideOffset={8}
          className={navDropdownContentVariants({ align })}
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
    );
  },
);
NavDropdown.displayName = "NavDropdown";

export interface NavDropdownItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof navDropdownItemVariants> {
  disabled?: boolean;
}

/** One option inside a NavDropdown; renders an anchor. */
export const NavDropdownItem = React.forwardRef<HTMLAnchorElement, NavDropdownItemProps>(
  ({ className, active, disabled, ...props }, ref) => {
    const mobile = React.useContext(MobileNavigationContext);
    if (mobile) return (
      <a
        {...props}
        href={disabled ? undefined : props.href}
        ref={ref}
        aria-current={active ? "page" : undefined}
        aria-disabled={disabled || undefined}
        data-disabled={disabled ? "" : undefined}
        tabIndex={disabled ? -1 : props.tabIndex}
        className={cn(navDropdownItemVariants({ active }), className)}
      />
    );
    return (
    <DropdownMenu.Item asChild disabled={disabled}>
      <a
        ref={ref}
        aria-current={active ? "page" : undefined}
        className={cn(navDropdownItemVariants({ active }), className)}
        {...props}
      />
    </DropdownMenu.Item>
    );
  },
);
NavDropdownItem.displayName = "NavDropdownItem";
