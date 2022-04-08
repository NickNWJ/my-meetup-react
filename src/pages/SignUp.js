import { useHistory } from "react-router-dom";
import SignUpForm from "../component/signup/SignUpForm";

function SignUpPage() {
  const history = useHistory();

  function addSignUpDetails(SignUpData) {
    fetch(
      "https://my-react-database-68ea2-default-rtdb.asia-southeast1.firebasedatabase.app/signup.json",
      {
        method: "POST",
        body: JSON.stringify(SignUpData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>No Account? Sign Up Now</h1>
      <SignUpForm onAddSignUp={addSignUpDetails} />
    </section>
  );
}

export default SignUpPage;
