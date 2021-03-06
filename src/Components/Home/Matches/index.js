import { Tag } from '../../Ui/Misc'
import Blocks from './Blocks'
const HomeMatches = () => {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
                <Tag

                    style={{
                        backgroundColor: '#0e1731',
                        fontSize: '50px',
                        color: '#ffffff'
                    }}

                >Matches</Tag>

                <Blocks />

                <Tag
                    link={true}
                    linkTo="/matches"
                    style={{
                        backgroundColor: '#ffffff',
                        fontSize: '22px',
                        color: '#0e1731'
                    }}>
                    See more matches
                </Tag>
            </div>
        </div>
    );
}

export default HomeMatches;