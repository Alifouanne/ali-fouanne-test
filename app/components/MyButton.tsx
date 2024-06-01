import Link from "next/link";

/**
 * MyButton component to render a button with specified content and URL.
 *
 * @param content The text content to display on the button.
 * @param url The URL to navigate to when the button is clicked.
 * @returns A button component with the specified content and URL.
 */
const MyButton = ({ content, url }: { content: string; url: string }) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50  ">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground hover:bg-primary-foreground transition-colors duration-200 backdrop-blur-3xl">
        <Link href={url}>{content}</Link>
      </span>
    </button>
  );
};

export default MyButton;
