import {useState} from 'react'

export default function GroupedTeamMembers({employees, selectedTeam, setTeam}){

  const [groupedEmployees, setGroupedData] = useState(groupedTeamMembers())

  function groupedTeamMembers(){
    var teams = {};
    employees.forEach((employee) => {
      teams.hasOwnProperty(employee.teamName)?
        teams[employee.teamName].push(employee)
      : teams[employee.teamName] = [employee]
    })
    var convertedTeams = [];
    for (const key in teams){
      if (key !== ''){
        convertedTeams.push(
          {
            team: key,
            members: teams[key],
            collapsed: selectedTeam === key? false: true
          }
        );
      }
    }
    return convertedTeams;
  }

  function handleTeamClick(event){
    var newGroupData = groupedEmployees.map((groupedData) =>
      groupedData.team === event.currentTarget.id?
        {...groupedData, collapsed: !groupedData.collapsed}
        :groupedData)
    setGroupedData(newGroupData)
    setTeam(event.currentTarget.id)
  }
  return (
    <main className= "container">
      {

        groupedEmployees.map((item) => {
          return(
            <div key={item.team} className='card mt-2' style={{cursor:'pointer'}}>
              <h4 id={item.team} className='card-header text-secondary bg-white' onClick={handleTeamClick}>
                Team Name: {item.team}
              </h4>
              <div id={'collapse_' + item.team} className={item.collapsed? 'collapse': ""}>
                <hr/>
                {
                  item.members.map((member) => {
                    return(
                      <div key={member.id} className='mt-2'>
                        <h5 className='card-title mt-2'>
                          <span className='text-dark'>Fullname: {member.fullName}</span>
                        </h5>
                        <p>
                          Designation: {member.designation}
                        </p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
        )})
      }
    </main>
  )
}