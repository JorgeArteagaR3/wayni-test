import { useForm } from "react-hook-form";
import FormWrapper from "../components/FormWrapper";
import Input from "../components/ui/Input";
import { ChangePasswordFormInputs } from "../types/user";
import { changePassword } from "../services/user";
import { ErrorMessage } from "@hookform/error-message";
import { FaCircleCheck } from "react-icons/fa6";
import ErrorText from "../components/ui/ErrorText";
import { useUser } from "../context/UserContext";
import { toast } from "sonner";

export default function ChangePasswordPage() {
  const form = useForm<ChangePasswordFormInputs>();
  const { errors } = form.formState;
  const { setUser } = useUser();
  const handleSubmit = form.handleSubmit(async (data) => {
    toast.promise(changePassword(data), {
      loading: "Loading...",
      success: "Password updated succesfully",
    });

    setUser((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        password: data.newPassword,
      };
    });
    form.reset();
  });

  const password = form.watch("newPassword");
  const confirmPassword = form.watch("confirmPassword");
  const { user } = useUser();
  console.log(user);
  return (
    <section>
      <FormWrapper onSubmit={handleSubmit}>
        <Input
          key="Old password"
          inputLabel="Old password"
          placeholder="************"
          {...form.register("currentPassword", {
            required: true,
            validate: (value) =>
              value === user?.password || "Incorrect password",
          })}
          type="password"
          showAdornments
        >
          <ErrorMessage
            errors={errors}
            name="currentPassword"
            render={({ message }) => <ErrorText message={message} />}
          />
        </Input>
        <Input
          key="New password"
          inputLabel="New password"
          placeholder="************"
          type="password"
          showAdornments
          {...form.register("newPassword", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            maxLength: {
              value: 16,
              message: "Password must not exceed 16 characters",
            },
            validate: {
              hasUpperCase: (value) =>
                /[A-Z]/.test(value) ||
                "Password must contain at least one uppercase letter",
              hasSpecialChar: (value) =>
                /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                "Password must contain at least one special character",
            },
          })}
        >
          <ErrorMessage
            errors={errors}
            name="newPassword"
            render={({ message }) => <ErrorText message={message} />}
          />
        </Input>
        <Input
          key="Confirm password"
          inputLabel="Confirm Password"
          placeholder="************"
          showAdornments
          type="password"
          {...form.register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) => value === password || "Passwords do not match",
          })}
        >
          <ErrorMessage
            name="confirmPassword"
            errors={errors}
            render={({ message }) => <ErrorText message={message} />}
          />
        </Input>
        {form.formState.isValid && password === confirmPassword && (
          <p className="text-left text-green-500 font-bold flex items-center gap-2 ">
            {<FaCircleCheck className="w-max" />}
            Passwords Match
          </p>
        )}
        {form.formState.isValid && (
          <p className="text-left text-green-500 font-bold flex items-center gap-2">
            {<FaCircleCheck className="w-max" />}
            Password includes at least 1 uppercase and a special character
          </p>
        )}
      </FormWrapper>
    </section>
  );
}
