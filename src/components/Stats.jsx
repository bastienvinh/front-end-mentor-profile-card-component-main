import StatsInfo from "./StatsInfo"

import "./Stats.scss"

const Stats = () => {
  return (
    <div className="stats">
      <StatsInfo figure="80K" unit="followers" />
      <StatsInfo figure="803K" unit="likes" />
      <StatsInfo figure="1.4K" unit="photos" />
    </div>
  )
}

export default Stats