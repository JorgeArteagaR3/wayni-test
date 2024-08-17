import { useForm } from "react-hook-form";
import FormWrapper from "../components/FormWrapper";
import Input from "../components/ui/Input";
import { NameFormInputs } from "../types/user";
import { updateUserName } from "../services/user";
import { useUser } from "../context/UserContext";

export default function NamePage() {
  const form = useForm<NameFormInputs>();
  const { setUser } = useUser();
  const handleSubmit = form.handleSubmit(async (data) => {
    await updateUserName(data);
    setUser((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        name: `${data.firstName} ${data.lastName}`,
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
          inputLabel="First Name"
          placeholder="Your first name"
          {...form.register("firstName", { required: true })}
        />
        <Input
          inputLabel="Last Name"
          placeholder="Your Last name"
          {...form.register("lastName", { required: true })}
        />
      </FormWrapper>
    </section>
  );
}
