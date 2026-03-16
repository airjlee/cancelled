import React, { useEffect, useRef } from "react";
import "./App.css";
import Leftbar from "./Leftbar";
import Header from "./Header";
import Navi from "./Navi";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import SingleMailPage from "./SingleMailPage";
import Draft from "./Draft";
import { useSelector } from "react-redux";
import { selectDraft, selectNaviIndex } from "./features/mailSlice";
import Inbox from "./Inbox";
import Sentbox from "./Sentbox";
import { colRef, db } from "./firebase";
import { getDocs, query, where, writeBatch, doc, Timestamp } from "firebase/firestore";
import { testdata } from "./testdata";

function App() {
  const draftOpen = useSelector(selectDraft);
  const naviIndex = useSelector(selectNaviIndex);
  const seeded = useRef(false);

  useEffect(() => {
    if (seeded.current) return;
    seeded.current = true;

    const resetAndSeed = async () => {
      const allSnap = await getDocs(query(colRef, where("to", "==", "you@gmail.com")));

      const batch = writeBatch(db);
      allSnap.docs.forEach((d) => batch.delete(d.ref));
      testdata.forEach((mail) => {
        const docRef = doc(colRef);
        batch.set(docRef, {
          ...mail,
          createAt: mail.createAt instanceof Date ? Timestamp.fromDate(mail.createAt) : mail.createAt,
        });
      });
      await batch.commit();
    };
    resetAndSeed();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Leftbar />
        <div className="app-main">
          <Header />
          <div className="app-body">
            <Navi />
            <div className="app-inner">
              <Routes>
                {/* default route to "/inbox" */}
                <Route
                  path="/"
                  element={
                    <Navigate
                      to={naviIndex === 0 ? "/inbox" : "/sent"}
                      replace={true}
                    />
                  }
                />
                <Route path="inbox" element={<Inbox />} />
                <Route path="sent" element={<Sentbox />} />
                <Route path="mail" element={<SingleMailPage />} />
                {/* default route */}
                <Route
                  path="*"
                  element={<Navigate to="/" replace={true} />}
                />
              </Routes>
            </div>
          </div>
        </div>
        {draftOpen && <Draft />}
      </BrowserRouter>
    </div>
  );
}

export default App;
