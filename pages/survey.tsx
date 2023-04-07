import Navbar from "@/components/Navbar";
import { quotes } from "@/components/quotes";
import { NextPage } from "next";
import { useMemo, useState } from "react";

const SurveyPage: NextPage = () => {
  const [show, setShow] = useState(false);

  const randomNumber = useMemo(() => Math.floor(Math.random() * quotes.length), [quotes]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col px-6 py-4 lg:grid grid-cols-2 gap-y-6 lg:gap-x-12 mt-20">
        <h1 className="text-lg md:text-xl bg-primary text-white px-2 py-2 lg:max-w-2xl">
          กรอกคะแนน Midterm ที่ท่านได้ (เต็ม 50)
        </h1>
        <input
          className="text-4xl border-black border-2 w-5/6 lg:max-w-lg rounded-lg mt-2"
          type="number"
          name="score"
          id="score"
          min={0}
          max={50}
        />
        <h1 className="text-lg md:text-xl bg-primary text-white px-2 py-2 mt-8 lg:mt-0 lg:max-w-2xl">
          กรอกคะแนนขั้นต่ำของวิชาที่จะได้เกรด D
        </h1>
        <input
          className="text-4xl border-black border-2 w-5/6 lg:max-w-lg rounded-lg mt-2"
          type="number"
          name="score"
          id="score"
          min={0}
          max={80}
        />
        <button
          onClick={() => setShow(true)}
          className="w-full bg-primary text-white rounded-md text-xl lg:text-3xl lg:max-w-xl lg:mx-auto font-medium py-1.5 mt-8 lg:my-0"
        >
          คำนวณผลลัพธ์
        </button>
        {show && (
          <h1 className="my-16 lg:my-8 text-5xl text-center lg:text-left font-extrabold text-red-600">
            {quotes[randomNumber]}
          </h1>
        )}
      </main>
    </>
  );
};

export default SurveyPage;
