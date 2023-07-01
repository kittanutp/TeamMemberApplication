import Teams from './Teams';
import TeamMembers from './TeamMembers';


export default function Employees({selectedTeam, employees, handleEmployeeCardClick, handleTeamSelectionChange}) {

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
         <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange}/>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
         <TeamMembers employees={employees} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} />
        </div>
      </div>
    </main>
  )
}