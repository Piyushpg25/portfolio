interface IconProps {
  size?: number;
  className?: string;
}

export function HtmlIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4.5 2.5h15l-1.35 16.1L12 21.5l-6.15-2.9L4.5 2.5Z"
        fill="currentColor"
      />
      <path
        d="M8 7h8l-.25 2H8.25L8 7Zm.4 4h7.2l-.55 5.8L12 18.2l-3.05-1.4-.2-2h2l.1.8 1.15.5 1.15-.5.15-1.6H8.65L8.4 11Z"
        fill="white"
      />
    </svg>
  );
}

export function CssIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4.5 2.5h15l-1.35 16.1L12 21.5l-6.15-2.9L4.5 2.5Z"
        fill="currentColor"
      />
      <path
        d="M7.5 7h9l-.3 2H9.7l.2 2h6.05l-.6 5.3-3.35 1.5-3.3-1.5-.2-2h2l.1.8 1.4.6 1.4-.6.2-2.1H8.5L7.5 7Z"
        fill="white"
      />
    </svg>
  );
}

export function JavascriptIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="2"
        fill="currentColor"
      />
      <path
        d="M13 16.2c.45.75 1.05 1.3 2 1.3.8 0 1.3-.4 1.3-.95 0-.65-.52-.88-1.4-1.27l-.48-.2c-1.38-.58-2.3-1.3-2.3-2.83 0-1.4 1.07-2.47 2.75-2.47 1.2 0 2.07.42 2.7 1.52l-1.48.95c-.33-.58-.68-.8-1.22-.8-.56 0-.92.35-.92.8 0 .56.35.8 1.17 1.15l.48.2c1.63.7 2.55 1.4 2.55 2.98 0 1.7-1.34 2.63-3.14 2.63-1.76 0-2.9-.84-3.46-1.95L13 16.2ZM6.2 16.05c.3.52.58.96 1.25.96.64 0 1.05-.25 1.05-1.23v-5.2h1.82v5.22c0 1.9-1.1 2.77-2.72 2.77-1.46 0-2.3-.76-2.73-1.67l1.33-.85Z"
        fill="white"
      />
    </svg>
  );
}

export function TypescriptIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="2"
        fill="currentColor"
      />
      <path
        d="M5.5 10.2h6.3v1.65H9.65V18H7.65v-6.15H5.5V10.2Zm8.05 5.65c.5.55 1.1.8 1.9.8.7 0 1.08-.28 1.08-.7 0-.38-.3-.58-1.15-.93l-.5-.2c-1.45-.58-2.15-1.3-2.15-2.45 0-1.4 1.08-2.3 2.73-2.3 1.05 0 1.88.32 2.52 1.05l-1.2 1.08c-.35-.4-.7-.58-1.23-.58-.52 0-.85.23-.85.58 0 .38.25.55 1.13.9l.5.2c1.45.6 2.2 1.28 2.2 2.48 0 1.43-1.15 2.4-2.98 2.4-1.48 0-2.58-.53-3.22-1.4l1.22-.93Z"
        fill="white"
      />
    </svg>
  );
}

export function ReactIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="2"
        fill="currentColor"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        transform="rotate(60 12 12)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        transform="rotate(120 12 12)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function NextjsIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="currentColor"
      />
      <path
        d="M8.5 8v8M8.5 8l7 8M15.5 8v5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NodejsIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="m12 3 7.8 4.5v9L12 21l-7.8-4.5v-9L12 3Z"
        fill="currentColor"
      />
      <path
        d="M12 7.1 8.7 9v6l3.3 1.9 3.3-1.9v-1.8L12 15l-1.5-.9v-3.2L12 10l1.5.9v1.7l1.8-1V9L12 7.1Z"
        fill="white"
      />
    </svg>
  );
}

export function ExpressIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 12h18M5 8h14M5 16h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HonoIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M13.5 2.8c.4 3-1.5 4.6-3 6.1-1.2 1.2-2.2 2.4-2.2 4.2 0 2.2 1.65 4 3.7 4 2.1 0 3.7-1.8 3.7-4 0-1.1-.45-2.1-1.1-2.95.1 2.05-1.15 2.85-1.75 1.35-.45-1.1.1-2.45.65-3.55.65-1.25.85-3.05 0-5.15Z"
        fill="currentColor"
      />
      <path
        d="M5.3 16.4c.7 2.75 3.2 4.8 6.7 4.8s6-2.05 6.7-4.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function JavaIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10.2 4.2c2.5 1.2 1.7 2.4.4 3.4-1.2.9-1.7 1.6-.7 2.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13.5 3.5c3 2 2.2 3.8.5 5.1-1.6 1.2-2.3 2.1-1 3.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 14.2c-1.5.5-2.2 1.1-2.2 1.8 0 1.5 3.2 2.7 7.2 2.7s7.2-1.2 7.2-2.7c0-.7-.7-1.3-2.2-1.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.8 20c1.3.5 2.7.7 4.2.7 1.5 0 2.9-.2 4.2-.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PythonIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 3.2c-3.2 0-3.1 1.4-3.1 1.4v2.2h3.2v.65H7.6C4.3 7.45 4 10.2 4 12s.3 4.55 3.6 4.55h2v-2.7c0-1.5 1.25-2.7 2.75-2.7h3.1c1.45 0 2.55-1.2 2.55-2.7V6.05c0-1.5-1.3-2.85-3-2.85H12Z"
        fill="currentColor"
      />
      <circle cx="10.1" cy="5.1" r=".7" fill="white" />
      <path
        d="M12 20.8c3.2 0 3.1-1.4 3.1-1.4v-2.2h-3.2v-.65h4.5c3.3 0 3.6-2.75 3.6-4.55s-.3-4.55-3.6-4.55h-2v2.7c0 1.5-1.25 2.7-2.75 2.7h-3.1c-1.45 0-2.55 1.2-2.55 2.7v2.4c0 1.5 1.3 2.85 3 2.85H12Z"
        fill="currentColor"
      />
      <circle cx="13.9" cy="18.9" r=".7" fill="white" />
    </svg>
  );
}

export function DockerIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3.5 13.5h17c-.6 4.2-3.7 6.5-8.2 6.5-4.2 0-7.4-2.3-8.8-6.5Z"
        fill="currentColor"
      />
      <path
        d="M6 10h2v2H6V10Zm2.5-2.5h2v2h-2v-2ZM11 10h2v2h-2v-2Zm2.5-2.5h2v2h-2v-2ZM8.5 10h2v2h-2v-2Z"
        fill="white"
      />
    </svg>
  );
}

export function LinuxIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="currentColor"
      />
      <path
        d="M8.3 15.5c1.2 1 2.5 1.4 3.7 1.4 1.2 0 2.5-.4 3.7-1.4"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="9" cy="10.2" r="1" fill="white" />
      <circle cx="15" cy="10.2" r="1" fill="white" />
    </svg>
  );
}

export function UbuntuIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <circle cx="12" cy="5" r="1.5" fill="currentColor" />
      <circle cx="6" cy="15.5" r="1.5" fill="currentColor" />
      <circle cx="18" cy="15.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function GitIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20.3 11.1 12.9 3.7a1.3 1.3 0 0 0-1.8 0L9.7 5.1l2 2a1.7 1.7 0 0 1 2.2 2.2l1.9 1.9a1.7 1.7 0 1 1-1 1l-1.8-1.8v4.8a1.7 1.7 0 1 1-1.4 0V10.4a1.7 1.7 0 0 1-.9-2.2L8.8 6.3 3.7 11.4a1.3 1.3 0 0 0 0 1.8l7.4 7.4a1.3 1.3 0 0 0 1.8 0l7.4-7.7a1.3 1.3 0 0 0 0-1.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function GithubIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.16c-3.22.7-3.9-1.37-3.9-1.37-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.04 1.77 2.73 1.26 3.4.96.1-.75.4-1.26.72-1.55-2.57-.29-5.27-1.28-5.27-5.72 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18a10.95 10.95 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.45-2.71 5.42-5.29 5.71.42.36.77 1.07.77 2.16v3.2c0 .31.21.67.8.55A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export function CloudflareIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M7.3 16.8h10.9c.9 0 1.6-.7 1.6-1.6 0-.8-.6-1.5-1.4-1.6-.4-2.4-2.5-4.2-5-4.2-1.9 0-3.6 1-4.5 2.5-.3-.1-.7-.2-1-.2-1.5 0-2.8 1.2-2.8 2.7 0 1.3 1 2.4 2.2 2.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PostmanIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m8 16 7.2-7.2M11.2 16H16M13.5 8.5l2 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function BootstrapIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        fill="currentColor"
      />
      <path
        d="M7.5 6.5h4.2c2.1 0 3.3 1 3.3 2.5 0 1.1-.7 1.9-1.8 2.2 1.4.3 2.3 1.2 2.3 2.6 0 1.8-1.4 3.1-3.8 3.1H7.5V6.5Zm2 1.6v4h2c1 0 1.5-.7 1.5-2s-.5-2-1.5-2h-2Zm0 5.5v1.7h2.2c1.1 0 1.7-.5 1.7-1.4 0-.9-.6-1.4-1.7-1.4H9.5v1.1Z"
        fill="white"
      />
    </svg>
  );
}

export function TailwindCssIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 6c-2.7 0-4.3 1.3-4.8 3.8.8-1.3 1.9-1.8 3.3-1.5.8.2 1.4.7 2 1.3.9.9 1.9 1.8 3.8 1.8 2.7 0 4.3-1.3 4.8-3.8-.8 1.3-1.9 1.8-3.3 1.5-.8-.2-1.4-.7-2-1.3C14.9 6.9 13.9 6 12 6Z"
        fill="currentColor"
      />
      <path
        d="M7.2 13.5c-2.7 0-4.3 1.3-4.8 3.8.8-1.3 1.9-1.8 3.3-1.5.8.2 1.4.7 2 1.3.9.9 1.9 1.8 3.8 1.8 2.7 0 4.3-1.3 4.8-3.8-.8 1.3-1.9 1.8-3.3 1.5-.8-.2-1.4-.7-2-1.3-.9-.9-1.9-1.8-3.8-1.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DrizzleIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 14.5c2.3-4.2 4.8-6.3 7.5-6.3 2.2 0 3.5 1 4.7 2.1 1 .9 1.9 1.7 3.8 1.7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3.5 18.2c2.3-3 4.5-4.5 6.7-4.5 1.9 0 3 .7 4.1 1.4 1.1.7 2.1 1.4 4.2 1.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GithubActionsIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8 12h3m0 0-1.5-1.5M11 12l-1.5 1.5M13 12h3m0 0-1.5-1.5M16 12l-1.5 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MongoDbIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 3c.5 2.2 2.8 3.5 3.6 5.7.8 2.2.2 4.7-1.5 6.3-.6.6-1.3 1-2.1 1.4V21h-1v-4.6c-1.1-.7-2-1.5-2.5-2.7-.8-2 .1-4.2 1.4-5.9C11.1 6.2 11.7 4.7 12 3Z"
        fill="currentColor"
      />
      <path
        d="M12 14.5V21"
        stroke="white"
        strokeWidth="1"
      />
    </svg>
  );
}

export function MySqlIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 7.5c2.7-2.2 6.8-2.5 9.7-1 1.9 1 3.4 2.6 5.2 3.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M5 12.5c2.4 1.7 4.9 2.3 7.4 1.8 2.3-.5 3.8-1.8 6.6-1.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 17c2.2 1.4 4.4 1.7 6.5.9 1.8-.7 3-1.9 4.5-2.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PostgreSqlIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M7.5 18.5c-1.3-2.5-1.6-6.8-.7-10.4C7.4 5.2 9.3 4 12 4c2.8 0 4.8 1.3 5.4 4.2.7 3.2.3 7.2-1 9.8-.6 1.2-1.7 1.6-2.4.7-.5-.7-.3-1.8-.3-3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M9 8.5c1.1.7 2.3.9 3.5.7 1.2-.2 2.1-.8 3-1.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M15.5 10.5c1.1-.2 2.1-.7 2.9-1.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RestApiIcon({
  size = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M7 9h3.5M7 12h5M7 15h3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="m15 9 2 2-2 2M17 11h-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}