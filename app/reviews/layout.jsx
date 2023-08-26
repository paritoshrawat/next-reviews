import Link from "next/link";

export default function ReviewsLayout({ children }) {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              {/* <Link href="/reviews/hollow-knights">Hollow Knights</Link> */}
            </li>
            <li>
              {/* <Link href="/reviews/stardew-valley">Stardew valley</Link> */}
            </li>
          </ul>
        </nav>
      </div>
      {children}
    </div>
  );
}
