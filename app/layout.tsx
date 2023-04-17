import { Inter } from "next/font/google";
import { GlobalProvider } from "./globalContext/searchContext";
import GlobalStyle from "./styles/global";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <GlobalProvider>
            <GlobalStyle />
            {children}
          </GlobalProvider>
        </main>
      </body>
    </html>
  );
}
