import { useUser } from "../context/UserContext";
import RouteItem from "./RouteItem";

export default function Dashboard() {
  const { user } = useUser();
  return (
    <div className="flex flex-col px-4 pt-6">
      {user &&
        Object.entries(user).map(([key, value]) => {
          if (key !== "id" && key !== "password") {
            return <RouteItem key={key} href={key} label={key} value={value} />;
          }
        })}
      <RouteItem
        key={"changepassword"}
        href={"change-password"}
        label={"Change Password"}
        className="rounded-b-lg"
      />
      <RouteItem
        className="mt-6 rounded-lg"
        key={"delete-account"}
        href={"/"}
        label={"Delete my account"}
      />
      <RouteItem
        className="mt-4 rounded-lg"
        key={"notifications"}
        href={"/"}
        value="On"
        label={"Notifications"}
      />
    </div>
  );
}
