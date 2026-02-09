import Header from '@/components/Header';
import { SpinLoader } from '@/components/SpinLoader';

export default function HomePage() {
  console.log('HomePage ');
  return (
    <div>
      <Header />
      <span>body</span>
      <SpinLoader containerClassName="min-h-[500px] bg-amber-500" />
    </div>
  );
}
