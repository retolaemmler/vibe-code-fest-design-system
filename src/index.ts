// Side-effect import: consumers get the design tokens by importing the library.
import "./index.css";

export { Fonts, type FontsProps } from "./components/ui/fonts";

export { cn } from "./lib/utils";

export { Button, buttonVariants, type ButtonProps } from "./components/ui/button";
export { Badge, badgeVariants, type BadgeProps } from "./components/ui/badge";
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  cardVariants,
  type CardProps,
} from "./components/ui/card";
export {
  Container,
  containerVariants,
  Section,
  sectionVariants,
  type ContainerProps,
  type SectionProps,
} from "./components/ui/layout";
export {
  Heading,
  headingVariants,
  Text,
  textVariants,
  type HeadingProps,
  type TextProps,
} from "./components/ui/typography";
export { Link, linkVariants, type LinkProps } from "./components/ui/link";
export {
  Icon,
  icons,
  iconVariants,
  type IconName,
  type IconProps,
} from "./components/ui/icon";
export { Input, inputVariants, type InputProps } from "./components/ui/input";
export { Avatar, avatarVariants, type AvatarProps } from "./components/ui/avatar";
export {
  SpeakerCard,
  type SpeakerCardProps,
} from "./components/ui/speaker-card";
export {
  SponsorCard,
  sponsorCardVariants,
  type SponsorCardProps,
} from "./components/ui/sponsor-card";
export {
  Schedule,
  scheduleVariants,
  type ScheduleProps,
  ScheduleCategory,
  scheduleCategoryVariants,
  type ScheduleCategoryProps,
  scheduleLineVariants,
  scheduleTimeVariants,
  ScheduleItem,
  scheduleItemVariants,
  scheduleMarkerVariants,
  type ScheduleItemProps,
  ScheduleHeader,
  scheduleHeaderVariants,
  scheduleHeaderMedallionVariants,
  type ScheduleHeaderProps,
} from "./components/ui/schedule-item";
export { Stat, statVariants, type StatProps } from "./components/ui/stat";
export { Faq, FaqItem, FaqTrigger, FaqContent } from "./components/ui/faq";
export { Navbar, navbarVariants, type NavbarProps } from "./components/ui/navbar";
export {
  Footer,
  footerVariants,
  type FooterLink,
  type FooterProps,
} from "./components/ui/footer";
export {
  FeatureCard,
  featureMedallionVariants,
  type FeatureCardProps,
} from "./components/ui/feature-card";
export { CtaPanel, type CtaPanelProps } from "./components/ui/cta-panel";
export {
  TicketCard,
  TicketHeader,
  TicketTitle,
  TicketDescription,
  TicketPrice,
  TicketRegular,
  ticketCardVariants,
  type TicketCardProps,
  type TicketRegularProps,
} from "./components/ui/ticket-card";
export { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "./components/ui/social-icons";
