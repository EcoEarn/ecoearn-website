// import dynamic from 'next/dynamic';
// export default dynamic(() => import('@/pageComponents/Home'));
import HomeMain from '@/pageComponents/Home/HomeMain';

export default async function Home() {
  return <HomeMain />;
}
