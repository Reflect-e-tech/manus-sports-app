export const metadata = {
  title: 'Manus Sports App',
  description: 'College Basketball Recruiting Management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
