import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="bg-primary text-white py-4 px-4 font-medium fixed inset-x-0 flex">
        <h1 className="text-lg md:text-xl lg:text-2xl">New Rekt KMITL</h1>
        <div className="gap-x-2 lg:gap-x-8 flex ml-auto text-sm md:text-lg lg:text-xl items-center">
          <Link href="/">หน้าหลัก</Link>
          <Link href="https://www.kmitl.ac.th/th/article/kmitl-mind-room-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%A3%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%AB%E0%B8%B2%E0%B9%83%E0%B8%88#:~:text=%E0%B8%AA%E0%B8%88%E0%B8%A5.%20%E0%B8%A1%E0%B8%B5%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3,)%20%E0%B9%82%E0%B8%97%E0%B8%A3%20091%2D886%2D4823">
            สายด่วนสุขภาพจิต
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
