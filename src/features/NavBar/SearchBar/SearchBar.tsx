
import { useState } from 'react';

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
  return (
    <form
      className={searchBarStyles.container}
      onSubmit={(event) => {
        event.preventDefault();
        setFormState(getDefaultFormValues);
      }}
    >
      <input
        placeholder="Search"
        value={formState.request}
        onChange={({ target: { value } }) => {
          setFormState({ request: value });
        }}
      />
      <Button
        icon={<Filter />}
        appearance={ButtonAppearance.IconButton}
      ></Button>
    </form>
  );
};
