import Image from "next/image";

const Heroes = () => {
  return (
    <main>
      <div className="flex flex-col items-center justify-center max-w-5xl">
        <div className="flex items-center">
          <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
            <Image
              fill
              className="object-contain dark:hidden"
              src="/document.png"
              alt="document"
            />
            <Image
              fill
              className="object-contain hidden dark:block"
              src="/document-modified.png"
              alt="document"
            />
          </div>
          <div className="relative h-[400px] w-[400px] hidden md:block">
            <Image
              fill
              className="object-contain dark:hidden"
              src="/reading.png"
              alt="document"
            />
            <Image
              fill
              className="object-contain hidden dark:block"
              src="/reading-modified.png"
              alt="document"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Heroes;
