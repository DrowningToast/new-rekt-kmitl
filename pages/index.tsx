import Link from "next/link";
import { DoorExit } from "tabler-icons-react";

const Index = () => {
  return (
    <main>
      <nav className="bg-primary text-white py-4 px-4 text-xl font-medium">
        New Rekt KMITL
      </nav>
      <div className="flex flex-col px-4 py-10 gap-y-4">
        <div className="flex items-center">
          <h2 className="text-4xl leading-10 font-medium">เหลือเวลาเวลาอีก</h2>
        </div>
        <h1 className="row-start-2 text-6xl font-bold">16 วัน 8 ชั่วโมง</h1>
        <div className="flex items-center row-start-3 ">
          <h3 className="text-3xl font-medium">ในการถอนวิชาเรียน</h3>
        </div>
        <div className="flex flex-col gap-y-4 pt-4">
          <Link
            href="https://new.reg.kmitl.ac.th/reg/?#/"
            target="_blank"
            className="w-full inline-block"
          >
            <button className="w-full bg-primary text-white rounded-md text-2xl font-medium py-1.5">
              กดถอนเลย
            </button>
          </Link>
          <Link
            href="/survey"
            className=" text-black underline underline-offset-2 rounded-md text-xl"
          >
            ยังไม่แน่ใจ?
          </Link>
        </div>
        <div className="grid place-items-center pt-8">
          <DoorExit size={216} strokeWidth={1.5} color={"black"} />
        </div>
      </div>
      {/* Banner */}
      <div className="text-white flex flex-col bg-secondary items-center gap-y-8 px-4 py-8">
        <h1 className="text-4xl font-semibold underline underline-offset-8">
          รู้หรือไม่
        </h1>
        <div className="flex flex-col items-center gap-y-2">
          <h2 className="text-4xl font-bold">99%</h2>
          <p className="text-lg text-center">
            ของคนที่ติด F นั้นเกิดจากเพราะลืมถอนรายวิชา
            ฉะนั้นจึงอย่ามัวรอคะแนนที่ยังไม่ได้ออกแล้วถอนเลย!
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <h2 className="text-4xl font-bold">50+</h2>
          <p className="text-lg text-center">
            คือเกณฑ์คะแนนการตัดเกรด D เป็นต้นไป ถึงแม้ว่าจะผ่านด้วยเกรด 1
            แต่ก็อาจจะเป็นการดึงเกรดลงทำให้ติดโปรได้
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <h2 className="text-4xl font-bold">45 วิ</h2>
          <p className="text-lg text-center">
            คือระยะเวลาเฉลี่ยที่ใช้ในการเข้าสู่ระบบสถาบัน New Reg และถอน
            เพราะฉะนั้นอย่ามัวรอและไปถอนกัน!
          </p>
        </div>
      </div>
      <span className="mt-16 inline-block text-center w-full">
        This website takes inspiration from CU GET REKT
      </span>
    </main>
  );
};

export default Index;
