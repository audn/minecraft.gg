import { Button } from '../../../lib/interfaces';
import concat from '../../../utils/helpers/concat';
import LoadingIcon from '../../misc/LoadingIcon';

function PrimaryButton({
  title,
  disabled,
  icon,
  isLoading,
  className,
}: Button.Base) {
  return (
    <button
      disabled={disabled}
      className={concat(
        className ? className : '',
        'flex items-center px-10 py-3 bordder-t-4 border-types-green bg-types-green/80 btn-border-green btn-primary text-2xl shadow font-minecraft font-bold',
      )}
    >
      {isLoading ? (
        <LoadingIcon />
      ) : (
        <>
          {icon && (
            <span className="flex items-center mr-2 text-lg">
              <i className={icon} />
            </span>
          )}
          {title}
        </>
      )}
    </button>
  );
}

export default PrimaryButton;
