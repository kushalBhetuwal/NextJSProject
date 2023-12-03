import React from "react";
import Image from "next/image";
import Link from "next/link";
interface MetricProps {
  imgurl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textstyle?: string;
  isauthor?: boolean;
}

const Metric = ({
  imgurl,
  alt,
  value,
  title,
  href,
  textstyle,
  isauthor,
}: MetricProps) => {
  const MetricContent = () => {
    return (
      <>
        <Image
          src={imgurl}
          alt="like"
          height={16}
          width={16}
          className={`object-contain ${href ? "rounded-full" : ""}`}
        />
        <p>{value}</p>
        <span className={`small-regular line-clamp-1 `}>{title}</span>
      </>
    );
  };
  return (
    <div className="flex-center flex flex-wrap gap-1">
      {href ? (
        <Link href={href} className="flex-center flex gap-1">
          {" "}
          {/* Use the 'href' prop value passed to Metric */}
          <MetricContent />
        </Link>
      ) : (
        <MetricContent />
      )}
    </div>
  );
};

export default Metric;
