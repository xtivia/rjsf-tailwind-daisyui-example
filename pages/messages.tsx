import Messages from "../components/Messages";
import { Message } from "../types/Message.type";
import { RawMessage } from "../types/RawMessage.type";

export default function MessagesPage({msgs}:any) {
    const data:Message[] = msgs.map((msg:RawMessage) => ({
        name: msg.from,
        body: msg.body,
        date: new Date(msg.date_created)
    }));
    return (
        <Messages {...{data}}  />
    )
}

export async function getStaticProps() {
    // fetch the blog posts from the mock API
    const res = await fetch('http://localhost:3000/api/messages');
    const msgs = await res.json();
  
    return {
      props: { msgs } // props will be passed to the page
    };
}
