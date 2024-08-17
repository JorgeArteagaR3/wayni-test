import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { cn } from "../utils/utils";

type RouteItemProps = {
  href: string;
  label: string;
  value?: string;
  className?: string;
};

export default function RouteItem({
  href,
  label,
  value,
  className,
}: RouteItemProps) {
  return (
    <Link
      to={href}
      className={cn(
        "hover:bg-blue-50 duration-150 border flex justify-between items-center border-blue-200 w-full py-2 first:rounded-t-lg text-black text-left px-2",
        className
      )}
    >
      <div>
        <p className="capitalize">{label}</p>
        <p className="text-sm opacity-50">{value}</p>
      </div>
      {label !== "email" && label !== "phoneNumber" && (
        <MdOutlineKeyboardArrowRight className="size-8 text-gray-400" />
      )}
    </Link>
  );
}
