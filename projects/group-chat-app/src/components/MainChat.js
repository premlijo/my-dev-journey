
import React, { useState, useEffect } from 'react';
import Group from './Group';
import ChatWindow from './ChatWindow';

const MainChat = () => {
  const [users] = useState(['User1', 'User2']);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [username, setUsername] = useState('');
  const [groups, setGroups] = useState([{ id: 'general', name: 'General' }]);
  const [selectedGroup, setSelectedGroup] = useState('general');
  const [messages, setMessages] = useState({});
  const [newMessage, setNewmessage] = useState('');

  useEffect(() => {
    setUsername(users[currentUserIndex]);
  }, [currentUserIndex, users]);

  const handleCreating = (groupName) => {
    const newGroup = { id: groupName.toLowerCase(), name: groupName };
    setGroups([...groups, newGroup]);
    setSelectedGroup(newGroup.id);
  };

  const handleSending = () => {
    if (newMessage.trim() === '') return;
    const messageObj = {
      id: Date.now().toString(),
      text: newMessage,
      sender: username,
      time: new Date().toLocaleTimeString(),
    };
    setMessages({
      ...messages, [selectedGroup]: [...(messages[selectedGroup] || []), messageObj],
    });
    setNewmessage('');
  };

  const handleChanging = (groupId) => {
    setSelectedGroup(groupId);
  };
  const switchUser = () => {
    setCurrentUserIndex((currentUserIndex + 1) % users.length);
  };

  return (
    <div className="chat-app">
      <div className="user-switch">
        <button onClick={switchUser}>
          Switch User (Current: {users[currentUserIndex]})
        </button>
      </div>
      <>
        <Group groups={groups} onCreating={handleCreating} onChanging={handleChanging} selectedGroup={selectedGroup} />
        <ChatWindow messages={messages[selectedGroup] || []} newMessage={newMessage} onSending={handleSending} onMessageChange={setNewmessage} />
      </>
    </div>
  );
};

export default MainChat;
