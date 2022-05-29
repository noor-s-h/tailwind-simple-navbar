import Link from 'next/link';

export default function Navlink({ label, href, current, onClick }) {
  return (
    <Link href={href}>
      <a
        onClick={onClick}
        className={`${
          current ? 'text-gray-800' : 'text-gray-400'
        } whitespace-nowrap w-full`}
      >
        {label}
      </a>
    </Link>
  );
}
