document.addEventListener("DOMContentLoaded", () => {
    fetch('https://4h4lwrgcff.execute-api.ap-south-1.amazonaws.com/default/updateCvVisitorCount', {
        method: 'PATCH'
    })
        .then((response) => response.text())
        .then((responseData) => {
            data = JSON.parse(responseData)
            var stats = document.querySelectorAll('.stat-visitor-count');
            stats.forEach(stat => {
                stat.innerText = data.visitor_count;
            });
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
});