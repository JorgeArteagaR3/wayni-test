import {
  InputHTMLAttributes,
  useId,
  forwardRef,
  ForwardedRef,
  ReactNode,
  useState,
} from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
  inputLabel: string;
  children?: ReactNode;
  showAdornments?: boolean;
};

const Input = forwardRef(
  (props: CustomInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const id = useId();
    const { inputLabel, children, showAdornments = false, ...rest } = props;
    const [type, setType] = useState<undefined | string>(undefined);

    const toggleType = () => {
      if (type === "text") {
        setType("password");
      } else {
        setType("text");
      }
    };

    return (
      <div className="flex flex-col text-start gap-2  overflow-hidden">
        <label htmlFor={id}>{inputLabel}</label>
        <div className="relative">
          <input
            id={id}
            className="w-full border outline-none px-2 py-1 rounded focus:border-blue-300"
            ref={ref}
            {...rest}
            type={type || props.type}
          />
          {showAdornments && (
            <button
              onClick={toggleType}
              className="absolute right-4 top-0 bottom-0 my-auto flex items-center outline-none h-fit"
            >
              {type === "text" ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          )}
        </div>
        <div>{children}</div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
