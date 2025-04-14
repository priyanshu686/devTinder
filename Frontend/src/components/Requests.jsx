import axios from "axios";
import React, { useEffect, useState } from "react";

const Requests = () => {
  const [requests, setRequests] = useState("");
  const fetchRequest = async () => {
    const res = await axios.get("http://localhost:7777/user/Connection", {
      withCredentials: true,
    });
    // console.log(res?.data?.data);
    setRequests(res?.data?.data);
  };
  const handleAccepted = async (id) => {
    const res = await axios.post(
      "http://localhost:7777/connection/request/replay/Accepted/" + id,
      {},
      { withCredentials: true }
    );
    setRequests(requests.filter((item) => item?._id !== id));
  };
  const handleRejected = async (id) => {
    const res = await axios.post(
      "http://localhost:7777/connection/request/replay/Rejected/" + id,
      {},
      { withCredentials: true }
    );
    setRequests(requests.filter((item) => item._id !== id));
  };
  useEffect(() => {
    fetchRequest();
  }, []);
  if (!requests) return <div>Loading.....</div>;
  if (requests.length === 0) return <div>No Requests</div>;
  return (
    <div>
      {requests.map((items) => (
        <div key={items?.FromUserId?._id} className="flex justify-center mt-9">
          <div className="card w-96 md:w-[600px] shadow-sm rounded-xl bg-base-300">
            <div className="card-body flex flex-row items-center gap-6">
              {/* Left: Profile Image */}
              <img
                alt="User DP"
                className="w-28 h-28 object-cover rounded-full"
                src={
                  items?.FromUserId?.photoUrl ||
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAACUCAMAAAA5xjIqAAAAMFBMVEXk5ueutLenrrHg4+Tn6eqrsbTd4OHQ09XJzc+3vL+yuLvM0NLEyMrq7O3U19i9wsRy44MWAAAD/klEQVR4nO2cwZKkIAxAFQICIvz/3y5qz5TTY08D0YSu5R229vgqHRKEMMPQ6XQ6nU6n0+l0Op0OGQDcBlnAsgw6JLQelqVhZxhk8FYklFLrv9FoOTQpDHKKTqjxQFJ2fpLN6S7S2/GH6ZfwaE1r0fXqzPQrwHM7ujBM7rXqinBTI7Yg45+me3B9E6kL4U1YH7pO89vCnGG62YrA7TrMOWF96DInLph81wSrbaHrKBhtYSpzTQQuW9ClquNoNZOstOWyyvK4gi9OgoQwHIkAocY1xZajOUCVapKNDK6FVevARC6rXa0rQ2jrAzsq6k2CrA5swtEuMZgEQpa4ICyYwKasXShlJSawKQ8omy6ibu1Q7r6gYldwRHk6V0SRfchaSeYKAeeaoEtaKPjwehFawr5QtTn8IUu3UZQRLUtXaWs+EZ6wZLLYYrDySbKCThabsp8mS1YN/jtZujRAu1LK4quB6k3hVPaT2u1HbWTQXzUj4f0CTEhXys03vhwQftZ81gfjR32KYxsu6SEH8vhojKRnXciDOeILpk868kQdJtPfMyJKrSMssjt1t2Ab9Bcgw1ArS9m9vqgtCCyXdsNQtatVnudevGaNKfrVtVNzTMs31lO+n6HuXT9sC+uXmFlHeopsCb+8TimJrTKsqivZtpyjR9/k3YYovsGjI5BzQKNiE4OT60iqOZ3zPag6087MOsgoXusq4RuY8Dyw6DieDier0bWSAQdAmzg+xVcJF01bUX0AIPUU7T75v83+uzjp9qJ6AAYd5sQUdDtr6hzYWFa2/3H7vCAZgtYhTLPxGyYFN4Tt0UpLzrD+9Ca+2Iq76CfdwtOgpJAW1fae5o+usC42F+fAqpwCOkd7Xl5PjFUqY0Gy+MKivXNv2uwvYedioNZNMTXPDSAXoWIgfHgFqfbn/fYvAiysIYrvIn3hr3/mu6bD/a7aVv78v33vvV4CCH+9+yrWTcl7W3ghrf/rVMftFd5tyfDue6DKN95xnJT57KvcVsxX5wJIf4fprntxLtS8oimwHS89qUHfgr9B2Ku+faDu1LiIVHQvsQVtb3ddU+GKw6W7qsBvXXziQrihuJ4jsLcNFwxM54OMLakr8ian9n1aNYhMuLcVnKKqLx0kRc16praC3d8LTqi7KMNPmlWhbIUsaNzDpHpbXzGmeMHEfCXl2wTD5lr+SuiKpwjVtnOZK7BUgm/bwsAyra6HbNEaW1gDmyjIWoY++5OS/RdiDOoiCv5mg8ZPyyMpeIlHvTM8kc2fA2XPgrSzzV5ijA3hWza35/IW2Z3cUsu0N3zC5cku7/+iFQV5Sbtwa+5kJi235k7exxh3r32Q1XEhiCbIawtSyybIce38h/wDZh44uEO965MAAAAASUVORK5CYII="
                }
              />

              {/* Right: User Info */}
              <div className="flex flex-col flex-1">
                <h1 className="text-xl font-bold">
                  {items?.FromUserId?.firstName} {items?.FromUserId?.lastName}
                </h1>
                <h4 className="text-gray-500">{items?.FromUserId?.gender}</h4>
                <p className="text-sm text-gray-700">
                  {items?.FromUserId?.TechnicalSkills.join(", ")}
                </p>
                <div className="mt-4 flex gap-4">
                  <button
                    className="btn btn-primary"
                    onClick={handleAccepted(items._id)}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-outline btn-error"
                    onClick={handleRejected(items._id)}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Requests;
