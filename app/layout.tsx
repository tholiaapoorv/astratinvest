// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import localFonts from "next/font/local";
// import { Toaster } from "sonner";

// const inter = Inter({ subsets: ["latin"] });

// const ivy = localFonts({
//   src: [
//     {
//       path: "../fonts/IvyMode-Regular.ttf",
//     },
//   ],
//   variable: "--ivy",
// });

// const ivy_thin = localFonts({
//   src: [
//     {
//       path: "../fonts/IvyMode-ThinItalic.ttf",
//     },
//   ],
//   variable: "--ivy-thin",
// });

// export const metadata: Metadata = {
//   title: "AStratinvest",
//   description: "Unlock Opportunities with Quant",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${inter.className} ${ivy.variable} ${ivy_thin.variable}`}
//       >
//         {children}
//         <Toaster closeButton richColors />
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFonts from "next/font/local";
import { Toaster } from "sonner";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const ivy = localFonts({
  src: [{ path: "../fonts/IvyMode-Regular.ttf" }],
  variable: "--ivy",
});

const ivy_thin = localFonts({
  src: [{ path: "../fonts/IvyMode-ThinItalic.ttf" }],
  variable: "--ivy-thin",
});

export const metadata: Metadata = {
  title: "AStratinvest",
  description: "Unlock Opportunities with Quant",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Redirect all pages to "/back-soon"
  redirect("/back-soon");

  return (
    <html lang="en">
      <body className={`${inter.className} ${ivy.variable} ${ivy_thin.variable}`}>
        {children}
        <Toaster closeButton richColors />
      </body>
    </html>
  );
}
