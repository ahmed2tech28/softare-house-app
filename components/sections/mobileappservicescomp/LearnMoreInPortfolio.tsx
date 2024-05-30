import Link from "next/link";
import React from "react";

const LearnMoreInPortfolio = () => {
  return (
    <section className="container mx-auto py-[4rem]">
      <p className="text-[36px] text-center font-semibold md:w-[607px] w-[90%] mx-auto">
        Learn about Devhouse expertise in Projects Portfolio.{" "}
        <Link href={"/show-more"} className="text-[#0C8CE9]">
          Show more {"→"}
        </Link>
      </p>
    </section>
  );
};

export default LearnMoreInPortfolio;
