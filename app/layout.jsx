import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default:
      "Sajal Portfolio | Frontend Designer | Backend Developer | Full Stack Developer",
  },
  description:
    "Sajal Portfolio | Frontend Designer | Backend Developer | Full Stack Developer",
  openGraph: {
    title:
      "Sajal Portfolio | Frontend Designer | Backend Developer | Full Stack Developer",
    description:
      "Sajal Portfolio | Frontend Designer | Backend Developer | Full Stack Developer",
    url: "https://portfolio-dev-omega-puce.vercel.app/",
    siteName:
      "Sajal Portfolio | Frontend Designer | Backend Developer | Full Stack Developer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-col-1">
        {children}
      </body>
    </html>
  );
}
