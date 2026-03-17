import Animations from "@/components/animations/Animations";
import Bootstrap from "@/components/shared/Bootstrap";
import GotoTop from "@/components/shared/GotoTop";
import "@/public/scss/main.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Էներջի սփփլայ",
  description: "Էներջի սփփլայ ընկերությունը հանդիսանում է էներգետիկայի ոլորտի առաջատար կազմակերպություն, որը տրամադրում է բարձրորակ էներգիայի լուծումներ և ծառայություններ: Մենք ձգտում ենք ապահովել մեր հաճախորդներին կայուն և արդյունավետ էներգիայի աղբյուրներ, որոնք համապատասխանում են ժամանակակից պահանջներին:",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.className}`}>
        <Bootstrap>
          {/* <Loader /> */}
          <Animations />
          <GotoTop />
          {children}
        </Bootstrap>
      </body>
    </html>
  );
}
