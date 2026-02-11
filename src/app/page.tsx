import { Container } from '@/components/Container';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { postRepository } from '@/repositories/post';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function HomePage() {
  const posts = await postRepository.findAll();
  return (
    <Container>
      <Header />
      <section className="group mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <Link href="#" className="h-full w-full overflow-hidden rounded-xl">
          <Image
            className="h-full w-full object-cover object-center transition group-hover:scale-105"
            src="/images/bryen_0.png"
            alt="Titulo do post"
            width={1200}
            height={768}
            priority
          />
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="block text-sm text-slate-600" dateTime="2026-01-02">
            02 de janeiro de 2026
          </time>

          <PostHeading
            as="h1"
            children="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            url="https://www.google.com"
          />

          <p>
            Quisquam accusamus voluptatibus, natus, repellat, quae voluptate
            officia reiciendis quod quas dolores autem quidem quibusdam
            necessitatibus molestias consectetur molestiae molestias consectetur
            molestiae molestias consectetur molestiae molestias consectetur
            molestiae molestias consectetur molestiae molestias consectetur?
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <Footer />
    </Container>
  );
}
