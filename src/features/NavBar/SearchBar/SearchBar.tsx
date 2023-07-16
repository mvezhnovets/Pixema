import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { ReactComponent as Filter } from '~/assets/icons/Filter.svg';
import { Button } from '~/shared/ui/Button/Button';
import { ButtonAppearance } from '~/shared/ui/Button/Button.types';

import { type SearchState } from './Search.types';
import { getDefaultFormValues } from './Search.utils';
import searchBarStyles from './SearchBar.module.scss';

export const SearchBar = () => {
  const [formState, setFormState] = useState<SearchState>(
    getDefaultFormValues()
  );
  const navigate = useNavigate();
  return (
    <form
      className={searchBarStyles.container}
      onSubmit={(event) => {
        event.preventDefault();
        navigate(`search/${formState.request}`);
        setFormState(getDefaultFormValues);
      }}
    >
      <input
        placeholder="Search"
        value={formState.request}
        className={searchBarStyles.input}
        onChange={({ target: { value } }) => {
          setFormState({ request: value });
        }}
      />
      <Button
        className={searchBarStyles.button}
        icon={<Filter />}
        appearance={ButtonAppearance.IconButton}
      ></Button>
    </form>
  );
};
