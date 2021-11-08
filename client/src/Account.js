
function Account({currentUser}) {

    console.log(currentUser)

    // what do we want to do here? delete account would be good and easy. An edit info... see recent activity would be dope! What if you could delete or edit actions from here? That's be cool too... stretch perhaps. We shoudl add a user avatar too. Extra note.

    return (
        <div>
            <h1>
                Hello, {currentUser.username}
            </h1>
            <p>{currentUser.email}</p>
            <p>Your recent activity? Comments, favorites...</p>
        </div>
    )
}

export default Account