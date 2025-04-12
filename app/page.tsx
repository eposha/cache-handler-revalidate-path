import { unstable_cache } from 'next/cache';
import Buttons from './components/buttons';

const getUnstableDate = unstable_cache(
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return Date.now();
  },
  ['test'],
  {
    tags: ['test'],
  }
);

// export const dynamic = 'force-dynamic';

// export const dynamic = 'force-static';

const getDirectDate = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return Date.now();
};

const Home = async () => {
  const unstableDate = await getUnstableDate();
  const directDate = await getDirectDate();

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <div>Unstable Date: {unstableDate}</div>
        <div>Direct Date: {directDate}</div>

        <Buttons />
      </main>
    </div>
  );
};

export default Home;
