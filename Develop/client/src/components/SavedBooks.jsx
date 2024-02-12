import { useQuery, useMutation } from '@apollo/client';
import { GET_ME, REMOVE_BOOK } from './queries';
import { REMOVE_BOOK as removeBookMutation } from './mutations';

const SavedBooks = () => {
  const { loading, data } = useQuery(GET_ME);
  const [removeBook] = useMutation(removeBookMutation);

  // handleDeleteBook function using removeBook mutation
};

export default SavedBooks;
