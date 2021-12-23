import { FaUserPlus } from "react-icons/fa";
import "./LeftColumn.css";
import { Link } from "react-router-dom";
import { LeftColumnProps } from "../../Interfaces/leftColumnProps.interface";
import { useState } from "react";
import { ConversationPreviewData } from "../../Interfaces/conversationPreviewProps.interface";
import { MOCKED_MESSAGES } from "../../mockData/mockedConversationPreview";
import { AddContact } from "../AddContact/AddContact";
import { ConversationPreview } from "../ConversationPreview/ConversationPreview";
import Popup from "../Popup/Popup";

export function LeftColumn(props: LeftColumnProps) {
  const messages = MOCKED_MESSAGES;
  const [showPopup, setShowPopup] = useState(false);

  function setNewContact(contact: ConversationPreviewData) {
    messages.push(contact);
  }

  return (
    <div className="left-column">
      <div className="top-left-bar">
        <img src="elComunicadorLogo.png" className="logo-left-panel" />

        <FaUserPlus
          onClick={() => setShowPopup(true)}
          className="fa-user-plus"
        />
      </div>

      {messages.map((message) => (
        <ConversationPreview
          conversation={message}
          setConversationId={props.setConversationId}
        />
      ))}

      <Popup
        trigger={showPopup}
        setTrigger={setShowPopup}
        height="600px"
        width="300px"
        title="Find user"
      >
        <AddContact addContact={setNewContact} />
      </Popup>

      <Link to="/login">
        <button className="log-out-button">Log out</button>
      </Link>
    </div>
  );
}