'use client';
import clsx from 'clsx';

export default function Header() {
  console.log('Header component rendered');
  return (
    <div>
      <h1
        className={clsx(
          'text-6xl font-bold',
          'text-blue-500',
          'transition duration-1000',
          'hover:scale-105',
          'hover:bg-blue-50',
        )}
        onClick={() => alert(123)}
      >
        Header Component
      </h1>
    </div>
  );
}
