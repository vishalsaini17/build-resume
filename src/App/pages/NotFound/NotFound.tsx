import { Link } from "@mui/material";
import style from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={style.mainBanner}>
      <h1> Opps! Page is not found</h1>
      <Link href="/">
        Go to Home
      </Link>
    </div>
  )
}

export default NotFound;