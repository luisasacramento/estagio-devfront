window.onscroll = () => ProgressBar();

function ProgressBar() {
    
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    const scrollTop = document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.width = scrollPercent + "%";
}

