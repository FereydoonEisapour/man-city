
import { easePolyOut } from 'd3-ease'
import Animate from 'react-move/Animate'
import FeaturedPlayer from '../../../Resources/images/featured_player.png'
function Text() {

    let AnimateNumber = () => (
        <Animate
            show={true}
            start={{
                opacity: 0,
                rotate: 0
            }}
            enter={{
                opacity: [1],
                rotate: [360],
                timing: { duration: 1000, ease: easePolyOut }
            }}
        >
            {({ opacity, rotate }) => {
                return (
                    <div className="featured_number"
                        style={{
                            opacity,
                            transform: `translate(290px,0px) rotateY(${rotate}deg)`
                        }}
                    >
                        3
                    </div>
                )
            }}
        </Animate>
    )
    let AnimateFirst = () => (
        <Animate
            start={{
                opacity: 0,
                x: 703,
                y: 280
            }}
            enter={{
                opacity: [1],
                x: [303],
                y: [280],
                timing: { duration: 500, ease: easePolyOut }
            }}
        >
            {({ opacity, x, y }) => {
                return (
                    <div className=" featured_first"
                        style={{
                            opacity,
                            transform: `translate(${x}px,${y}px) `
                        }}
                    >
                        League
                    </div>
                )
            }}
        </Animate>
    )
    let AnimateSecond = () => (
        <Animate
            show={true}
            start={{
                opacity: 0,
                x: 600,
                y: 400
            }}
            enter={{
                opacity: [1],
                x: [300],
                y: [400],
                timing: { duration: 500, delay: 200, ease: easePolyOut }
            }}
        >
            {({ opacity, x, y }) => {
                return (
                    <div className=" featured_second"
                        style={{
                            opacity,
                            transform: `translate(${x}px,${y}px)`
                        }}
                    >
                        Championships
                    </div>
                )
            }}
        </Animate>
    )
    let AnimatePlayer = () => (
        <Animate
            show={true}
            start={{
                opacity: 0,
            }}
            enter={{
                opacity: [1],
                timing: { delay: 800, duration: 500, ease: easePolyOut }
            }}
        >
            {({ opacity }) => {
                return (
                    <div className="featured_player"
                        style={{
                            opacity,
                            background: `url(${FeaturedPlayer})`,
                            transform: `translate(550px,50px)`
                        }}
                    >
                    </div>
                )
            }}
        </Animate>
    )
    return (
        <div className="featured_text">
            {AnimatePlayer()}
            {AnimateNumber()}

            {AnimateFirst()}
            {AnimateSecond()}
        </div>
    )
}



export default Text
