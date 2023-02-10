import { INavItem } from '../../../../../lib/interfaces';
import Link from '../../../../layout/Link';

function NavItem({ route, icon, label }: INavItem) {
  return (
    <Link
      href={route ?? '#'}
      className="inline-flex items-center justify-between w-full text-base font-medium rounded-md cursor-pointer sm:mt-0 hover:bg-header-200 bg-header-150 text-on-50 hover:text-white"
    >
      <span className="flex items-center animate">
        {label}
        {icon && (
          <div className="w-6 text-base text-right">
            <i className={`${icon}`} />
          </div>
        )}
      </span>
    </Link>
  );
}

export default NavItem;
