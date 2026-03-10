import Image from "next/image";

interface ImgProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export default function Img({ src, alt, className = "", aspectRatio = "aspect-video" }: ImgProps) {
  return (
    <div className={`img-placeholder rounded-2xl overflow-hidden ${aspectRatio} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => {}}
      />
      <span className="absolute z-10 opacity-30">{src.split("/").pop()}</span>
    </div>
  );
}
