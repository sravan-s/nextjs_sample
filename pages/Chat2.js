import dynamic from "next/dynamic";

import { useState } from "react";
import "@sendbird/uikit-react/dist/index.css";

import { useChannelListContext } from "@sendbird/uikit-react/ChannelList/context";

const SendbirdProvider  = dynamic(import("@sendbird/uikit-react/SendbirdProvider"), {
  ssr: false,
});
const ChannelListUI  = dynamic(import("@sendbird/uikit-react/ChannelList/components/ChannelListUI"), {
  ssr: false,
});
const Channel  = dynamic(import("@sendbird/uikit-react/Channel"), {
  ssr: false,
});
const ChannelListProvider  = dynamic(import("@sendbird/uikit-react/ChannelList/context").then(module => module.ChannelListProvider), {
  ssr: false,
});

const CustomComponent = () => {
  const store = useChannelListContext();
  console.warn(store);
  return <>Custom</>
}

const Chat = () => {
  const [currentChannelUrl, setCurrentChannelUrl] = useState(null);
  return (
    <SendbirdProvider
      appId="XXXXX"
      userId="sendbird"
      nickname="sendbird"
    >
      <ChannelListProvider
        onChannelSelect={(channel) => {
          setCurrentChannelUrl(channel?.url);
        }}
      >
        <CustomComponent />
        <ChannelListUI />
      </ChannelListProvider>
      {/* <Channel channelUrl={currentChannelUrl} /> */}
    </SendbirdProvider>
  );
};

export default Chat;
