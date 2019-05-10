import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  render() {
    const { handleSubmit, admin } = this.props;
    return (
      <div className="app-background">
        <div className="container">
          <h1>Dashboard</h1>
        </div>
        {admin && (
          <Link to={"/moderation"}>
            Moderation interface
          </Link>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { admin: state.auth.admin}
}

export default connect(mapStateToProps, null)(Dashboard);
