import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { postRepository } from '@/repositories/post';
import { Suspense } from 'react';

export default async function HomePage() {
  const posts = await postRepository.findAll();
  return (
    <div>
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <Footer />
    </div>
  );
}
