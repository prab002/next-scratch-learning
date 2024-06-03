"use client";

import React from "react";
import {
  useRouter,
  useParams,
  useSearchParams,
  useServerInsertedHTML,
} from "next/navigation";

const PropertyPage = () => {
  const route = useRouter();
  const searchParams = useSearchParams();
  const { id } = useParams();
  const name = searchParams.get("name");

  return (
    <div>
      <button onClick={() => route.push("/Property")} className="p-23">
        back button :{id}
      </button>
      <h1>Property Details : {name} </h1>
    </div>
  );
};

export default PropertyPage;
