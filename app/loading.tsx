import { LoaderCircle } from "lucide-react";

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="flex items-center gap-1">
        <LoaderCircle size={18} className="text-blue-400" />
        <p>loading...</p>
      </div>
    </div>
  );
}

export default Loader;
