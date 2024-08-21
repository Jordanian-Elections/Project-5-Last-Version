// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/Home/Home";
// import SignIn from "./components/SignIn/SignIn";
// import Electoral from "./components/Electoral-lists/Electoral";
// import AboutUS from "./components/AboutUs/AboutUS";
// import ContactUS from "./components/ContactUs/ContactUS";
// import Login from "./components/Login/Login";
// import PartyListsPage from "./components/PartyListsPage/PartyListsPage";
// import LocalLists from "./components/LocalLists/LocalLists";
// import ElectoralDistricts from "./components/ElectoralDistricts/ElectoralDistricts";
// import LocalElectionForm from "./components/Elections Requests/LocalElectionForm";
// import PartyElectionForm from "./components/Elections Requests/PartyElectionForm";
// import ElectionRequests from "./components/Elections Requests/ElectionsRequests";
// import PaymentComponent from "./components/PaymentComponent/Payment";
// import VotingApp from "./components/Votes/Localvotes";
// import VotePage from "./components/Votes/Partyvotes";
// import ListVotes from "./components/Votes/ListsVotes";
// import CreateDebate from "./components/Debate/DebateRequestForm"
// import DebatesList from "./components/Debate/DebateList";
// import Debate_screen from "./components/Debate/Debate_screen";
// import Debate_Room from "./components/Debate/Debate_Room";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/electoral" element={<Electoral />} /> */}
//         <Route path="/about" element={<AboutUS />} />
//         <Route path="/contact" element={<ContactUS />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignIn />} />

//         <Route path="/local-lists" element={<LocalLists />} />
//         <Route path="/party-lists" element={<PartyListsPage />} />
//         <Route path="/circle" element={<ElectoralDistricts />} />

//         {/* Routing for Election Forms */}
//         <Route path="/requests" element={<ElectionRequests />} />
//         <Route path="/local-form" element={<LocalElectionForm />} />
//         <Route path="/party-form" element={<PartyElectionForm />} />
//         <Route path="/party-lists" element={<PartyListsPage />} />
//         <Route path="/PaymentComponent" element={<PaymentComponent />} />
//         <Route path="/VotingApp" element={<VotingApp />} />
//         <Route path="/VotePage" element={<VotePage />} />
//         <Route path="/ListVotes" element={<ListVotes />} />
//         <Route path="/create-debate" element={<CreateDebate />} />
//         <Route path="/debates" element={<DebatesList />} />
//         <Route path="/Debate-screen" element={<Debate_screen />} />
//         <Route path="/Debate-Room/:roomId" element={<Debate_Room />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/Home/Home";
// import SignIn from "./components/SignIn/SignIn";
// import Electoral from "./components/Electoral-lists/Electoral";
// import AboutUS from "./components/AboutUs/AboutUS";
// import ContactUS from "./components/ContactUs/ContactUS";
// import Login from "./components/Login/Login";
// import PartyListsPage from "./components/PartyListsPage/PartyListsPage";
// import LocalLists from "./components/LocalLists/LocalLists";
// import ElectoralDistricts from "./components/ElectoralDistricts/ElectoralDistricts";
// import LocalElectionForm from "./components/Elections Requests/LocalElectionForm";
// import PartyElectionForm from "./components/Elections Requests/PartyElectionForm";
// import ElectionRequests from "./components/Elections Requests/electionsRequests";
// import PaymentComponent from "./components/PaymentComponent/Payment";
// import VotingApp from "./components/Votes/Localvotes";
// import VotePage from "./components/Votes/Partyvotes";
// import RequestAdForm from "./components/Advertisement form/Advertisement";
// import ListVotes from "./components/Votes/ListsVotes";
// import CreateDebate from "./components/Debate/DebateRequestForm"
// import DebatesList from "./components/Debate/DebateList";
// import Debate_screen from "./components/Debate/Debate_screen";
// import Debate_Room from "./components/Debate/Debate_Room";

// import PrivateRoute from "./components/PrivateRoute";
// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Route */}
//         <Route path="/" element={<Home />} />
//         {/* Protected Routes */}
//         <Route path="/electoral" element={<PrivateRoute element={<Electoral />} />} />
//         <Route path="/about" element= {<AboutUS />} />
//         <Route path="/contact" element={<PrivateRoute element={<ContactUS />} />} />
//         <Route path="/login"  element={<Login />}  />
//         <Route path="/signup" element={<PrivateRoute element={<SignIn />} />} />
//         <Route path="/local-lists" element={<PrivateRoute element={<LocalLists />} />} />
//         <Route path="/party-lists" element={<PrivateRoute element={<PartyListsPage />} />} />
//         <Route path="/circle" element={<PrivateRoute element={<ElectoralDistricts />} />} />
//         {/* <Route path="/requests" element={<PrivateRoute element={<ElectionRequests />} />} />
//         <Route path="/local-form" element={<PrivateRoute element={<LocalElectionForm />} />} />
//         <Route path="/party-form" element={<PrivateRoute element={<PartyElectionForm />} />} /> */}
//         {/* <Route path="/PaymentComponent" element={<PrivateRoute element={<PaymentComponent />} />} /> */}
//         <Route path="/PaymentComponent" element={<PaymentComponent />} />
//         <Route path="/VotingApp" element={<PrivateRoute element={<VotingApp />} />} />
//         <Route path="/VotePage" element={<PrivateRoute element={<VotePage />} />} />
//         <Route path="/ListVotes" element={<PrivateRoute element={<ListVotes />} />} />
//         {/* <Route path="/create-debate" element={<PrivateRoute element={<CreateDebate />} />} /> */}
//         <Route path="/debates" element={<PrivateRoute element={<DebatesList />} />} />
//         <Route path="/Debate-screen" element={<PrivateRoute element={<Debate_screen />} />} />
//         <Route path="/Debate-Room/:roomId" element={<PrivateRoute element={<Debate_Room />} />} />
//         {/* <Route path="/ads" element={<PrivateRoute element={<RequestAdForm />} />} /> */}
//         <Route path="/ads" element={<RequestAdForm />} />
//         <Route path="/requests" element={<ElectionRequests />} />
//         <Route path="/local-form" element={<LocalElectionForm />} />
//         <Route path="/party-form" element={<PartyElectionForm />} />
//         <Route path="/create-debate" element={<CreateDebate />} />

//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import Electoral from "./components/Electoral-lists/Electoral";
import AboutUS from "./components/AboutUs/AboutUS";
import ContactUS from "./components/ContactUs/ContactUS";
import Login from "./components/Login/Login";
import PartyListsPage from "./components/PartyListsPage/PartyListsPage";
import LocalLists from "./components/LocalLists/LocalLists";
import ElectoralDistricts from "./components/ElectoralDistricts/ElectoralDistricts";
import LocalElectionForm from "./components/Elections Requests/LocalElectionForm";
import PartyElectionForm from "./components/Elections Requests/PartyElectionForm";
import ElectionRequests from "./components/Elections Requests/ElectionsRequests";
import PaymentComponent from "./components/PaymentComponent/Payment";
import VotingApp from "./components/Votes/Localvotes";
import VotePage from "./components/Votes/Partyvotes";
import ListVotes from "./components/Votes/ListsVotes";
import CreateDebate from "./components/Debate/DebateRequestForm";
import DebatesList from "./components/Debate/DebateList";
import Debate_screen from "./components/Debate/Debate_screen";
import Debate_Room from "./components/Debate/Debate_Room";

import PrivateRoute from "./components/PrivateRoute";
import RequestAdForm from "./components/Advertisement form/Advertisement";
import ElectionResults from "./pages/Results/Results";
import CandidatesList from "./pages/Results/ResultCandidate";
import SeatCalculation from "./pages/Results/Resultparty";
import ScrollingTickerparty from "./components/numberofvotes/CounterPartyVotes";
import ScrollingTicker from "./components/numberofvotes/CounterVotesCircle";
import AllResults from "./pages/Results/AllReasults";
// عرض شريط الاخبار

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Home />} />
        // <Route path="/electoral" element={<Electoral />} />
        // <Route path="/about" element={<AboutUS />} />
        // <Route path="/contact" element={<ContactUS />} />
        // <Route path="/login" element={<Login />} />
        // <Route path="/signup" element={<SignIn />} />
        // <Route path="/local-lists" element={<LocalLists />} />
        // <Route path="/party-lists" element={<PartyListsPage />} />
        // <Route path="/circle" element={<ElectoralDistricts />} />
        // {/* Routing for Election Forms */}
        // <Route path="/requests" element={<ElectionRequests />} />
        // <Route path="/local-form" element={<LocalElectionForm />} />
        // <Route path="/party-form" element={<PartyElectionForm />} />
        // <Route path="/party-lists" element={<PartyListsPage />} />
        // <Route path="/PaymentComponent" element={<PaymentComponent />} />
        // <Route path="/VotingApp" element={<VotingApp />} />
        <Route
          path="/VotingApp"
          element={<PrivateRoute element={<VotingApp />} />}
        />
        // <Route path="/VotePage" element={<VotePage />} />
        // <Route path="/ListVotes" element={<ListVotes />} />
        {/* Protected Routes */}
        <Route
          path="/electoral"
          element={<PrivateRoute element={<Electoral />} />}
        />
        <Route path="/about" element={<AboutUS />} />
        <Route
          path="/contact"
          element={<PrivateRoute element={<ContactUS />} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<PrivateRoute element={<SignIn />} />} />
        <Route
          path="/local-lists"
          element={<PrivateRoute element={<LocalLists />} />}
        />
        <Route
          path="/party-lists"
          element={<PrivateRoute element={<PartyListsPage />} />}
        />
        <Route
          path="/circle"
          element={<PrivateRoute element={<ElectoralDistricts />} />}
        />
        {/* <Route path="/requests" element={<PrivateRoute element={<ElectionRequests />} />} />
        <Route path="/local-form" element={<PrivateRoute element={<LocalElectionForm />} />} />
        <Route path="/party-form" element={<PrivateRoute element={<PartyElectionForm />} />} /> */}
        {/* <Route path="/PaymentComponent" element={<PrivateRoute element={<PaymentComponent />} />} /> */}
        <Route path="/PaymentComponent" element={<PaymentComponent />} />
        <Route
          path="/VotingApp"
          element={<PrivateRoute element={<VotingApp />} />}
        />
        <Route
          path="/VotePage"
          element={<PrivateRoute element={<VotePage />} />}
        />
        <Route
          path="/ListVotes"
          element={<PrivateRoute element={<ListVotes />} />}
        />
        {/* <Route path="/create-debate" element={<PrivateRoute element={<CreateDebate />} />} /> */}
        {/* <Route
          path="/debates"
          element={<PrivateRoute element={<DebatesList />} />}
        /> */}
        {/* <Route
          path="/Debate-screen"
          element={<PrivateRoute element={<Debate_screen />} />}
        /> */}
        {/* <Route
          path="/Debate-Room/:roomId"
          element={<PrivateRoute element={<Debate_Room />} />}
        /> */}
        {/* <Route path="/ads" element={<PrivateRoute element={<RequestAdForm />} />} /> */}
        <Route path="/ads" element={<RequestAdForm />} />
        <Route path="/requests" element={<ElectionRequests />} />
        <Route path="/local-form" element={<LocalElectionForm />} />
        <Route path="/party-form" element={<PartyElectionForm />} />
        <Route path="/create-debate" element={<CreateDebate />} />
        <Route path="/debates" element={<DebatesList />} />
        <Route path="/Debate-screen" element={<Debate_screen />} />
        <Route path="/Debate-Room/:roomId" element={<Debate_Room />} />
        <Route path="/results" element={<ElectionResults />} />
        <Route path="/CandidatesList" element={<CandidatesList />} />
        <Route path="/SeatCalculation" element={<SeatCalculation />} />
        <Route
          path="/ScrollingTickerparty"
          element={<ScrollingTickerparty />}
        />
        <Route path="/ScrollingTicker" element={<ScrollingTickerparty />} />
        <Route path="/AllResults" element={<AllResults />} />
      </Routes>
    </Router>
  );
};

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/Home/Home";
// import SignIn from "./components/SignIn/SignIn";
// import Electoral from "./components/Electoral-lists/Electoral";
// import AboutUS from "./components/AboutUs/AboutUS";
// import ContactUS from "./components/ContactUs/ContactUS";
// import Login from "./components/Login/Login";
// import PartyListsPage from "./components/PartyListsPage/PartyListsPage";
// import LocalLists from "./components/LocalLists/LocalLists";
// import ElectoralDistricts from "./components/ElectoralDistricts/ElectoralDistricts";
// import LocalElectionForm from "./components/Elections Requests/LocalElectionForm";
// import PartyElectionForm from "./components/Elections Requests/PartyElectionForm";
// import ElectionRequests from "./components/Elections Requests/electionsRequests";
// import PaymentComponent from "./components/PaymentComponent/Payment";
// import VotingApp from "./components/Votes/Localvotes";
// import VotePage from "./components/Votes/Partyvotes";
// import RequestAdForm from "./components/Advertisement form/Advertisement";
// import ListVotes from "./components/Votes/ListsVotes";
// import CreateDebate from "./components/Debate/DebateRequestForm"
// import DebatesList from "./components/Debate/DebateList";
// import Debate_screen from "./components/Debate/Debate_screen";
// import Debate_Room from "./components/Debate/Debate_Room";

// import PrivateRoute from "./components/PrivateRoute";
// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Route */}
//         <Route path="/" element={<Home />} />
//         {/* Protected Routes */}
//         <Route path="/electoral" element={<PrivateRoute element={<Electoral />} />} />
//         <Route path="/about" element= {<AboutUS />} />
//         <Route path="/contact" element={<PrivateRoute element={<ContactUS />} />} />
//         <Route path="/login"  element={<Login />}  />
//         <Route path="/signup" element={<PrivateRoute element={<SignIn />} />} />
//         <Route path="/local-lists" element={<PrivateRoute element={<LocalLists />} />} />
//         <Route path="/party-lists" element={<PrivateRoute element={<PartyListsPage />} />} />
//         <Route path="/circle" element={<PrivateRoute element={<ElectoralDistricts />} />} />
//         <Route path="/requests" element={<PrivateRoute element={<ElectionRequests />} />} />
//         <Route path="/local-form" element={<PrivateRoute element={<LocalElectionForm />} />} />
//         <Route path="/party-form" element={<PrivateRoute element={<PartyElectionForm />} />} />
//         <Route path="/PaymentComponent" element={<PrivateRoute element={<PaymentComponent />} />} />
//         <Route path="/VotingApp" element={<PrivateRoute element={<VotingApp />} />} />
//         <Route path="/VotePage" element={<PrivateRoute element={<VotePage />} />} />
//         <Route path="/ListVotes" element={<PrivateRoute element={<ListVotes />} />} />
//         <Route path="/create-debate" element={<PrivateRoute element={<CreateDebate />} />} />
//         <Route path="/debates" element={<PrivateRoute element={<DebatesList />} />} />
//         <Route path="/Debate-screen" element={<PrivateRoute element={<Debate_screen />} />} />
//         <Route path="/Debate-Room/:roomId" element={<PrivateRoute element={<Debate_Room />} />} />

//       </Routes>
//     </Router>
//   );
// };

// export default App;
