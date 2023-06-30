import { AiOutlineLogout, AiOutlineHeart } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsBagDash } from "react-icons/bs";

export const profileMenu = [
  {
    id: 1,
    name: "sign in",
    slug: "/login",
    icon: <AiOutlineLogout />,
  },
  {
    id: 2,
    name: "My Orders",
    slug: "/orders",
    icon: <BsBagDash />,
  },
  {
    id: 3,
    name: "Wishlist",
    slug: "/wishlist",
    icon: <AiOutlineHeart />,
  },
  {
    id: 4,
    name: "Addresses",
    slug: "/address",
    icon: <CiLocationOn />,
  },
];
