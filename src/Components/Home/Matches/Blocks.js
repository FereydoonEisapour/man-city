import { useEffect, useState, Component } from "react"
import { firebaseMatches } from './../../../Firebase'
import { firebaseLooper, reserveArray } from '../../Ui/Misc'
import Slide from 'react-reveal'
import MachBlock from './../../Ui/MatchBlock'


function Blocks() {
    const [Matches, setMatches] = useState([])

    useEffect(() => {
        firebaseMatches.limitToLast(6).once('value').then((snapshot) =>
            setMatches(reserveArray(firebaseLooper(snapshot))))
    }, [])

    let showMatches = () => (
        Matches ?
            Matches.map((match) => (
                <Slide bottom key={match.id}>
                    <div className="item" >
                        <div className="wrapper"  >
                            <MachBlock match={match} />
                        </div>
                    </div>
                </Slide>
            ))
            : null
    )

    return (
        <div className=" home_matches">
            {showMatches(Matches)}
        </div>
    )
}

export default Blocks
