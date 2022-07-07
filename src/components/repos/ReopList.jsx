import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

function ReopList({repos}) {
  return (
    <div className="rounded-lg shadow-lg bg-base-100 card">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Respositories
        </h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo}/>
        ))}
      </div>
    </div>
  )
}

ReopList.propTypes = {
  repos: PropTypes.array.isRequired
}

export default ReopList
