"use client";
import Link from "next/link";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>this is proert page</h1>
      <Link href="/">Go home/back </Link>
      <button onClick={() => router.push("Property/123")} className="p-12">
        back to post{" "}
      </button>
    </div>
  );
};

export default PropertyPage;
