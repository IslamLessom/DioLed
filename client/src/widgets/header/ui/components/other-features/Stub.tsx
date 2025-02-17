"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "../../../../../features/auth/context/AuthProvider";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "../../../../../shared/hooks/useMediaQuery";

import { Badge } from "antd";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoPodiumOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import styles from "./Stub.module.scss";

const Stub = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 968px)");
  const isPriceBusket = useMediaQuery("(max-width: 1208px)");
  const { isAuthenticated } = useAuth();

  const router = useRouter();

  const handleClick = () => {
    if (isAuthenticated) {
      router.push("/profile"); // Перенаправление на страницу профиля
    } else {
      router.push("/auth"); // Перенаправление на страницу регистрации
    }
  };

  return (
    <div className={styles.stub}>
      {!isMobile && (
        <>
          {" "}
          {!isTablet && (
            <>
              <Link href="/favorites">
                <Badge count={5}>
                  <CiHeart />
                </Badge>
              </Link>

              <Link href="/comparison">
                <Badge count={5}>
                  <IoPodiumOutline />
                </Badge>
              </Link>
              <div onClick={handleClick}>
                <CiUser />
              </div>
            </>
          )}
        </>
      )}
      <div className={styles.stub__cart}>
        <Badge count={5}>
          <Link href="/basket">
            <CiShoppingCart />
          </Link>
        </Badge>
        {!isPriceBusket && <p className={styles.stub__cart_price}>1000 руб</p>}
      </div>
    </div>
  );
};

export default Stub;
