import { useRef, useState } from 'react';
import { isPropertySignature } from 'typescript';
// import //'./chat.css'

export interface Message {
    body: string;
}

export interface Conversation {
    messages: Message[];
}

export const ChatView = () => {

    const handleMessage = (message: Message) => {
        setConversationState([...conversationState, message]);
    }

    const [conversationState, setConversationState] = useState<Message[]>([])
    return (
        <div id="chat-wrapper">
            <ConversationView conversation={conversationState} />
            <InputView handleMessage={handleMessage} />

        </div>
    )
}


interface conversationProps {
    conversation: Message[];
}

export const ConversationView = (props: conversationProps) => {

    const messages = props.conversation.map(message => <MessageView message={{ body: "" }} />)

    return (
        <div className="chat-div">
            {messages}
        </div>
    )
}

export const InputView = (props: { handleMessage: (message: Message) => void }) => {

    // const [messageState, setMessageState] = useState<Message>()
    const chatInput = useRef<HTMLInputElement>(null);
    return (
        <div className="input-div">
            <input ref={chatInput} placeholder="Enter your message here, please" type="text" />
            <button
                onClick={() => {
                    props.handleMessage({
                        body: chatInput.current?.value ?? ""
                    })
                }}>Send</button>
        </div>)
}

export const MessageView = (props: { message: Message }) => {
    return <>
        <div>{props.message.body}</div>
    </>

}