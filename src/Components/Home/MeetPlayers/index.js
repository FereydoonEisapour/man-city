import Stripes from '../../../Resources/images/stripes.png'
import { Tag } from '../../Ui/Misc'
import Reveal from 'react-reveal'
import { useState } from 'react'
import HomeCards from './Cards'


function MeetPlayers() {
    const [show, setshow] = useState(false)
    return (
        <Reveal
            fractions={.7}
            onReveal={() => { setshow(true) }}
        >
            <div className="home_meetplayers"
                style={{ background: `#ffffff url(${Stripes})` }}
            >
                <div className="container">
                    <div className="home_meetplayers_wrapper">
                        <div className="home_card_wrapper">
                            <HomeCards
                                show={show}
                            />
                        </div>
                        <div className="home_text_wrapper">
                            <div>
                                <Tag
                                    style={{
                                        background: "#0e1731",
                                        fontSize: '100px',
                                        color: "#ffffff",
                                        display: 'inline-block',
                                        marginBottom: '20px',
                                    }}>
                                    Meet
                    </Tag>
                            </div>
                            <div>
                                <Tag
                                    style={{
                                        background: "#0e1731",
                                        fontSize: "100px",
                                        color: "#ffffff",
                                        display: 'inline-block',
                                        marginBottom: '20px',
                                    }}>
                                    The
                    </Tag>
                            </div>
                            <div>
                                <Tag
                                    style={{
                                        background: "#0e1731",
                                        fontSize: "100px",
                                        color: "#ffffff",
                                        display: 'inline-block',
                                        marginBottom: '20px',
                                    }}  >
                                    Players
                    </Tag>
                            </div>
                            <div>
                                <Tag
                                    link={true}
                                    linkTo="/the_team"
                                    style={{
                                        background: "#ffffff",
                                        fontSize: "27px",
                                        color: "#0e1731",
                                        display: 'inline-block',
                                        marginBottom: '27px',
                                        border: '1px solid #0e1731'
                                    }}
                                >
                                    Meet them here
                    </Tag>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>

    )
}

export default MeetPlayers
