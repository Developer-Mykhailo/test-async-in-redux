import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

const ContactList = () => {
  // const contacts = useSelector((state) => state.contacts.items);
  // const filter = useSelector((state) => state.filters.name);

  // const visibleContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  const loading = useSelector((state) => state.contacts.contacts.loading);
  const contacts = useSelector((state) => state.contacts.contacts.items);
  const error = useSelector((state) => state.contacts.contacts.error);

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
