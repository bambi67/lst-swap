import { IconProps } from ".";

export function ReloadIcon({ className = "", fill = "black" }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.9331 13.0409C19.7442 14.4809 19.167 15.8423 18.2632 16.9791C17.3595 18.1159 16.1633 18.9853 14.803 19.4939C13.4427 20.0026 11.9696 20.1314 10.5417 19.8665C9.1138 19.6016 7.78492 18.953 6.69761 17.9902C5.6103 17.0275 4.80557 15.7869 4.36973 14.4016C3.93389 13.0162 3.88338 11.5384 4.22362 10.1265C4.56385 8.71464 5.282 7.42202 6.30104 6.38728C7.32007 5.35254 8.60156 4.61471 10.0081 4.25292C13.9071 3.25292 17.9431 5.25992 19.4331 8.99992"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 4V9H15"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
