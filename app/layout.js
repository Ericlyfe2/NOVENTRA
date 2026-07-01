import "./globals.css";

export const metadata = {
  title: "Noventra Technologies | Secure & Scalable Software",
  description:
    "We engineering high-performance digital ecosystems that empower global enterprises and fast-growing startups with precision and agility.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Geist:wght@400;500&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface font-body-md selection:bg-primary selection:text-on-primary">
        {children}
      </body>
    </html>
  );
}
