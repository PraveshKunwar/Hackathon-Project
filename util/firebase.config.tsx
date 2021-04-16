import React, { useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { firebase } from "./firebase";

type flows = "popup" | "redirect";

interface SignInOpts {
  provider: any;
  requiredDisplayName?: boolean;
}

interface ConfigTypes {
  signInFlow: flows;
  signInOptions: SignInOpts[];
  signInSuccessUrl: string;
}

const configs: ConfigTypes = {
  signInFlow: "redirect",
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      requiredDisplayName: false,
    },
  ],
  signInSuccessUrl: "/",
};

const AuthComponent: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <div className="?login">
      {visible && (
        <StyledFirebaseAuth
          uiConfig={configs}
          firebaseAuth={firebase.auth()}
        ></StyledFirebaseAuth>
      )}
    </div>
  );
};

export default AuthComponent;
