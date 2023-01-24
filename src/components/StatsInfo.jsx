import "./StatsInfo.scss"

const StatsInfo = ({ figure, unit }) => {
  return (
    <div className="stats-info">
      <p className="number">{figure}</p>
      <p className="unit">{unit}</p>
    </div>
  )
}

export default StatsInfo