type LanguageButtonProps = {
  language: string;
  currentLanguage: string;
  onClick?: () => void;
  label: string;
  disabled?: boolean;
};

export default function LanguageButton({
  language,
  currentLanguage,
  onClick,
  label,
  disabled,
}: LanguageButtonProps) {
  const isActive = language === currentLanguage;

  return (
    <button
      onClick={onClick}
      className={`px-2 py-2 ${isActive ? "bg-[#4D5562] text-white" : ""} rounded-xl transition focus:bg-[#4D5562] focus:text-white ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
