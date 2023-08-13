import React, { FC } from 'react';
import Message from './Message';

interface IMessageContainerProps {
  message: string;
}

const MessageContainer: FC<IMessageContainerProps> = ({ message }) => {
  return <Message message={message} />;
};

export default MessageContainer;
