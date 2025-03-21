import HeaderClient from "./HeaderClient";

function Header() {
  // const session = await auth();
  // if pass whole "session" as prop into a client component this makes that client component dynamic rendering
  // if instead of passing session we use it directly in server component this dose NOT make the whole page dynamic
  // if we truly needed this session inside a client component instead of passing the whole session ONLY PASS THE NEEDED INFORMATIONS example:session?.user?.name
  // for avoid dynamic rendering pass "session" throught prop into client component

  return (
    <header className="bg-white border-b border-b-gray-200 z-50 relative">
      <HeaderClient />
    </header>
  );
}

export default Header;
