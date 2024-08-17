import { FormEventHandler, ReactNode } from "react";

type FormWrapperProps = {
  children: ReactNode;
  formDisabled?: boolean;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export default function FormWrapper({
  children,
  formDisabled = false,
  onSubmit,
}: FormWrapperProps) {
  return (
    <form onSubmit={onSubmit} className="px-4 mt-4 flex flex-col gap-4">
      {children}
      <button
        type="submit"
        disabled={formDisabled}
        className="bg-green-400 py-1 rounded-lg  w-full self-center disabled:bg-gray-400 disabled:text-gray-800 font-bold"
      >
        Save
      </button>
    </form>
  );
}
