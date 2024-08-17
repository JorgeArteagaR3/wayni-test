import { useForm } from "react-hook-form";
import FormWrapper from "../components/FormWrapper";
import Input from "../components/ui/Input";
import { UserUserNameFormInputs } from "../types/user";
import { useUser } from "../context/UserContext";
import { updateUserUsername } from "../services/user";

export default function UserNamePage() {
  const { user, setUser } = useUser();

  const form = useForm<UserUserNameFormInputs>();

  const handleSubmit = form.handleSubmit(async ({ newUserName }) => {
    if (!user) return;

    await updateUserUsername({
      newUserName: newUserName,
    });
    setUser((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        username: newUserName,
      };
    });
    form.reset();
  });
  return (
    <section>
      <FormWrapper
        formDisabled={!form.formState.isValid}
        onSubmit={handleSubmit}
      >
        <Input
          inputLabel="User Name"
          placeholder={"New username"}
          {...form.register("newUserName", { required: true })}
        />
      </FormWrapper>
    </section>
  );
}
