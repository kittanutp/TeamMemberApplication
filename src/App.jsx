import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import * as React from 'react';
import './App.css';
import Nav from './Nav'
import Header from './Header';
import Employees from './Employees';
import GroupedTeamMembers from './GroupedTeamMembers'
import NotFound from './NotFound'
import Footer from './Footer';

function App() {
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) ||'TeamA');

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) ||[
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA"
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB"
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC"
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD"
    }
  ]);

  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees))
  }, [employees])

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  }, [selectedTeam])
  
  function handleEmployeeCardClick(event) {
    var updatedEmployees = employees.map(employee => employee.id === parseInt(event.currentTarget.id)
      ?(employee.teamName === selectedTeam)?{...employee, teamName: ""}: {...employee, teamName: selectedTeam}:employee);
    setEmployees(updatedEmployees);
  }
  
  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }
  return (
    <Router>
      <Nav/>
       {location.pathname === "/" || location.pathname === "/GroupedTeamMembers" ? (
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
      />
    ) : null}

      <Routes>
        <Route path='/' element={<Employees selectedTeam={selectedTeam} employees={employees} handleEmployeeCardClick={handleEmployeeCardClick} handleTeamSelectionChange={handleTeamSelectionChange} />}>
        </Route>
        <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers employees={employees} selectedTeam={selectedTeam} setTeam={setTeam}/>}>
        </Route>
        <Route path='*' element={<NotFound/>}>
        </Route>
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;