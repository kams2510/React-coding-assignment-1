import './index.css'

const HistoryMaker = props => {
  const {historyDetail, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetail
  const toDeleteHistory = () => {
    onDelete(id)
  }
  return (
    <li className="history-item">
      <div className="first-item">
        <p className="time-accessed">{timeAccessed}</p>
        <div className="logo-card">
          <img src={logoUrl} alt="domain logo" className="app-logo" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>
      <button onClick={toDeleteHistory} type="button" data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryMaker
