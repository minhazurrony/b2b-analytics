import { Poppins } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/custom/app-layout";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "B2B Analytics",
  description:
    "A powerful B2B analytics platform that helps businesses turn raw data into clear, actionable insights. Monitor KPIs, streamline reporting, and scale smarter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
        style={{ background: "var(--color-dime-purple-blue-gradient)" }}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
