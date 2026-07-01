import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "TR Properties | Thoughtful Properties. Lasting Value.",
  description:
    "Meet TR Properties and explore the properties and projects currently taking shape in our portfolio.",
  keywords: [
    "TR Properties",
    "property company",
    "property development",
    "real estate projects",
    "current properties"
  ],
  openGraph: {
    title: "TR Properties",
    description:
      "Thoughtful properties, careful stewardship, and a long-term approach to creating lasting value.",
    type: "website",
    images: []
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
