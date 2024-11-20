import Intro from '@/components/home/Intro'

export default function Home() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col-reverse items-center">
        <Intro />
      </div>
    </section>
  );
}
