import './globals.css'; 
import { Playfair_Display, Quicksand, Caveat } from "next/font/google";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const quicksand = Quicksand({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
});

// Yahan se 'weight' array hata diya gaya hai kyunki Caveat ek variable font hai
const caveat = Caveat({ 
  subsets: ["latin"], 
  variable: "--font-caveat",
});

export const metadata = {
  title: 'Menopause Care - Midlife Health',
  description: 'Your midlife health reimagined with expert integrated care.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${quicksand.className} ${playfair.variable} ${quicksand.variable} ${caveat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}