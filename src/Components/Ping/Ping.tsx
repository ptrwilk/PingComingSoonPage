import {
  Box,
  Button,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import styles from "./styles.module.css";
import Logo from "../../assets/logo.svg";
import Dashboard from "../../assets/illustration-dashboard.png";
import CustomTextField from "../TextField/CustomTextField";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Ping = () => {
  const [email, setEmail] = useState<string | undefined>();
  const [emailError, setEmailError] = useState<boolean>();

  const isLarge = useMediaQuery("(min-width : 550px)");

  const isEmailValid = (value?: string) => {
    if (!value) return false;

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleNotifyClick = () => {
    setEmailError(!isEmailValid(email));
  };

  return (
    <Box className={styles["container"]}>
      <img className={styles["img-logo"]} src={Logo} />
      <Typography variant="h1">
        We are launching <span>soon!</span>
      </Typography>
      <Typography className={styles["text"]}>
        Subscribe and get notified
      </Typography>
      <Box className={styles["form"]}>
        <CustomTextField
          className={styles["text-field"]}
          placeholder="Your email address..."
          placeholderCenter={isLarge}
          error={emailError}
          errorMessage="Please provide a valid email address"
          value={email}
          onValueChange={(value) => setEmail(value)}
        />
        <Button className={styles["btn-notify"]} onClick={handleNotifyClick}>
          Notify Me
        </Button>
      </Box>
      <img className={styles["img-dashboard"]} src={Dashboard} />
      <Box className={styles["footer"]}>
        <Box className={styles["icons"]}>
          <IconButton className={styles["btn-icon"]}>
            <FontAwesomeIcon icon={faFacebookF} />
          </IconButton>
          <IconButton className={styles["btn-icon"]}>
            <FontAwesomeIcon icon={faTwitter} />
          </IconButton>
          <IconButton className={styles["btn-icon"]}>
            <FontAwesomeIcon icon={faInstagram} />
          </IconButton>
        </Box>
        <Typography>© Copyright Ping. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Ping;
