const keys = require('../../config/keys');

// This template is attached to the email sent to the user
module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>I'd like your input!</h3>
          <p>Answer the following question:</p>
          <p>${ survey.body }</p>
          <div>
            <a href="${ keys.redirectDomain }/api/surveys/${survey.id}/yes">Yes</a>
          </div>
          <div>
            <a href="${ keys.redirectDomain }/api/surveys/${survey.id}/no">No</a>
          </div>
        </div>
      </body>
    </html>

  `;
};
