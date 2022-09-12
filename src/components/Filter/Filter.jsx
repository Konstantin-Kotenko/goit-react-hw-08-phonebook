import { useRedux } from 'hooks/useRedux';
import { filterContacts, getFilterValue } from 'redux/contactsSlice';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const [dispatch, useSelector] = useRedux();
  const filter = useSelector(getFilterValue);

  const changeFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={changeFilter} />
    </Label>
  );
};
