document.getElementById("toggleButton").addEventListener("click", function() {
    const firstDiv = document.getElementById("first");
    const secondDiv = document.getElementById("second");

    firstDiv.style.transform = "translateY(800px)";
    firstDiv.style.opacity = "0";

    setTimeout(() => {
        firstDiv.style.display = "none";
        secondDiv.style.display = "block";
        
        secondDiv.classList.add("show");
    }, 500); 
});

const mainMenu = document.getElementById("main-menu"),
  chevron = document.getElementById("chevron");

const handleSplitButtonClicked = () => alert("Split Button Clicked!!!");

const handleMenuLabelButtonClicked = () => {
  toggleDropdownButton();
  alert("Menu Label Button Clicked!!!");
};

const toggleDropdownButton = () => {
  mainMenu.classList.toggle("open");
  chevron.innerHTML = !mainMenu.classList.contains("open")
    ? "expand_more"
    : "close";
};

const homeClicked = () => {
  toggleDropdownButton();
  window.location.href = '../index.html';
};

const aboutClicked = () => {
  toggleDropdownButton();
  window.location.href = '../about.html';
};

const resumeClicked = () => {
  toggleDropdownButton();
  window.location.href = '../resume.html';
};

const blogsClicked = () => {
  toggleDropdownButton();
  window.location.href = '../blogs.html';
};

const linkedinClicked = () => {
  toggleDropdownButton();
  window.open('https://www.linkedin.com/in/immigueljoie08/', '_blank');
};

const facebookClicked = () => {
  toggleDropdownButton();
  window.open('https://www.facebook.com/Immigueljoie08', '_blank');
};

