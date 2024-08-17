export default function ErrorText({ message }: { message: string }) {
  return <p className="text-red-400 font-bold">{message}</p>;
}
