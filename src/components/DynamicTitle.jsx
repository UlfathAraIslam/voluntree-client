import { useEffect } from "react";
import { useLocation } from "react-router";

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    let title = "Voluntree";

    if (path === "/") title = "Home | Voluntree";
    else if (path === "/all-volunteers") title = "Volunteer Need Posts | Voluntree";
    else if (path === "/signIn") title = "Login | Voluntree";
    else if (path === "/register") title = "Register | Voluntree";
    else if (path === "/add-post") title = "Add Volunteer Post | Voluntree";
    else if (path === "/manage-posts") title = "Manage Posts | Voluntree";
    else if (path.startsWith("/volunteers/")) {
  title = "Volunteer Details | Voluntree";
}


    document.title = title;
  }, [location]);

  return null;
};

export default DynamicTitle;
