import Modal from "./components/Modal";
import MyButton from "./components/MyButton";

/**
 * Home component for the first page.
 *
 * @param {SearchParamProps} searchParams - The search parameters for the page.
 * @returns {JSX.Element} The JSX element representing the Home component.
 */
type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};
export default function Home({ searchParams }: SearchParamProps) {
  const show = searchParams?.show;
  return (
    <main className="flex flex-col h-screen">
      <h1 className="m-5 font-bold text-4xl text-primary">First Page</h1>
      <section className="p-5 flex flex-1 justify-center items-center h-screen gap-5">
        <MyButton content="Open Modal" url="/?show=true" />
        <MyButton content="Second Page" url="/second" />
      </section>

      {show && <Modal />}
    </main>
  );
}
