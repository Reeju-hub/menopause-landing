import Image from "next/image";

export default function ImageDivider() {
  return (
    <div className="w-full">
      {/* Mobile wali lambi image */}
      <Image 
        src="/banner-transition-mweb2.jpg" 
        alt="Transition Banner" 
        width={768}
        height={1024}
         quality={100}
          unoptimized
        sizes="100vw"
        className="block md:hidden w-full h-auto object-cover" 
      />
      
      {/* Desktop wali chaudi image */}
      <Image 
        src="/banner-transition-web 2.jpg" 
        alt="Transition Banner" 
        width={1920}
        height={600}
        sizes="100vw"
         quality={100}
          unoptimized
        className="hidden md:block w-full h-auto object-cover" 
      />

     
    </div>
  );
}