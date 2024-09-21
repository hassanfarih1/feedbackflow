
import { Dela_Gothic_One } from "next/font/google";
import "./globals.css";



const nerko = Dela_Gothic_One({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata = {
  title: "FeedbackFlow",
  description: "FeedbackFlow empowers businesses to gather, analyze, and manage valuable feedback from their users, helping to enhance services and foster stronger communities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nerko.className} bg-colorBg`}
      >
        {children}
      </body>
    </html>
  );
}
