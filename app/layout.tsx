// app/layout.tsx
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css"; // Keep global styles

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={'bg-neutral-100'}>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
