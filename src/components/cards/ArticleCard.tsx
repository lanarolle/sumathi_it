import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function ArticleCard({
  title,
  excerpt,
  image,
  href,
  category,
  date
}: {
  title: string;
  excerpt: string;
  image: string;
  href: string;
  category: string;
  date: string;
}) {
  return (
    <Link href={href} className="group block h-full">
      <Card className="flex h-full flex-col overflow-hidden transition duration-500 hover:-translate-y-1 hover:border-brand-purple/30 hover:shadow-glow">
        <div className="relative h-52 overflow-hidden bg-brand-lavender shrink-0">
          <Image src={image} alt={title} fill className="object-cover transition duration-1000 group-hover:scale-110" />
          <div className="absolute bottom-5 left-5 rounded-full bg-brand-purple px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-card">
            {category}
          </div>
        </div>
        <CardContent className="p-6 flex-1 flex flex-col">
          <time className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{date}</time>
          <h3 className="mt-3 text-xl font-semibold tracking-[0.02em] leading-[1.3] text-navy-950 line-clamp-2">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 line-clamp-3 flex-1">{excerpt}</p>
        </CardContent>
        <CardFooter className="px-6 pb-6 shrink-0">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple">
            Read more
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
