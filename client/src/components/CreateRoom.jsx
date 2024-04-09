import React from "react";

const CreateRoom = (props) => {
    const create = async (e) => {
        e.preventDefault();

        const resp = await fetch("http://localhost:8000/create");
        const { room_id } = await resp.json();

		props.history.push(`/room/${room_id}`)
    };

    return (
        <div style={{ textAlign: 'center', padding: '300px' }}>
              <button style={{ fontFamily: 'Arial', fontSize: '36px', padding: '20px' }} onClick={create}>Create Room</button>
        </div>
    );
};

export default CreateRoom;
