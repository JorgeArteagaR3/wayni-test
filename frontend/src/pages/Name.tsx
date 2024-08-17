import { useForm } from "react-hook-form";
import FormWrapper from "../components/FormWrapper";
import Input from "../components/ui/Input";
import { NameFormInputs } from "../types/user";
import { updateUserName } from "../services/user";

export default function NamePage() {
  const form = useForm<NameFormInputs>();

  const handleSubmit = form.handleSubmit(async (data) => {
    await updateUserName(data);
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
