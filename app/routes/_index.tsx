import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Seyirlik - Yakında Sizlerle" },
    { name: "description", content: "Seyirlik çok yakında sizlerle!" },
  ];
}

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <div className="mb-8 animate-pulse">
        <img 
          src="/assets/logo.svg" 
          alt="Seyirlik Logo" 
          className="h-24 w-auto md:h-32" 
        />
      </div>
      
      <h1 className="mb-4 text-4xl font-bold text-base md:text-6xl">
        Yakında Sizlerle
      </h1>
      
      <p className="max-w-md text-lg text-subtle md:text-xl">
        Film ve dizi dünyasını keşfetmeye hazır olun. 
        <span className="block mt-2 text-primary">Çok yakında buradayız.</span>
      </p>

      <div className="mt-12 flex gap-4">
        <div className="h-1 w-16 rounded-full bg-accent opacity-50"></div>
        <div className="h-1 w-16 rounded-full bg-primary opacity-50"></div>
        <div className="h-1 w-16 rounded-full bg-gold opacity-50"></div>
      </div>
    </div>
  );
}
