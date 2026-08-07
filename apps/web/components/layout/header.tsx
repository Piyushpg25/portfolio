import Link from "next/link";
import { HeaderActions } from "./header-actions";
import { siteConfig } from "@/constants/site";
import { Container } from "@/components/ui/container";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="border-b">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <div className="flex items-center gap-6">
  <nav>
    <ul className="flex gap-8">
      {siteConfig.navigation.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>

  <HeaderActions />
</div>
        </div>
      </Container>
    </header>
  );
}