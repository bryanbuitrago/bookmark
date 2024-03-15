import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({ subsets: ['latin'], sans: ['Rubik', 'sans-serif'] });

export const metadata = {
  title: 'Bookmark Landing Page',
  description:
    'Bookmark is a modern and minimalistic tool to manage your bookmarks.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${rubik.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
