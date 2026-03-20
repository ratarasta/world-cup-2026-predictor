function advance(element, nextId) {
    // 1. Get the team name
    const teamName = element.innerText;
    if (teamName === "TBD") return;

    // 2. Find the target slot in the next round
    const targetSlot = document.getElementById(nextId);
    
    if (targetSlot) {
        targetSlot.innerText = teamName;
        targetSlot.classList.remove('empty');
        
        // Visual feedback: Highlight winner in current match
        const parent = element.parentElement;
        parent.querySelectorAll('.team').forEach(t => t.style.color = "white");
        element.style.color = "var(--win-color)";
    }
}
