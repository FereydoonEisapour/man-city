import Featured from './Featured'
import HomeMatches from './Matches'
import MeetPlayers from './MeetPlayers'
import Promotion from './Promotion'
const Home = () => {
    return (
        <div className=" bck_blue">
            <Featured />
            <HomeMatches />
            <MeetPlayers />
            <Promotion />
        </div>

    );
}

export default Home;