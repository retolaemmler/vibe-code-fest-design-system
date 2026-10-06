import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { Container } from "./layout";
import { Button } from "./button";
import { Icon } from "./icon";
import { MobileNavigationContext } from "./navigation-context";

export const navbarVariants = cva("w-full", {
  variants: {
    variant: {
      solid: "border-b border-border bg-background",
      glass: "surface-glass rounded-none",
      transparent: "bg-transparent",
    },
    sticky: { true: "sticky top-0 z-50", false: "" },
  },
  defaultVariants: { variant: "solid", sticky: false },
});

export interface NavbarProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navbarVariants> {
  brand?: React.ReactNode;
  actions?: React.ReactNode;
}

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, variant, sticky, brand, actions, children, ...props }, ref) => {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
      const desktop = window.matchMedia("(min-width: 768px)");
      const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
      desktop.addEventListener("change", closeOnDesktop);
      return () => desktop.removeEventListener("change", closeOnDesktop);
    }, []);

    return (
    <header
      ref={ref}
      className={cn(navbarVariants({ variant, sticky }), className)}
      {...props}
    >
      <Container className="flex h-16 items-center justify-between gap-2 lg:gap-6">
        <div className="flex shrink-0 items-center gap-2">{brand}</div>
        <nav className="hidden min-w-0 items-center gap-0 md:flex lg:gap-1">{children}</nav>
        <div className="flex shrink-0 items-center gap-2">
          {actions}
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation">
                <Icon name="menu" />
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Content
                aria-describedby={undefined}
                className="fixed inset-0 z-50 flex h-dvh w-full flex-col bg-background text-foreground outline-none md:hidden"
              >
                <Dialog.Title className="sr-only">Navigation</Dialog.Title>
                <Container className="flex h-16 shrink-0 items-center justify-between gap-2">
                  <div onClick={() => setOpen(false)}>{brand}</div>
                  <Dialog.Close asChild>
                    <Button variant="ghost" size="icon" aria-label="Close navigation">
                      <Icon name="close" />
                    </Button>
                  </Dialog.Close>
                </Container>
                <Container className="min-h-0 flex-1 overflow-y-auto py-6">
                  <MobileNavigationContext.Provider value={true}>
                    <nav
                      aria-label="Mobile navigation"
                      className="flex flex-col items-stretch gap-3"
                      onClick={(event) => {
                        if (event.target instanceof Element && event.target.closest("a[href]:not([aria-disabled='true'])")) setOpen(false);
                      }}
                    >
                      {children}
                    </nav>
                  </MobileNavigationContext.Provider>
                  <div className="mt-6 flex flex-wrap items-center gap-2">{actions}</div>
                </Container>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </Container>
    </header>
    );
  },
);
Navbar.displayName = "Navbar";
