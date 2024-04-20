import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const Facebook = () => {
  return (
    <FacebookProvider appId="1085395405829630" chatSupport>
      <CustomChat pageId="1418409865090396" minimized={false} />
    </FacebookProvider>
  );
};

export default Facebook;
