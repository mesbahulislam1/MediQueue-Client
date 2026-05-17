import Banner from "@/components/Banner";
import Features from "@/components/Features";
import PlatformStats from "@/components/PlatformStats";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Banner></Banner>
      <Features></Features>
      <PlatformStats></PlatformStats>
    </div>
  );
}
