import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

const RecentSubmission = (props) => {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
        <p>{props.line}</p>
      <p className="RecentSubmission__submission">{  }</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  line: PropTypes.string.isRequired,
};

export default RecentSubmission;
