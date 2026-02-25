export function CustomButton({ label, onClick, className = "", disabled }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ${className}`}
        >
            {label}
        </button>
    );
}