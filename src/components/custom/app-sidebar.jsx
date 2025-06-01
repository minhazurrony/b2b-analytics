import {
  LayoutDashboard,
  Rocket,
  CreditCard,
  Mails,
  FileCheck,
} from "lucide-react";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Logo } from "@/assets/images/logo";

// Menu items.
const items = [
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
];

export const AppSidebar = () => {
  return (
    <aside
      className="w-[176px] h-full hidden md:block"
      style={{ background: "var(--color-dime-purple-blue-gradient)" }}>
      <ScrollArea className="h-full p-4">
        <Logo />
        <div className="mt-8 space-y-1.5">
          {items.map((item) => {
            return (
              <a
                key={item.title}
                href={item.url}
                className="flex rounded p-2 text-center justify-start items-center gap-2 text-dime-field-grey text-xs font-semibold leading-[150%] hover:bg-dime-light-purple">
                <item.icon className="w-4 h-4" />
                <span>{item.title}</span>
              </a>
            );
          })}
        </div>
      </ScrollArea>
    </aside>
  );
};
