import Link from "next/link";
/**
 * Renders a modal component with a message and a close button.
 * The modal is created using server component in Next.js through Link component and search params.
 *
 * @returns {JSX.Element} The modal component with a message and a close button.
 */
const Modal = () => {
  return (
    <div className="fixed inset-0 bg-background/50 overflow-y-auto h-full w-full flex items-center justify-center backdrop-blur-sm ">
      <div className="p-8 border border-border w-96 shadow-lg rounded-md bg-secondary m-5">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary">How Are You</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-lg text-gray-500">
              I am a modal created using server component in Next js through
              using Link component and Search params
            </p>
          </div>
          <div className="flex justify-center mt-4">
            {/* Navigates back to the base URL - closing the modal */}
            <Link
              href="/"
              className="px-4 py-2 bg-primary text-secondary text-base font-medium rounded-md shadow-sm hover:bg-secondary-foreground focus:outline-none focus:ring-2 focus:ring-secondary-foreground"
            >
              Close
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
