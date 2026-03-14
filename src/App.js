import React, { useEffect } from "react";
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
import { getDocs, query, where, limit, writeBatch, doc, Timestamp } from "firebase/firestore";
import { testdata } from "./testdata";

function App() {
  const draftOpen = useSelector(selectDraft);
  const naviIndex = useSelector(selectNaviIndex);

  useEffect(() => {
    const seedIfEmpty = async () => {
      const q = query(
        colRef,
        where("to", "==", "demo@gcmail.com"),
        limit(1)
      );
      const snapshot = await getDocs(q);
      if (snapshot.empty) {
        const batch = writeBatch(db);
        testdata.forEach((mail) => {
          const docRef = doc(colRef);
          batch.set(docRef, {
            ...mail,
            createAt: mail.createAt instanceof Date ? Timestamp.fromDate(mail.createAt) : mail.createAt,
          });
        });
        await batch.commit();
      }
    };
    seedIfEmpty();
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
