import StatsInfo from "./StatsInfo"

import "./Stats.scss"

const Stats = () => {
  return (
    <div className="stats">
      <StatsInfo figure="80k" unit="followers" />
      <StatsInfo figure="803k" unit="likes" />
      <StatsInfo figure="1.4k" unit="photos" />
    </div>
  )
}

export default Stats