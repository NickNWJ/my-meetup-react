import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

//https://my-react-database-68ea2-default-rtdb.asia-southeast1.firebasedatabase.app/

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const ImageInputRef = useRef();
  const AddressInputRef = useRef();
  const DescriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImageUrl = ImageInputRef.current.value;
    const enteredAddress = AddressInputRef.current.value;
    const enteredDescription = DescriptionInputRef.current.value;

    const MeetupData = {
      title: enteredTitle,
      image: enteredImageUrl,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(MeetupData);

    console.log(MeetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={ImageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={AddressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            row="5"
            ref={DescriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
