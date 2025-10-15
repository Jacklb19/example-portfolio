




import Image from "next/image";

export default function AvatarSection() {
  return (
    <span className="flex items-center justify-center col-span-12 sm:col-span-6 md:col-span-3 row-span-2 bg-card rounded-2xl overflow-hidden border border-border transition-colors duration-400 p-4 sm:p-6">
      <div className="relative w-full aspect-square max-w-[300px] sm:max-w-none">
        <Image 
          src="/avatar.png" 
          alt="avatar" 
          fill
          className="object-contain"
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, 300px"
          priority
        />
      </div>
    </span>
  );
}