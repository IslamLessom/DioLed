import React from "react";
import styles from "./Header.module.scss";
import SearchComponents from "./ui/components/search/Search";
import PhoneComponent from "./ui/components/phone/Phone";
import Location from "./ui/components/location/Location";
import Stub from "./ui/components/other-features/Stub";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import NavMenu from "../NavMenu/ui/NavMenu";
import { BurgerButton } from "@/features/BurgerButton/BurgerButton";
import Image from "next/image";
import Link from "next/link";

interface HeaderComponentProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  isMenuOpen,
  toggleMenu,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.header__burger}>
          <BurgerButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <Link href={"/"}>
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </Link>
        <div className={styles.header__search}>
          <SearchComponents />
        </div>
        {!isMobile && (
          <>
            <Location />
          </>
        )}
        <PhoneComponent />
        <Stub />
      </div>
      <NavMenu />
    </div>
  );
};

export default HeaderComponent;
