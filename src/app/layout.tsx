import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { GoogleAnalytics } from '@next/third-parties/google';
import Layout from '@/pageComponents/layout';
import { getGlobalConfig, getHeader, getFooter } from '@/api/utils';

export async function generateMetadata(): Promise<Metadata> {
  const globalConfig = await getGlobalConfig();
  return {
    title: globalConfig.meta.title,
    description: globalConfig.meta.description,
    keywords: globalConfig.meta.keywords,
    icons: globalConfig.meta.favicon,
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headerData = await getHeader();
  const footerData = await getFooter();

  const env = process.env.NEXT_PUBLIC_NETWORK_ENV;
  const googleAnalyticsId = env === 'mainnet' ? process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '' : '';
  return (
    <html lang="en">
      <body>
        <Layout headerData={headerData} footerData={footerData}>
          {children}
        </Layout>
      </body>
      {googleAnalyticsId && <GoogleAnalytics gaId={googleAnalyticsId} />}
    </html>
  );
}
