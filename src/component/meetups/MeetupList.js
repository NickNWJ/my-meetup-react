import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((MeetUp) => (
        <MeetupItem
          key={MeetUp.id}
          id={MeetUp.id}
          image={MeetUp.image}
          title={MeetUp.title}
          address={MeetUp.address}
          description={MeetUp.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
