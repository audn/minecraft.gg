import { Form } from '../../../lib/interfaces';
import concat from '../../../utils/helpers/concat';

function Input({
  value,
  type,
  onChange,
  id,
  disabled,
  placeholder,
  inputClassName,
}: Form.Input) {
  return (
    <div className="w-full ">
      <input
        placeholder={placeholder}
        id={id}
        type={type}
        disabled={disabled}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={concat(
          inputClassName ? inputClassName : '',
          disabled
            ? 'bg-opacity-50 cursor-not-allowed text-on-200 after:!text-on-150'
            : 'focus:bg-types-150',
          'w-full px-5 py-3 transition duration-150 ease-out outline-none scrollbar-none bg-types-150 input-field input-border text-xl',
        )}
      />
    </div>
  );
}

export default Input;
