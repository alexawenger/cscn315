// proj10.js - Drag and Drop Memory Matching Game

document.addEventListener("DOMContentLoaded", function () {
    const draggables = document.querySelectorAll(".draggable");
    const dropZones = document.querySelectorAll(".drop-zone");
    const gameMessages = document.getElementById("game-messages");
  
    // Add event listeners for draggable elements
    draggables.forEach(draggable => {
      draggable.addEventListener("dragstart", dragStart);
    });
  
    // Add event listeners for drop zones
    dropZones.forEach(zone => {
      zone.addEventListener("dragover", dragOver);
      zone.addEventListener("drop", drop);
    });
  
    // When dragging starts, store the dragged item ID
    function dragStart(event) {
      event.dataTransfer.setData("text/plain", event.target.id);
    }
  
    // Allow item to be dropped by preventing default handling
    function dragOver(event) {
      event.preventDefault();
    }
  
    // Handle the drop action
    function drop(event) {
      event.preventDefault();
      const draggedItemId = event.dataTransfer.getData("text/plain");
      const draggedItem = document.getElementById(draggedItemId);
      const matchId = event.target.getAttribute("data-match");
  
      // Check if the dropped item matches the drop zone's data-match attribute
      if (draggedItemId === matchId) {
        event.target.appendChild(draggedItem); // Append item to the correct drop zone
        event.target.classList.add("matched");
        gameMessages.innerHTML = `<p>Correct match for ${draggedItem.textContent}!</p>`;
      } else {
        gameMessages.innerHTML = `<p>Incorrect match. Try again!</p>`;
      }
    }
  });
  