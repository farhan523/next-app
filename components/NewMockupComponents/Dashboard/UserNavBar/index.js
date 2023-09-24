import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCurrentUser,
  logOutUser,
  setCurrentUser,
} from "../../../../store/user.reducer";
import get from "lodash/get";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
// import { getCurrentUser } from "../../../../lib/api";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { LoginUser } from "../../../../graphql/queries/user/queries";
import { AiOutlineCloseCircle } from "react-icons/ai";

const menuItems = [
  {
    title: "Training",
    link: "/training",
    roles: ["admin", "academic_partner"],
  },
  {
    title: "Downloads",
    link: "/downloads",
    roles: ["admin", "academic_partner"],
  },
];

const UserNavBar = () => {
  const [menuView, setMenuView] = useState(false);
  const currentUser = useSelector(getCurrentUser);

  const dispatch = useDispatch();

  const onLogOut = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("token");
      if (window.localStorage.getItem("user")) {
        window.localStorage.removeItem("user");
      }
      if (window.localStorage.getItem("adminUser")) {
        window.localStorage.removeItem("adminUser");
      }
    }

    dispatch(logOutUser());
  };

  return (
    <div className="bg-white">
      <div className="grid grid-cols-[1fr_200px] h-[100px] lg:px-11 px-4 items-center shadow">
        <button className="">
          <img
            height={44}
            className=" md:w-48 w-36"
            src="/static/img/desktopLogo.svg"
          />
        </button>

        <div
          className="flex items-center justify-end cursor-pointer"
          onClick={() => setMenuView(!menuView)}
        >
          {/* <div className="relative mr-2 md:mr-7">
            <button className="w-5 mt-1">
              <img
                src="/static/img/bell.png"
                width={150}
                height={75}
                className="mr-3"
              />
            </button>
            <div className="absolute top-0 right-0 w-2 h-2 bg-orange-400 rounded-full" />
          </div> */}

          {currentUser &&
            (currentUser?.profilePhoto && currentUser?.profilePhoto?.url ? (
              <img
                src={currentUser?.profilePhoto?.url}
                width={77}
                height={36}
                className="mr-3"
              />
            ) : currentUser?.university &&
              currentUser?.university?.logo &&
              currentUser?.university?.logo?.url ? (
              <img
                src={currentUser?.university?.logo?.url}
                width={77}
                height={36}
                className="mr-3"
              />
            ) : null)}
          <div className="relative flex justify-between user_name_div">
            <div>
              <h4 className="flex text-xs font-normal text-brandBlue">
                Hello
                <img src="/static/img/hand.svg" className="ml-1 -mt-1" />
              </h4>
              <p className="text-xs font-normal text-brandBlue">{`${currentUser.username}`}</p>
            </div>
            <img src="/static/img/arrow-down-blue.svg" className="mt-4 ml-3 " />
            {menuView && (
              <div className="absolute mt-[34px] w-64 p-5 z-20 -right-4 lg:-right-11 xlg:pb-10 top-full bg-[#E5F0F7]">
                <ul>
                  <li className="py-2 text-xs font-normal text-brandBlue">
                    <Link href="/dashboard">My Dashboard</Link>
                  </li>
                  {/* <li className="py-2 text-xs font-normal text-brandBlue">
                  <Link href="/training">Training</Link>
                </li>
                <li className="py-2 text-xs font-normal text-brandBlue">
                  <Link href="/dashboard">Curriculum</Link>
                </li>
                <li className="py-2 text-xs font-normal text-brandBlue">
                  <Link href="/dashboard">Configure</Link>
                </li> */}
                  <hr className="w-full my-2 border-t border-brandBlue" />
                  {currentUser &&
                    currentUser?.accessLevel &&
                    menuItems
                      .filter((item) =>
                        item.roles.includes(currentUser?.accessLevel)
                      )
                      .map((item) => {
                        return (
                          <li className="py-2 text-xs font-normal text-brandBlue">
                            <Link href={item.link}>{item.title}</Link>
                          </li>
                        );
                      })}
                  <hr className="w-full my-2 border-t border-brandBlue" />
                  <li className="py-2 text-xs font-normal text-brandBlue">
                    <button
                      className="flex text-xs font-normal text-brandBlue"
                      onClick={onLogOut}
                    >
                      <FiLogOut className="mr-1.5 mt-0.5" /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNavBar;
