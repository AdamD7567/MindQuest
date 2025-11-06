// Toggle sidebar animation
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("closed");
}

// Hide sidebar automatically when zooming out.
window.addEventListener('resize', () => {
    let sidebar = document.getElementById('sidebar');
    if (window.innerWidth > 1250 && !sidebar.classList.contains('closed')) {
        sidebar.classList.add('closed');
    }
});