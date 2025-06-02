import {
  LayoutDashboard,
  Rocket,
  CreditCard,
  Mails,
  FileCheck,
  Settings,
  CookingPot,
} from "lucide-react";
import React from "react";
import { Logo } from "@/assets/images/logo";

const MENU_ITEMS = {
  top: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
    },
    {
      title: "Launchpad",
      url: "#",
      icon: Rocket,
    },
    {
      title: "Payments",
      url: "#",
      icon: CreditCard,
    },
    {
      title: "Messages",
      url: "#",
      icon: Mails,
    },
    {
      title: "Tasks",
      url: "#",
      icon: FileCheck,
    },
  ],

  bottom: [
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
    {
      title: "Launchpad",
      url: "#",
      icon: CookingPot,
    },
  ],
};

const MenuItemsContainer = ({ items }) => (
  <div className="space-y-1.5">
    {items.map(({ title, url, icon: Icon }) => (
      <a
        key={title}
        href={url}
        className="flex items-center gap-2 rounded p-2 text-xs font-semibold text-dime-field-grey hover:bg-dime-light-purple">
        <Icon className="w-4 h-4" />
        <span>{title}</span>
      </a>
    ))}
  </div>
);

export const AppSidebar = () => {
  return (
    <aside
      className="w-[176px] h-full hidden md:block p-4"
      style={{ background: "var(--color-dime-purple-blue-gradient)" }}>
      <Logo />
      <div className="mt-8 flex h-[calc(100vh-5rem)] flex-col justify-between">
        <MenuItemsContainer items={MENU_ITEMS.top} />
        <MenuItemsContainer items={MENU_ITEMS.bottom} />
      </div>
    </aside>
  );
};
