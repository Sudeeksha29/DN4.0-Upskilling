// 1. Basics & Setup
console.log("Welcome to the Community Portal");
window.onload = () => alert("Page loaded successfully!");

// 2. Sample Event Data
const events = [
  { name: "Music Festival", date: "2025-06-30", category: "Music", seats: 5 },
  { name: "Art Workshop", date: "2025-05-25", category: "Art", seats: 0 },
  { name: "Community Marathon", date: "2025-07-10", category: "Sports", seats: 10 }
];

// 3. Render Events
function renderEvents() {
  const list = document.getElementById("eventList");
  list.innerHTML = "";
  const today = new Date();

  events.forEach(event => {
    const eventDate = new Date(event.date);
    if (eventDate > today && event.seats > 0) {
      const div = document.createElement("div");
      div.className = "event-card";
      div.innerHTML = `
        <strong>${event.name}</strong><br>
        Date: ${event.date}<br>
        Category: ${event.category}<br>
        Seats: ${event.seats}<br>
        <button onclick="registerUser('${event.name}')">Register</button>
      `;
      list.appendChild(div);
    }
  });
}

// 4. Register Function
function registerUser(eventName) {
  const event = events.find(e => e.name === eventName);
  try {
    if (event.seats > 0) {
      event.seats--;
      alert(`Registered for ${event.name}`);
      renderEvents();
    } else {
      throw new Error("No seats available");
    }
  } catch (err) {
    alert(err.message);
  }
}

// 5. Registration Form Submission
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const date = document.getElementById("regDate").value;
  const type = document.getElementById("regType").value;

  if (!name || !email || !date || !type) {
    alert("Please fill all fields");
    return;
  }

  events.push({ name: `User Event by ${name}`, date, category: type, seats: 1 });
  document.getElementById("confirmation").textContent = "Thank you for registering!";
  renderEvents();
});

renderEvents();
