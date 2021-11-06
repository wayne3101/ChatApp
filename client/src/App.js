//component
import Messenger from "./component/Messenger";
import AccountProvider from "../src/context/AccountProvider";
import TemplateProvider from "./theme/TemplateProvider";
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <TemplateProvider>
      <UserProvider>
        <AccountProvider>
          <Messenger />
        </AccountProvider>
      </UserProvider>
    </TemplateProvider>
  );
}

export default App;
