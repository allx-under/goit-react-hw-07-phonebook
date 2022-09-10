import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';

import { StyledBtn } from 'components/Button/Button';

const ContactsItem = ({ name, number, id, onClick }) => {
  const [disabledId, setDisabledId] = useState('');
  const isLoading = useSelector(state => state.contacts.loading);

  const isDeleting = () => {
    if (isLoading) {
      return disabledId === id;
    }
  };
  return (
    <li>
      <p>
        {name}: {number}{' '}
        <StyledBtn
          disabled={isDeleting()}
          onClick={() => {
            onClick(id);
            setDisabledId(id);
          }}
          type="button"
        >
          {isDeleting() ? (
            <ThreeDots height="10" width="100%" color="grey" />
          ) : (
            'Delete'
          )}
        </StyledBtn>
      </p>
    </li>
  );
};

export default ContactsItem;
