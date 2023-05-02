import 'antd/dist/reset.css';

export const metadata = {
  title: 'Netcompany Tournament Organizer',
  description: 'Generated by create next app',
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
