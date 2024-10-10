// import dynamic from 'next/dynamic';
// export default dynamic(() => import('@/pageComponents/Home'));
import { getPage } from '@/api/utils';
import HomeMain from '@/pageComponents/Home/HomeMain';

export default async function Home() {
  const pageData = await getPage('home'); // get key from api

  return <HomeMain pageData={pageData} />;
}
