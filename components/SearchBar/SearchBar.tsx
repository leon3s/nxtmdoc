import React, { useState } from 'react';
import { useRouter } from 'next/router';

import * as Style from './style';
import TextField from '@mui/material/TextField';

export type PropsSearchBar = {
};

const SearchBar = ({}: PropsSearchBar) => {
  const [searchVal, setSearchVal] = useState('');
  const router = useRouter();

  return (
    <>
      <Style.ContainerSearchBar onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push({
          pathname: '/search',
          query: {
            q: searchVal,
          }
        }, `/search/?q=${searchVal}`, {
          shallow: false,
        });
      }}>
        <TextField
          id="search"
          onChange={(e) => setSearchVal(e.target.value)}
          type="search"
          variant="outlined"
          style={{
            maxWidth: 500,
            width: '100%',
            backgroundColor: 'white',
          }}
          placeholder="Search for guides, terms, commands, and more..."
          />
      </Style.ContainerSearchBar>
    </>
  );
}

export default SearchBar;
