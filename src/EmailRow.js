import React from "react";
import "./EmailRow.css";
import { Checkbox, IconButton } from "@mui/material";
import { StarBorderOutlined, Star } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedEmail } from "./features/mailSlice";
import { doc, updateDoc } from "firebase/firestore";
import { colRef } from "./firebase";

function EmailRow({
  uid,
  displayWho,
  sender,
  senderName,
  to,
  subject,
  content,
  time,
  unread,
  starred,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    if (unread) {
      const docRef = doc(colRef, uid);
      updateDoc(docRef, { unread: false });
    }
    dispatch(
      setSelectedEmail({
        uid: uid,
        sender: sender,
        senderName: senderName,
        to: to,
        subject: subject,
        content: content,
        time: time,
        unread: unread,
      })
    );
    navigate("/mail");
  };

  return (
    <div className="email-row">
      <div className="email-row-options">
        <Checkbox size="small" />
        <IconButton size="small">
          {starred
            ? <Star fontSize="small" style={{ color: "#f4b400" }} />
            : <StarBorderOutlined fontSize="small" />}
        </IconButton>
      </div>
      <div onClick={onClick} className="email-row-main">
        <h4 className={`email-row-sender${unread ? " unread" : ""}`}>
          {displayWho}
        </h4>
        <h4 className={`email-row-sub${unread ? " unread" : ""}`}>
          {subject}{" "}
        </h4>
        <p className="email-row-content">
          {"- "}
          {content}
        </p>
        <h4 className={`email-row-time${unread ? " unread" : ""}`}>
          {time?.replace(/^(Sun|Mon|Tue|Wed|Thu|Fri|Sat)\s/, "").replace(/\s\d{4}$/, "")}
        </h4>
      </div>
    </div>
  );
}

export default EmailRow;
