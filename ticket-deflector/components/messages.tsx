import { useChatStore } from '@markprompt/react';
import * as React from 'react';

import { Message } from './message';

export function Messages() {
  const messages = useChatStore((state) => state.messages);

  const messageState = useChatStore(
    (state) => state.messages[state.messages.length - 1]?.state,
  );
  const isLoading =
    messageState === 'preload' || messageState === 'streaming-answer';

  return (
    <div className="flex flex-col space-y-4">
      {messages.map((message, i) => {
        return (
          <Message
            isLoading={
              isLoading && i === messages.length - 1 && message.role !== 'user'
            }
            key={message.id}
            message={message}
          />
        );
      })}
    </div>
  );
}
