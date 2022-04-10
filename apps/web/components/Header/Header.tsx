import { Container } from "ui";
import Link from "next/link";
import React from "react";

const NavLink: React.FC<{ href: string }> = ({ href, children }) => (
  <Link href={href}>
    <a className="px-6 py-2 text-xl text-gray-600">{children}</a>
  </Link>
);

export const Header = () => {
  return (
    <header className="bg-white">
      <Container>
        <nav>
          <ul className="w-full justify-center items-center flex">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <Link href="/" passHref>
                <a>
                  {/* TODO: Figure out why next/image is not working for svg /> */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/logo.svg" alt="Logo" className="h-36" />
                </a>
              </Link>
            </li>
            <li>
              <NavLink href="/guides">Guides</NavLink>
            </li>
            <li>
              <NavLink href="/shop">Shop</NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
