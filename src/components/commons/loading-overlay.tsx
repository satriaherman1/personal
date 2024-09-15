import DecoratorLeft from "@src/components/commons/decorator-left";
import Logo from "@src/components/commons/logo";
import classNames from "classnames";
import { useEffect, useState } from "react";

type Props = {
  className?: string;
};

export default function LoadingOverlay({ className }: Props) {
  const [progress, setProgress] = useState(0); // Mulai dari 80%

  useEffect(() => {
    // Progres pertama: dari 0% sampai 80% selama 1 detik
    const firstProgress = setTimeout(() => {
      setProgress(80);
    }, 10); // Memulai animasi dari 0 ke 80% dengan delay 100ms

    // Progres kedua: dari 80% ke 100% setelah 2 detik
    const secondProgress = setTimeout(() => {
      setProgress(100);
    }, 2100); // Delay 2 detik setelah mencapai 80%

    // Cleanup kedua timeout jika komponen di-unmount
    return () => {
      clearTimeout(firstProgress);
      clearTimeout(secondProgress);
    };
  }, []);

  return (
    <div
      className={classNames(
        "fixed inset-0 bg-white z-[1000] flex items-center justify-center duration-300 ",
        className
      )}
    >
      <DecoratorLeft className="absolute left-0 -bottom-10" fill="#c0c4c1" />
      <DecoratorLeft
        className="absolute right-0 -top-10 rotate-180"
        fill="#c0c4c1"
      />

      <div className="w-[60vw] max-w-[300px]">
        {/* Progress Bar Container */}
        <div className="w-full rounded-[100px] mx-auto">
          <div className="flex gap-x-4 mx-auto items-center mb-4 justify-center">
            <Logo width="35" height="35" />
            <span className="text-2xl font-semibold">Loading...</span>
          </div>
          {/* <span className="text-center text-lg mb-2">Loading</span> */}
          {/* Progress Bar */}
          <div className="p-1 rounded-full border-2 border-black relative overflow-hidden">
            <div className="w-[calc(100%-8px)] h-2 rounded-full bg-gray-200 absolute left-1 "></div>
            <div
              className="loading-progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
