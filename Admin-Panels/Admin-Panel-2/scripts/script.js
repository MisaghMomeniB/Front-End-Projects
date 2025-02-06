function changeContent(section) {
    const contentArea = document.getElementById('content-area');
    const contentTitle = document.getElementById('content-title');

    switch (section) {
        case 'dashboard':
            contentTitle.textContent = 'Dashboard';
            contentArea.innerHTML = '<p>This is the dashboard section. Display important information here.</p>';
            break;
        case 'settings':
            contentTitle.textContent = 'Settings';
            contentArea.innerHTML = '<p>In this section, you can manage system settings.</p>';
            break;
        case 'users':
            contentTitle.textContent = 'Users';
            contentArea.innerHTML = '<p>The list of users is displayed here.</p>';
            break;
        case 'reports':
            contentTitle.textContent = 'Reports';
            contentArea.innerHTML = '<p>System reports are viewable in this section.</p>';
            break;
        default:
            contentTitle.textContent = 'Dashboard';
            contentArea.innerHTML = '<p>This is the dashboard section. Display important information here.</p>';
    }
}