import React from 'react'
import AllKpis from './AllKpis'
import Leaderboard from './Leaderboard'
import Revenue from './Revenue'

const Structure = () => {
  return (
    <div className="grid md:grid-cols-2 gap-3">
        <Leaderboard />
        <AllKpis />
        <Revenue />
    </div>
  )
}

export default Structure