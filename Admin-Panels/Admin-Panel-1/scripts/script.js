// Wait for the DOM (Document Object Model) to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {

    // Select all elements with the class "tab" (each tab content area)
    const tabs = document.querySelectorAll(".tab");

    // Select all anchor links inside the sidebar (these are the navigation links)
    const links = document.querySelectorAll(".sidebar ul li a");

    // Select all elements with the class "tab-link" (the clickable navigation items for tabs)
    const tabLinks = document.querySelectorAll('.tab-link');

    // Function to activate the corresponding tab by its ID
    function activateTab(tabId) {
        // Loop through each tab element
        tabs.forEach(tab => {
            // Hide all tabs by adding the "hidden" class
            tab.classList.add("hidden");

            // If the tab's ID matches the passed tabId, remove the "hidden" class to make it visible
            if (tab.id === tabId) {
                tab.classList.remove("hidden");
            }
        });
    }

    // Function to activate the corresponding tab link in the sidebar
    function activateTabLink(linkId) {
        // Loop through each tab and remove the "active" class, making them inactive
        tabs.forEach(tab => tab.classList.remove('active'));

        // Loop through each tab link and remove the "active" class, making them inactive
        tabLinks.forEach(link => link.classList.remove('active'));

        // Find the target tab element using the passed linkId and add the "active" class to it
        const targetTab = document.getElementById(linkId);
        if (targetTab) {
            targetTab.classList.add('active');
        }

        // Find the corresponding link in the sidebar and add the "active" class to it
        const targetLink = document.querySelector(`[data-tab="${linkId}"]`);
        if (targetLink) {
            targetLink.classList.add('active');
        }
    }

    // Add an event listener to each sidebar link
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            // Prevent the default link behavior (no page reload)
            e.preventDefault();

            // Get the value of the "data-tab" attribute of the clicked link (this determines which tab to display)
            const tabId = link.dataset.tab;

            // Activate the corresponding tab and tab link
            activateTab(tabId);
            activateTabLink(tabId);
        });
    });

    // Add an event listener to each tab link (the clickable navigation items)
    tabLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent the default link behavior (no page reload)
            event.preventDefault();

            // Get the "data-tab" attribute of the clicked tab link
            const targetTabId = this.getAttribute('data-tab');

            // Activate the corresponding tab and tab link
            activateTabLink(targetTabId);
        });
    });

    // Default active tab is "dashboard" when the page first loads
    activateTab("dashboard");
    
    // Also set the default active link as the one with "dashboard"
    activateTabLink("dashboard");
});