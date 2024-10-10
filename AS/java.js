function saveMoney() {
    const targetAmount = parseFloat(document.getElementById('target').value);
    const savedAmount = parseFloat(document.getElementById('saved').value);
    const message = document.getElementById('message');

    if (isNaN(targetAmount) || isNaN(savedAmount)) {
        message.textContent = "Please enter valid amounts!";
        message.style.color = "red";
        return;
    }

    if (savedAmount >= targetAmount) {
        message.textContent = "Congratulations! You've reached your target.";
        message.style.color = "green";
        // Logic for enabling purchase can be added here, e.g., redirect to a purchase page
    } else {
        const remaining = targetAmount - savedAmount;
        message.textContent = `You need to save ${remaining.toFixed(2)} more to reach your goal.`;
        message.style.color = "#555";
    }
}
