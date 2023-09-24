import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../store/user.reducer";

export function useLoginDropdown() {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const router = useRouter();
  const [user, setUser] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(true);
  useEffect(() => {
    if (
      isAuthenticated === false ||
      (typeof window !== "undefined" && window.localStorage.token)
    ) {
      setUser(true);
      setLoginDropdown(false);
    }
    if (
      router.pathname === "/dashboard" ||
      router.pathname === "/login" ||
      router.pathname === "/signup" ||
      router.pathname === "/forgot-password" ||
      router.pathname === "/reset-password" ||
      router.pathname === "/training" ||
      router.pathname === "/branding-guidelines" ||
      router.pathname === "/downloads" ||
      router.pathname === "/programs"
    ) {
      setLoginDropdown(false);
      setUser(false);
    }
  }, []);
  return { user, loginDropdown };
}
