// SubmissionList.js
export const SubmissionList = async () => {
  const deleteSubmission = async (id) => {
    await fetch(`http://localhost:8000/submissions/${id}`, {
      method: "DELETE",
    });
    const deletedSection = document.querySelector(
      `section[data-submission-id="${id}"]`
    );
    if (deletedSection) deletedSection.remove();
  };

  window.deleteSubmission = deleteSubmission; // Expose deleteSubmission to the global scope

  const submissions = await (
    await fetch("http://localhost:8000/submissions")
  ).json();

  return `<h2>Submission List</h2>${submissions
    .map(
      (s) => `<section>
      <div>Owns blue jeans? ${s.ownsBlueJeans}</div>
      <div> Area FK? ${s.socioLocationId}</div>
      <button class="delete-btn" data-submission-id="${s.id}" onclick="deleteSubmission(${s.id})">Delete</button>
    </section>`
    )
    .join("")}`;
};
