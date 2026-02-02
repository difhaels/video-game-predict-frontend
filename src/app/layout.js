import "./globals.css";
import MainLayout from "@/components/MainLayout";

export const metadata = {
  title: "VGP - Video Game Predictor",
  description: "Analyze and Predict Video Game Sales using AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}