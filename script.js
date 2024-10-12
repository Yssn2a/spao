document.addEventListener("DOMContentLoaded", function () {
  const bubble = document.querySelector(".bubble");
  const userInfo = document.querySelector(".UserInfo");
  const miningButton = document.querySelector(".mining-button");
  const navLinks = document.querySelectorAll(".nav-link");
  const contentArea = document.getElementById('content-area');
  const taskList = document.querySelector('.task-list');
  const card = document.querySelector('.card')
  const Referral = document.querySelector('.Referral')

  bubble.addEventListener("click", function (evt) {
    evt.preventDefault();
    bubble.classList.add("animated");
    setTimeout(function () {
        bubble.classList.remove("animated");
    }, 100);
  });
  // Hide or show elements based on the clicked nav link
  navLinks.forEach(link => {
      link.addEventListener("click", function(evt) {
          evt.preventDefault();
          const contentType = this.getAttribute('data-content');

          if (contentType === 'mining') {
              // Show mining content
              Referral.style.display = "none";
              taskList.style.display = "none";
              card.style.display= "none" // Hide task lis
              bubble.style.display = "block";
              userInfo.style.display = "block";
              miningButton.style.display = "block";
              contentArea.style.display = "block";
              contentArea.innerHTML = '<p>Mining details will be displayed here.</p>'; // Display mining contentt
          } else if (contentType === 'tasks') {
              // Show tasks and hide mining content
              Referral.style.display = "none";
              bubble.style.display = "none";
              userInfo.style.display = "none";
              miningButton.style.display = "none";
              taskList.style.display = "block"; // Show task list
          } else if (contentType === 'referral') {
              // Hide everything except referral content
              Referral.style.display = "block";
              bubble.style.display = "none";
              userInfo.style.display = "none";
              miningButton.style.display = "none";
              taskList.style.display = "none"; // Hide task list
              contentArea.style.display = "block"; 
              contentArea.innerHTML = '<h2>Referral</h2><p>Referral details will be displayed here.</p>'; // Display referral content
          } else if (contentType === 'wallet') {
              // Hide everything except wallet content
              bubble.style.display = "none";
              userInfo.style.display = "none";
              miningButton.style.display = "none";
              taskList.style.display = "none"; // Hide task list
              contentArea.style.display = "block"; 
              contentArea.innerHTML = '<h2>Wallet</h2><p>Wallet details will be displayed here.</p>'; // Display wallet content
          }
      });
  });
});
