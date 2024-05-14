document.addEventListener("DOMContentLoaded", function() {
    var osSelection = document.getElementById('os-selection');
    var botGreeting = document.getElementById('bot-greeting');
    var homeButton = document.getElementById('home-button');

    document.getElementById('nextBtn').addEventListener('click', function() {
        var osDropdown = document.getElementById('osDropdown');
        var selectedOs = osDropdown.options[osDropdown.selectedIndex].value;
        startAssistant(selectedOs);
    });

    document.getElementById('homeBtn').addEventListener('click', function() {
        osSelection.style.display = 'block';
        botGreeting.style.display = 'none';
        homeButton.style.display = 'none';
    });
  
});

function startAssistant(os) {
    var botGreeting = document.getElementById('bot-greeting');
    var osSelection = document.getElementById('os-selection');
    var homeButton = document.getElementById('home-button');

    // Hide OS selection, home button, and show bot greeting
    osSelection.style.display = 'none';
    homeButton.style.display = 'block';
    botGreeting.style.display = 'block';

    // Display greeting message and basic troubleshooting links
    var chatbox = document.getElementById('chatbox');
    chatbox.innerHTML = `Great! You've selected ${os}. Here are some basic troubleshooting links:<br>`;

    // Generate and display troubleshooting links based on the selected OS
    var troubleshootingLinks = getTroubleshootingLinks(os);
    troubleshootingLinks.forEach(function(link) {
        chatbox.innerHTML += `<a href="${link.url}" target="_blank">${link.title}</a><br>`;
    });
}

function getTroubleshootingLinks(os) {
    // Define troubleshooting links for each OS
    var links = [];
    if (os === 'Windows') {
        links.push({ title: 'Windows Troubleshooter', url: 'https://learn.microsoft.com/en-us/troubleshoot/windows/' });
        links.push({ title: 'Windows Defender Troubleshooter', url: 'https://support.microsoft.com/en-us/windows/automatically-fix-windows-security-issues-9041b976-e664-1a1d-0a82-607b0cbd7fc4' });
    } else if (os === 'Linux') {
        links.push({ title: 'Linux Troubleshooting Guide', url: 'https://www.cbtnuggets.com/blog/technology/system-admin/3-common-linux-troubleshooting-techniques-for-diagnostics/' });
        links.push({ title: 'Linux Command Line Basics', url: 'https://ubuntu.com/tutorials/command-line-for-beginners#1-overview' });
    } else if (os === 'Mac') {
        links.push({ title: 'Mac Troubleshooting', url: 'https://support.apple.com/en-us/HT203271' });
        links.push({ title: 'Mac Startup Troubleshooting', url: 'https://support.apple.com/en-us/HT204156' });
    }
    return links;
}
function clearChatbox() {
    document.getElementById('chatbox').innerHTML = '';
 }