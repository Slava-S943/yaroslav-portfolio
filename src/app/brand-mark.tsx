import Image from "next/image";

export function BrandMark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/slavas-logo.svg"
      className={className}
      width={36}
      height={36}
      alt=""
      aria-hidden="true"
      unoptimized
    />
  );
}
