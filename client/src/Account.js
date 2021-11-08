
function Account({ currentUser, setCurrentUser }) {

    console.log(currentUser)

    // what do we want to do here? delete account would be good and easy. An edit info... see recent activity would be dope! What if you could delete or edit actions from here? That's be cool too... stretch perhaps. We shoudl add a user avatar too. Extra note.

    function handleDelete(){
        if (window.confirm('Are you sure you want to delete your account?')) {
        fetch(`/users/${currentUser.id}`, {method: "DELETE"})
        setCurrentUser(null)
        } else {
            console.log("whew that was close")
        }
    }

    return (
        <div>
            <h1>
                Hello, {currentUser.username}
            </h1>
            <p>{currentUser.email}</p>
            <p>Your recent activity? Comments, favorites...</p>
            <button onClick={handleDelete}>Delete your account</button>
        </div>
    )
}

export default Account