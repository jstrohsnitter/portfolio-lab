const App = () => {

  const aboutMe = 
  {
    name: 'Justin Strohsnitter',
    age: 33,
    employed: false,
    location: 'Providence, Rhode Island',
    email: 'jstrohsnitter@gmail.com',
  }  
  

  const myApps = [
    {
      name: 'Epic Knight IX',
      style: 'DOM Game',
      hours: 40,
      complete: false,
    },
    {
      name: 'Where to Fish',
      style: 'CRUD App',
      hours: 50,
      complete: true,
    },
  ]

  const mySkills = [
    {
      name: 'Programming: React, EJS, JavaScript, HTML, CSS',
      years: 1,
    },
    {
      name: 'Leadership',
      years: 10,
    },
    {
      name: 'Fishing',
      years: 4,
    },
    {
      name: 'Cooking',
      years: 6
    },
    {
      name: 'Construction',
      years: 5
    }
  ]

  const listStyle = {
    fontSize: '25px',
}

  return (
    <>
    <h1>Hi there! I'm {aboutMe.name}.</h1>
    <p>I am from {aboutMe.location}, and I am {aboutMe.age} years old.</p>
    <p>{aboutMe.employed ? 'I currently work for ' : 'I am currently available for hire on your next project!'} </p>

    <h2>My current projects include:</h2>
    <ul>
      {myApps.map((projects, index) =>
      <li key={index} style={listStyle}>
        {projects.complete? `${projects.name}, a ${projects.style} which took ${projects.hours} billable hours to complete.` : `${projects.name}, a ${projects.style} and is still in progress`}
      </li>
      )}
    </ul>

    <h2>My current skill set includes:
      <ul>
        {mySkills.map((skill, index) =>
        <li key={index} style={listStyle}>
          {`${skill.name}: ${skill.years} Year(s) of Experience `}
        </li>
        )}
      </ul>
    </h2>

    </>
  );
};

export default App;
