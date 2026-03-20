// Example: Advancing a team
function advanceTeam(teamName, nextMatchId, slot) {
    // teamName: The name of the team clicked
    // nextMatchId: The ID of the div in the next round
    // slot: 0 for top team, 1 for bottom team
    
    const nextMatch = document.getElementById(nextMatchId);
    const slots = nextMatch.querySelectorAll('.team-slot');
    slots[slot].innerText = teamName;
}

// Logic to handle the complex 3rd place mapping
const thirdPlaceMapping = {
    "match74": ["GroupA", "GroupB", "GroupC", "GroupD", "GroupF"],
    // ... add the rest of the mapping we discussed
};