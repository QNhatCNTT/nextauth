import { IconButton, Nav } from "rsuite";
import { useSession, signIn, signOut } from "next-auth/react";
import PageEndIcon from "@rsuite/icons/PageEnd";
import PageTopIcon from "@rsuite/icons/PageTop";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
function Navbar() {
  const { data: session, status } = useSession();
  const { expanded, handleOnChangeExpanded } = useContext(GlobalContext);
  console.log("kajsfsadfga", session);
  return (
    <div
      style={{
        width: "100%",
        float: "right",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          color: "blue",
          cursor: "pointer",
          fontSize: "20px",
        }}
        onClick={handleOnChangeExpanded}
      >
        {expanded ? <PageEndIcon /> : <PageTopIcon />}
      </div>
      {/* <IconButton
        icon={expanded ? <PageEndIcon /> : <PageTopIcon />}
        style={{ color: "blue" }}
        onClick={handleOnChangeExpanded}
      /> */}
      <Nav>
        {!session && (
          <Nav.Item onClick={signIn} style={{ color: "blue", fontSize: "20" }}>
            Sign In
          </Nav.Item>
        )}
        {session && (
          <Nav.Item onClick={signOut} style={{ color: "blue", fontSize: "20" }}>
            Sign Out
          </Nav.Item>
        )}
      </Nav>
    </div>
  );
}

export default Navbar;
