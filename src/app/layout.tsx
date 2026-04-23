import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: {
    default: '玉米病虫害智能检测系统 | Corn Pest Detection AI',
    template: '%s | 玉米病虫害智能检测系统',
  },
  description:
    '利用先进的人工智能技术，为农业生产者提供精准、快速、可靠的玉米病虫害识别与诊断服务。守护粮食安全，从智能检测开始。',
  keywords: [
    '玉米病虫害',
    '病虫害识别',
    'AI农业',
    '智能检测',
    '农作物病害',
    'Corn Pest Detection',
    'AI Agriculture',
    '智能农业',
  ],
  authors: [{ name: 'Corn Pest AI Team' }],
  generator: 'AI-Powered Platform',
  icons: {
    icon: '/leaf-icon.svg',
  },
  openGraph: {
    title: '玉米病虫害智能检测系统 | Corn Pest Detection AI',
    description:
      '利用先进的人工智能技术，为农业生产者提供精准、快速、可靠的玉米病虫害识别与诊断服务。',
    url: 'https://cornpestai.com',
    siteName: '玉米病虫害智能检测系统',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
