import { IconButton, PrimaryButton } from 'office-ui-fabric-react';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Profile from '../profile/Profile';

export function showSignInButtonOrProfile(
  tokenPresent: boolean,
  mobileScreen: boolean,
  signIn: Function,
  minimised: boolean
) {

  const signInButton = minimised ? <IconButton
    ariaLabel='Sign-in button'
    role='button'
    iconProps={{ iconName: 'Contact' }}
    title='sign in'
    onClick={() => signIn()} /> : <PrimaryButton
      ariaLabel='Sign-in button'
      role='button'
      iconProps={{ iconName: 'Contact' }}
      onClick={() => signIn()}
    >
    {!mobileScreen && <FormattedMessage id='sign in' />}
  </PrimaryButton>;

  return (
    <div>
      {!tokenPresent && signInButton}
      {tokenPresent && <Profile />}
    </div>
  );
}
