import Image from "next/image";

const Logo = () => {
  return (
    <main>
      <div className="hidden md:flex items-center gap-x-2">
        <Image
          src="/logo-dark.png"
          alt="logo"
          height="40"
          width="40"
          className="dark:hidden"
        />
        <Image
          src="/logo.png"
          alt="logo"
          height="40"
          width="40"
          className="hidden dark:block"
        />
        <p>
          <span className="underline">Notes</span>
        </p>
      </div>
    </main>
  );
};
export default Logo;
