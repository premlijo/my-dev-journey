import React, { useState } from 'react';

const Group = ({groups, onCreating, onChanging, selectedGroup }) => {
    const [newGroup, setNewGroup] = useState('');

    const handleCreating = () => {
        if(newGroup.trim() !== ''){
            onCreating(newGroup);
            setNewGroup('');
        }
    };

return (
    <div className="group-selector">
        <select value={selectedGroup} onChange={(e) => onChanging(e.target.value)}>
            {groups.map((group) => (
                <option key={group.id} value={group.id}>
                    {group.name}
                </option>
            ) ) }
            
        </select>
        <input
        type="text"
        placeholder="New group name"
        value={newGroup}
        onChange={(e) => setNewGroup(e.target.value)}
        />
        <button onClick={handleCreating}>Create Group</button>
    </div>
);
};

export default Group;