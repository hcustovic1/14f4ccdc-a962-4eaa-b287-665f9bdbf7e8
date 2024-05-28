import React from 'react';

export const LoadingSpinner: React.FC<{ size?: number; color?: string }> = ({
  size = 24,
  color = 'text-blue-500',
}) => {
  const spinnerStyle = {
    height: `${size}%`,
    width: `${size}%`,
  };

  return (
    <svg
      style={spinnerStyle}
      className={`animate-spin ${color}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4zM20 12a8 8 0 01-8 8v4c4.418 0 8-3.582 8-8h-4zm-2-5.291A7.962 7.962 0 0120 12h4c0-4.418-3.582-8-8-8v4z"
      ></path>
    </svg>
  );
};
