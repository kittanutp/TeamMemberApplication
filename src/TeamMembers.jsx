import TeamMember from './TeamMember';

export default function TeamMembers({employees, handleEmployeeCardClick, selectedTeam}){
  return(
     <div className='card-collection'>
            {
              employees.map((employee) => (
                <TeamMember employee={employee} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} />
              ))
            }
      </div>
  )
}