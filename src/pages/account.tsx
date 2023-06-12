import { signIn, signOut, useSession } from "next-auth/react"

const Account = () => {

    const session = useSession()

    if (session.status === 'authenticated' && session.data.user){
        return (
            <div>
                <img src={session.data.user.image || ""}/>
                <h1>{session.data.user.name || ""}</h1>
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Not Signed In.</h1>
                <button onClick={() => signIn()}>Sign In</button>
            </div>
        )
    }
    
}

export default Account