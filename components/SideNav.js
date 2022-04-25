import { useState } from "react";
import { IconButton, Nav, Sidenav, Toggle } from "rsuite";
import { useRouter } from "next/router";
import MenuIcon from "@rsuite/icons/Menu";
import SettingIcon from "@rsuite/icons/Setting";
import MessageIcon from "@rsuite/icons/Message";
import PageEndIcon from "@rsuite/icons/PageEnd";
import PageTopIcon from "@rsuite/icons/PageTop";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
function SideNav() {
  const { expanded } = useContext(GlobalContext);
  const [activeKey, setActiveKey] = useState("1");
  const router = useRouter();
  const handleOnSelect = (activeKey) => {
    setActiveKey(activeKey);
    switch (activeKey) {
      case "1":
        return router.push("/");
      case "2":
        return router.push("/dashboard");
      case "3":
        return router.push("/blog");
      default:
        break;
    }
  };

  return (
    <div>
      <Sidenav expanded={expanded}>
        <Sidenav.Body>
          <Nav onSelect={handleOnSelect} activeKey={activeKey}>
            <Nav.Item eventKey="1" icon={<MenuIcon />}>
              Home
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<SettingIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="3" icon={<MessageIcon />}>
              Blog
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}

export default SideNav;
