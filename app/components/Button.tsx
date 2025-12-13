type ButtonProps = {
  texto: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  texto,
  onClick,
  type = "submit",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded font-semibold transition"
    >
      {texto}
    </button>
  );
}
