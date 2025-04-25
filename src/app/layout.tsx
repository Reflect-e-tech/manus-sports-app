export const metadata = {
  title: 'Manus Sports App',
  description: 'College Basketball Recruiting Management',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
