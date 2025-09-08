import Intro from '@/components/home/Intro'
import { Suspense } from 'react';
import LoadingCard from '@/components/loading/LoadingCard';


export default async function Home() {
  return (
    <section className="text-gray-600 body-font">
      <div className="mx-auto flex px-5 py-10 md:flex-row flex-col-reverse items-center">
        <Suspense fallback={<LoadingCard />}>
          <Intro />
        </Suspense>
      </div>
    </section>
  );
}
