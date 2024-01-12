export const SubmissionList = async () => {
  // Get the submissions from your API
  const response = await fetch("http://localhost:8000/submissions");
  const submissions = await response.json();

  // Iterate the submissions and create some <section> representations
  let submissionHTML = "<h2>Submission List</h2>";
  submissions.map((submission) => {
    submissionHTML += `<section> 
    <div>Owns blue jeans? ${submission.ownsBlueJeans}</div>
    <div> Area FK? ${submission.socioLocationId}</div>
    </section>`;
  });
  return submissionHTML;
};
