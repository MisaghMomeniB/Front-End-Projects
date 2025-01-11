document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const links = document.querySelectorAll(".sidebar ul li a");

    function activateTab(tabId) {
        tabs.forEach(tab => {
            tab.classList.add("hidden");
            if (tab.id === tabId) {
                tab.classList.remove("hidden");
            }
        });
    }

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const tabId = link.id.split("-")[0];
            activateTab(tabId);
        });
    });

    // Default active tab
    activateTab("dashboard");
});