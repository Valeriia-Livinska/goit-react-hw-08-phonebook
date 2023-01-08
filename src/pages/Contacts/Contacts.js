import { Subtitle, Title } from 'components/App.styled';
import { Box } from 'components/Box';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/Contactlist';
import { Filter } from 'components/Filter/Filter';
import { Spinner } from 'components/Spinner/Spinner';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/contacts/selectors';


export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <Box
        flexDirection="column"
        alignItems="center"
        mt={5}
        mb={0}
        mx="auto"
        maxWidth={700}
      >
        <Title>Phonebook</Title>
        <ContactForm />

        <Subtitle>contacts</Subtitle>
        <Filter />
        {isLoading && !error ? <Spinner /> : <ContactList />}
      </Box>
    );
}
