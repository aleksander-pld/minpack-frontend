import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import MintpactLogo from '../mintpact-logo.json';

const Loader = ({ isLoading }) => {
  if (isLoading) {
    return (
      <Player
        autoplay={true}
        loop={true}
        controls={false}
        src={MintpactLogo}
        style={{ height: '100px', width: '100px' }}
      />
    );
  }

  return null;
}

export default Loader;
