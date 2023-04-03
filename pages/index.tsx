import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useMemo } from "react";
import { DoorExit, H1, Run } from "tabler-icons-react";

const Index = () => {
  const deadline = useMemo(
    () =>
      new Date(
        `${process.env.NEXT_PUBLIC_date} ${process.env.NEXT_PUBLIC_time}`
      ),
    []
  );
  const now = new Date();
  const time = useMemo(() => {
    let diff = deadline.getTime() - now.getTime();

    let days = Math.floor(diff / (1000 * 3600 * 24));
    let hours = Math.floor((diff % (1000 * 3600 * 24)) / (1000 * 3600));
    return {
      days,
      hours,
    };
  }, [deadline]);

  return (
    <main>
      <Navbar />
      <div className="flex flex-col px-4 md:px-8 lg:px-12 py-10 gap-y-4 md:gap-y-2 md:grid grid-cols-2 md:my-8 lg:my-12">
        <div className="flex items-center">
          <h2 className="text-4xl leading-10 font-medium">เหลือเวลาเวลาอีก</h2>
        </div>
        {time.hours > 0 ? (
          <h1 className="row-start-2 text-6xl lg:text-8xl font-bold my-2">
            <div>{time.days} วัน</div>{" "}
            <div className="mt-3">{time.hours} ชั่วโมง</div>
          </h1>
        ) : (
          <h1 className="row-start-2 text-6xl lg:text-8xl font-bold">
            {" "}
            ถอนไม่ได้ละจ้า
          </h1>
        )}
        <div className="flex items-center row-start-3 ">
          <h3 className="text-3xl lg:text-4xl font-medium">
            ในการถอนวิชาเรียน
          </h3>
        </div>
        <div className="flex flex-col gap-y-4 pt-4 col-start-1 md:mr-20 lg:mr-48">
          <Link
            href="https://new.reg.kmitl.ac.th/reg/?#/"
            target="_blank"
            className="w-full inline-block"
          >
            <button className="w-full bg-primary text-white rounded-md text-2xl lg:text-3xl lg:font-bold font-medium py-1.5 lg:py-2">
              ไปถอนเลย
            </button>
          </Link>
          <Link
            href="/survey"
            className=" text-black underline underline-offset-2 rounded-md text-xl"
          >
            ยังไม่แน่ใจ?
          </Link>
        </div>
        <div className="grid place-items-center pt-4 col-start-2 row-span-4 row-start-1">
          <div className="grid place-items-center  md:scale-[1.4] lg:scale-[2] max-w-fit">
            <Run size={196} strokeWidth={3} color={"darkgray"} />
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="text-white flex flex-col lg:grid grid-cols-3 grid-rows-2 gap-x-2 lg:items-center bg-secondary  gap-y-8 px-4 py-8">
        <h1 className="col-span-3 lg:grid place-items-center text-4xl lg:text-6xl font-semibold underline underline-offset-8">
          รู้หรือไม่
        </h1>
        <div className="flex flex-col lg:gap-y-2">
          <h2 className="text-4xl lg:text-5xl font-bold">99%</h2>
          <p className="text-lg ">
            ของคนที่ติด F นั้นเกิดจากเพราะลืมถอนรายวิชา
            ฉะนั้นจึงอย่ามัวรอคะแนนที่ยังไม่ได้ออกแล้วถอนเลย!
          </p>
        </div>
        <div className="flex flex-col  lg:gap-y-2">
          <h2 className="text-4xl lg:text-5xl font-bold">50+</h2>
          <p className="text-lg ">
            คือเกณฑ์คะแนนการตัดเกรด D เป็นต้นไป ถึงแม้ว่าจะผ่านด้วยเกรด 1
            แต่ก็อาจจะเป็นการดึงเกรดลงทำให้ติดโปรได้
          </p>
        </div>
        <div className="flex flex-col  lg:gap-y-2">
          <h2 className="text-4xl lg:text-5xl font-bold">45 วิ</h2>
          <p className="text-lg ">
            คือระยะเวลาเฉลี่ยที่ใช้ในการเข้าสู่ระบบสถาบัน New Reg และถอน
            เพราะฉะนั้นอย่ามัวรอและไปถอนกัน!
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-4 items-center px-8 mt-16 ">
        <h3>ไม่มั่นใจกับคะแนนที่ได้ว่าจะทอนดีหรือไม่?</h3>
        <Link
          href="/survey"
          className=" inline-block w-full lg:grid place-items-center"
        >
          <button className="w-full bg-primary max-w-5xl text-white rounded-md text-xl lg:text-4xl font-medium py-1.5">
            ทำแบบทดสอบ
          </button>
        </Link>
      </div>
      <span className="mt-16 inline-block text-center w-full">
        This website takes inspiration from CU GET REKT
      </span>
    </main>
  );
};

export default Index;
