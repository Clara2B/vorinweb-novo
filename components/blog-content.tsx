import type { BlogBlock } from "@/data/blog-posts";

export function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2 key={index} className="font-display mt-4 text-xl font-bold text-text">
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={index} className="flex flex-col gap-2 pl-1">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-base leading-relaxed text-muted">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index} className="text-base leading-relaxed text-muted">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
