import Image from "next/image";

export default function AvatarSection() {
  return (
    <span className="flex items-center justify-center col-span-3 row-span-2 bg-card rounded-2xl overflow-hidden border border-border transition-colors duration-400 p-4 sm:p-6">
      <div className="relative w-full h-full min-h-[200px] sm:min-h-[250px] md:min-h-[300px] bg-card rounded-xl overflow-hidden">
        <Image 
          src="/avatar.png" 
          alt="avatar" 
          fill
          className="object-cover"
          sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, 300px"
          priority
        />
      </div>
    </span>
  );
}