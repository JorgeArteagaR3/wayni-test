import { useForm } from "react-hook-form";
import FormWrapper from "../components/FormWrapper";
import Input from "../components/ui/Input";
import { UserUserNameFormInputs } from "../types/user";
import { useUser } from "../context/UserContext";
import { updateUserUsername } from "../services/user";

export default function UserNamePage() {
  const { user } = useUser();

  const form = useForm<UserUserNameFormInputs>();

  const handleSubmit = form.handleSubmit(async ({ newUserName }) => {
    if (!user) return;

    await updateUserUsername({
      oldUserName: user.name,
      newUserName: newUserName,
    });
    form.reset();
  });
  return (
    <section>
      <FormWrapper
        formDisabled={!form.formState.isValid && form.formState.isDirty}
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
