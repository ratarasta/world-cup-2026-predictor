function advance(element, nextId) {
    const teamName = element.innerText;
    if (teamName === "TBD" || teamName.includes("Winner") || teamName.includes("Runner-up")) {
        // Only advance if it's a real team or specific selection
    }

    const targetSlot = document.getElementById(nextId);
    if (targetSlot) {
        targetSlot.innerText = teamName;
        targetSlot.classList.remove('empty');
        
        // Visual highlight for the winner
        const parent = element.parentElement;
        parent.querySelectorAll('.team').forEach(t => t.style.background = "");
        element.style.background = "#1b4332"; // Dark green background
        element.style.color = "#00ff88"; // Bright green text
    }
}
