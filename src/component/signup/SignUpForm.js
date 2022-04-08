import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./SignUpForm.module.css";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

//https://my-react-database-68ea2-default-rtdb.asia-southeast1.firebasedatabase.app/

function SignUpForm(props) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordConfirmRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = passwordConfirmRef.current.value;

    if (enteredPassword === enteredConfirmPassword) {
      const SignUpData = {
        email: enteredEmail,
        password: enteredPassword,
      };
      props.onAddSignUp(SignUpData);

      console.log(SignUpData);
    } else {
      // display an alert module
      console.log("Password didn't matched!");
    }
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="text" required id="title" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            id="password"
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input
            type="password"
            required
            id="passwordConfirm"
            ref={passwordConfirmRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Sign Up</button>
        </div>
        <Modal />
        <Backdrop />
      </form>
    </Card>
  );
}

export default SignUpForm;
