document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const links = document.querySelectorAll(".sidebar ul li a");
    const tabLinks = document.querySelectorAll('.tab-link'); // Add tab links for second event listener

    function activateTab(tabId) {
        tabs.forEach(tab => {
            tab.classList.add("hidden");
            if (tab.id === tabId) {
                tab.classList.remove("hidden");
            }
        });
    }

    function activateTabLink(linkId) {
        tabs.forEach(tab => tab.classList.remove('active'));
        tabLinks.forEach(link => link.classList.remove('active'));

        const targetTab = document.getElementById(linkId);
        if (targetTab) {
            targetTab.classList.add('active');
        }

        const targetLink = document.querySelector(`[data-tab="${linkId}"]`);
        if (targetLink) {
            targetLink.classList.add('active');
        }
    }

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const tabId = link.id.split("-")[0];
            activateTab(tabId);
            activateTabLink(tabId);  // Activate tab link
        });
    });

    tabLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetTabId = this.getAttribute('data-tab');
            activateTabLink(targetTabId);  // Use the activateTabLink function for tab links
        });
    });

    // Default active tab
    activateTab("dashboard");
    activateTabLink("dashboard");  // Default active link as well
});