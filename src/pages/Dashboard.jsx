import { useClerk, UserProfile } from "@clerk/clerk-react"
import Skeleton from "../components/Skeleton"

const Dashboard = () => {

  const { loaded } = useClerk()
  
  if (!loaded) {
    return <Skeleton/>
  }
  
  return (
    <div>
      <UserProfile/>
    </div>
  )
}

export default Dashboard

