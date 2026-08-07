type ButtonProps = {
  children: React.ReactNode;
};

export function Button({
  children,
}: ButtonProps) {
  return (
    <button
      className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
    >
      {children}
    </button>
  );
}