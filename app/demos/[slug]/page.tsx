import { notFound } from "next/navigation";
import { demos } from "@/lib/demos";
import { GitHubIcon } from "@/app/components/icons/GitHubIcon";
import { ArrowLeftIcon } from "@/app/components/icons/ArrowLeftIcon";
import Link from "next/link";
import { content } from "../../constants/content";

export default async function DemoPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const demo = demos.find((d) => d.slug === slug);
  if (!demo) notFound(); 

  const isIframe = demo.mode === "iframe";

  return (
    <>
      <Link className="mb-4 inline-flex items-center" href="/demos">
        <ArrowLeftIcon className="mr-1" /> {content.navigation.back}
      </Link>

      <h1 className="text-2xl font-semibold mb-2">{demo.title}</h1>
      <p className="mb-4">{demo.description}</p>

      {demo?.repo && (
        <a
          href={demo.repo}
          target="_blank"
          className="flex flex-row mb-5"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
          &nbsp;GitHub
        </a>
      )}

      {isIframe ? (
        <div className="rounded-2xl overflow-hidden border">
          <iframe
            src={demo.url}
            className="w-full h-[80vh]"
            sandbox="allow-scripts allow-forms allow-same-origin"
          />
        </div>
      ) : (
        <p className="text-sm text-gray-500">
          This demo is proxied under <code>/demos/{demo.slug}</code>. Try
          navigating within this path.
        </p>
      )}
    </>
  );
}
