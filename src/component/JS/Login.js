import React,{useEffect} from "react";
import "../CSS/Login.css";
import { useNavigate } from "react-router-dom";
import Amplify from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "../../aws-exports";
import { Button, Flex, Heading, Image, Text } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Auth } from "aws-amplify";
import Upload from "./Upload";


Amplify.configure(awsconfig);

function Login({ user }) {
  const history = useNavigate();

  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");
  // // const dispatch = useDispatch();
  // console.log(user);

useEffect(() => {
  if (user) {
    history("/upload");
  }
}
, [user]);


  async function signOut() {
    try {
      await Auth.signOut({ global: true });
      history("/");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return (
    <>
           <Button variation="primary" onClick={() => signOut()}>
            SIGN OUT
          </Button>
    </>
    
        
  );
}
export default withAuthenticator(Login);
