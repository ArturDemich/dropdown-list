export function IconSearch() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1.2em"
      viewBox="1 3 32 32"
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1}
        d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9"
      ></path>
    </svg>
  );
}

export function IconStar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
      ></path>
    </svg>
  );
}

export function IconEmptyStar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M480 208H308L256 48l-52 160H32l140 96l-54 160l138-100l138 100l-54-160Z"
      ></path>
    </svg>
  );
}

export function IconCrossClose() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="-6 -6 24 24"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'rgba(9,4,79,1)', stopOpacity: 1 }} />
          <stop offset="40%" style={{ stopColor: 'rgba(34,34,172,1)', stopOpacity: 1 }} />
          <stop offset="99%" style={{ stopColor: 'rgba(6,165,198,1)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgba(5,183,228,1)', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        fill="url(#grad1)"
        d="m7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485L2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535l3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"
      ></path>
    </svg>
  );
};
