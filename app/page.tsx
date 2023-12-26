'use client';
import Thunder from "@/components/Thunder";

const homepage = () => {
  return (
    <div className="min-h-screen w-full bg-black flex justify-center items-center">
      <div className="w-full text-white text-7xl p-8 font-bold">
        <p>If</p>
        <p>You dont feel the blaze</p>
      </div>
      <div className=" h-screen w-full flex justify-end items-end">
        <Thunder />
      </div>
    </div>
  );
};

export default homepage;
