import Layout from "./Layout/Index.jsx";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import classes from "./Home.module.css";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function onSuccess(credentialResponse) {
    console.log(credentialResponse.credential); //token

    const decoded = jwtDecode(credentialResponse?.credential);
    if (decoded) {
      localStorage.setItem("authenticate", JSON.stringify(true));
    }

    if (decoded.email_verified) {
      localStorage.setItem("token", JSON.stringify(decoded));
      navigate("/todo");
    }
  }

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          gap: "10rem",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <div className={classes.DesContsiner}>
          <Typography
            sx={{
              fontSize: { xs: "1.4rem", md: "2.2rem" },
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            To-Do List
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.4rem" },
              textAlign: "center",
            }}
          >
            with only the feature you need, To-Do application is customized for
            individuals seeking a stress-free way to stay focused on their
            goals, projects and tasks.
          </Typography>
        </div>

        <div className={classes.googleLogin}>
          <Typography
            sx={{
              fontSize: { xs: "1.6rem", md: "2rem" },
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            LOGIN
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem",
              marginTop: "1.5rem",
            }}
          >
            <GoogleLogin
              onSuccess={onSuccess}
              onError={() => {
                alert("Login Failed");
              }}
            />
          </Box>
        </div>
      </Box>
    </Layout>
  );
}

export default Home;
