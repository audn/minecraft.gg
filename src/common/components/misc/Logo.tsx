import concat from '../../utils/helpers/concat';
import Link from '../layout/Link';

function Logo({ color }: { color?: 'blue' | 'dark' }) {
  return (
    <div className="flex">
      <Link
        href="/"
        className={concat(
          color === 'blue'
            ? 'bg-brand-primary-100/10 border-brand-primary-100/10'
            : 'bg-types-100/80 border-types-150',
          'flex items-center px-3 py-[0.35rem] text-xl text-white border rounded-md font- whitespace-nowrap ',
        )}
      >
        <img src="/logo.svg" className="w-6 h-6 mr-2" />
        minecraft.gg
      </Link>
    </div>
  );
}

export default Logo;
