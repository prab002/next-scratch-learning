"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.push("/Property")}
        className="bg-blue-500 p-2"
      >
        property button
      </button>
      <h1>lets try a tag in next js </h1>
      <Link href="/Property">visit this site</Link>
    </div>
  );
};

export default HomePage;
