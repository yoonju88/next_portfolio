import Intro from '@/components/home/Intro'
import { Suspense } from 'react';
import LoadingCard from '@/components/loading/LoadingCard';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations()
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col-reverse items-center">
        <Suspense fallback={<LoadingCard />}>
          <Intro
            title={t('home.title')}
            subt={t('home.subt')}
            description={t('home.description')}
          />
        </Suspense>
      </div>
    </section>
  );
}
