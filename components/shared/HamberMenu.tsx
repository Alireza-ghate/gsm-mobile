import { Menu, X } from "lucide-react";

type HamberMenuProp = {
  isOpen: boolean;
  onClick: () => void;
};

function HamberMenu({ isOpen, onClick }: HamberMenuProp) {
  return (
    <div onClick={onClick} className="text-2xl lg:hidden p-1 cursor-pointer">
      {isOpen ? <X /> : <Menu />}
    </div>
  );
}

export default HamberMenu;
