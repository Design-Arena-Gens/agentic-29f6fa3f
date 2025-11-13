export const metadata = {
  title: 'DS',
  description: 'Minimal app for ds'
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
