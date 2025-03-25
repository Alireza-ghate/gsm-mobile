import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="bg-gray-100 p-4">{children}</main>
      <Footer />
    </>
  );
}
