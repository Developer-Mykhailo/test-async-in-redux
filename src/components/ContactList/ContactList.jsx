import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";

const ContactList = () => {
  //
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectNameFilter);

  // const visibleContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  // const visibleContacts = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    // .unwrap()
    // .then(() => console.log("Success"))
    // .catch(() => console.log("Error"));
  }, [dispatch]);

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && { error }}
      <ul className={s.list}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
