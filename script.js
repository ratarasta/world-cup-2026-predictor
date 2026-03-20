function advance(element, nextId) {
    const teamName = element.innerText;
    if (teamName === "TBD") return;

    const targetSlot = document.getElementById(nextId);
    if (targetSlot) {
        targetSlot.innerText = teamName;
        targetSlot.classList.remove('empty');
        
        // Visual feedback
        element.parentElement.querySelectorAll('.team').forEach(t => t.style.background = "");
        element.style.background = "#2ecc71"; // Green for winner
    }
}
