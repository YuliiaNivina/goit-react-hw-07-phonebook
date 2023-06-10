import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filtredContacts } from 'redux/contactSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = evt => {
    dispatch(filtredContacts(evt.target.value));
  };

  return (
    <label className={css.filterLabel}>
      Find contact by name
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
