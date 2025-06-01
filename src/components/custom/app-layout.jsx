import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function AppLayout({ children, topbar, sidebar }) {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <aside
        className="w-64 h-full hidden md:block"
        style={{ background: "var(--color-dime-purple-blue-gradient)" }}>
        <ScrollArea className="h-full p-4">{sidebar}</ScrollArea>
      </aside>

      {/* Main content */}
      <main className="flex flex-col flex-1">
        {/* Topbar */}
        {topbar && (
          <>
            <header className="h-16 border-b border-muted bg-background px-4 flex items-center justify-between">
              {topbar}
            </header>
            <Separator />
          </>
        )}

        {/* Page Content */}
        <div className="flex-1 overflow-auto px-12 py-6 bg-dime-light-grey rounded-tl-lg rounded-tr-lg mt-4 mr-4">
          {children}
        </div>
      </main>
    </div>
  );
}
