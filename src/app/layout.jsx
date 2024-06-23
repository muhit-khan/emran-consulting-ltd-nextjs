import RootLayout from "@/components/RootLayout";
import "./globals.css";

// Import the Poppins and Outfit fonts with specific weights
import { Poppins, Outfit } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Emran Consulting Ltd.",
  description: "Developed by Muhit Khan",
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full bg-neutral-950 text-base antialiased text-neutral-100 ${outfit.className}`}
    >
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
