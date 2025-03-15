import { Button } from "../ui/button";

function LoginButton() {
  return (
    <Button
      size="sm"
      className="mr-auto border px-2 py-1.5 lg:p-4.5 border-blue-500 text-blue-500 cursor-pointer hover:bg-gray-100"
      variant="outline"
    >
      ورود | ثبت نام
    </Button>
  );
}

export default LoginButton;
