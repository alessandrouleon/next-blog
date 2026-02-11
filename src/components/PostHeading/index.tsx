import clsx from 'clsx';
import Link from 'next/link';

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as: 'h1' | 'h2';
};
export const PostHeading = ({
  children,
  url,
  as: TagH = 'h1',
}: PostHeadingProps) => {
  const headingClassMap = {
    h1: 'text-2xl/tight font-extrabold sm:text-4xl',
    h2: 'text-2xl/tight font-extrabold sm:text-3xl',
  };

  const commonClasses = 'font-extrabold';
  return (
    <TagH className={clsx(commonClasses, headingClassMap[TagH])}>
      <Link href={url}>{children}</Link>
    </TagH>
  );
};
