import clsx from 'clsx';

type SpinLoaderProps = {
  containerClassName?: string;
};
export function SpinLoader({ containerClassName = '' }: SpinLoaderProps) {
  const classes = clsx(
    'flex',
    'items-center',
    ' justify-center',
    containerClassName,
  );
  return (
    <div className={classes}>
      <div
        className={clsx(
          'h-10 w-10',
          'border=sliate-500 rounded-full border-5 border-t-transparent',
          'animate-spin',
        )}
      ></div>
    </div>
  );
}
