'use client';
import clsx from 'clsx';

export default function Footer() {
  return (
    <div>
      <h1
        className={clsx(
          'text-1xl font-bold',
          'text-blue-500',
          'transition duration-1000',
          'hover:scale-105',
          'hover:bg-blue-50',
        )}
      >
        Footer
      </h1>
    </div>
  );
}
