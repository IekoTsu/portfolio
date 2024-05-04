import React, {useState , useEffect} from 'react';




function GitProfile (){
    const [user, setUsers] = useState({})

    // Function to fetch the user data from the API
    const getUser = async () => {
    // Fetch the user data from the API
      const res = await fetch("https://api.github.com/users/github-john-doe")

    // Convert the response to JSON
      let json = await res.json()

    // Extract the created and updated time from the JSON object and substring it to a compatible format for the "dateTime" attribute
      json.created_time = json.created_at.substring(0, 10)
      json.updated_time = json.updated_at.substring(0, 10)

      setUsers(json)
    }

    useEffect (() => {
      getUser()
    },[])

    return (
        <main className='git-profile-page flex-grow-1 bg-light'>
            <section className='git-profile-page__container py-5 d-flex flex-column align-items-center gap-3'>
                <h1 className='git-profile-page__container-title'>Github user</h1>
                <h2 className='git-profile-page__container-name'>{ user.name }</h2>
                <img className='git-profile-page__container-image' src={ user.avatar_url } alt={`${user.login} full sized avatar`}></img>
                <div className='git-profile-page__container-info' > 
                    <ul className='list-unstyled text-center d-flex flex-column align-items-center  gap-2'>
                        <li className='git-profile-page__container-bio'><p> {user.bio} </p></li>
                        <li className='git-profile-page__container-followers'> Abonnés : {user.followers} </li>
                        <li className='git-profile-page__container-following'> Abonnements : {user.following} </li>
                        <li className='git-profile-page__container-created'> Créé le : <time dateTime={  user.created_time  }>{user.created_at}</time> </li>
                        <li className='git-profile-page__container-updated'> Modifié le : <time dateTime={ user.updated_time  }>{user.updated_at}</time> </li>
                        <li className='git-profile-page__container-repos'> URL repositories : <a  href={user.repos_url} target='_blank' style={{ color: `rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1))` }}> {user.repos_url} </a> </li>
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default GitProfile;