import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

const ContactListItem = ({name, phone, onDeleteContact }) => (
  <li className={css.contactItem}>
    <p className={css.contactName}>
      {name}: {phone}
    </p>
    <button className={css.deleteBtn} type="button" onClick={onDeleteContact}>
      Delete
    </button>
  </li>
);

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
