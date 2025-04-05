import Link from "next/link";
import { Button } from "../ui/button";

function LoginButton() {
  return (
    <Button
      asChild
      className="mr-auto border px-2 py-1.5 lg:p-4.5  cursor-pointer bg-blue-600 text-blue-50 hover:bg-blue-500  transition-colors duration-150"
      variant="outline"
    >
      <Link href={"/login"}>ورود | ثبت نام</Link>
    </Button>
  );
}

export default LoginButton;
