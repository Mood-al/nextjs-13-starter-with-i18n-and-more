"use client";
import Link from "next-intl/link";
import { usePathname } from "next-intl/client";
import React from "react";
import {
  Container,
  Nav,
  NavDropdown,
  Navbar as BootstrapNavbar,
} from "react-bootstrap";
import { useLocale, useTranslations } from "next-intl";
import { useAuth } from "./Providers/AuthContext";

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const t = useTranslations();
  const { user } = useAuth();
  const locale = useLocale();
  return (
    <BootstrapNavbar className="bg-primary" expand="lg" variant="dark">
      <Container>
        <BootstrapNavbar.Brand href="#home">Rabit</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-BootstrapNavbar-nav" />
        <BootstrapNavbar.Collapse id="basic-BootstrapNavbar-nav">
          <Nav className="me-auto">
            {user ? (
              <span className="nav-link">{user.name}</span>
            ) : (
              <Nav.Link as={Link} href="/login">
                {t("login")}
              </Nav.Link>
            )}

            <NavDropdown
              title="Language"
              id="basic-nav-dropdown"
              renderMenuOnMount
            >
              <NavDropdown.Item
                as={Link}
                active={locale === "ar"}
                locale={"ar"}
                href={pathname}
              >
                عربي
              </NavDropdown.Item>
              <NavDropdown.Item
                active={locale === "en"}
                as={Link}
                locale={"en"}
                href={pathname}
              >
                English
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
