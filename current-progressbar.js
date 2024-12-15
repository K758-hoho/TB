document.addEventListener('DOMContentLoaded', function() {
    var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1alCVHZ40GNE7H7d_o-LnPShoQs40sZRDgxG-7u_ZAMQ/gviz/tq?tqx=out:csv&sheet=Database';

    function init() {
        Papa.parse(public_spreadsheet_url, {
            download: true,
            header: true,
            complete: showInfo
        });
    }

    function showInfo(results) {
        var data = results.data;
        // Wait for elements to be available
        const progress = document.querySelector('#progress');
        const percentageText = document.querySelector('#percentageText');
        const stage = document.querySelector('#stage');
        const currentChapter = document.querySelector('#currentChapter');

        // Check if elements exist before proceeding
        if (progress && percentageText && stage && currentChapter) {
            data.forEach(function(data) {
                progress.style.width = data.Progress;
                percentageText.innerHTML = data.Progress;
                stage.innerHTML = data.CurrentStage;
                currentChapter.innerHTML = data.CurrentChapter;
                stage.style.opacity = 1;
                currentChapter.style.opacity = 1;
            });
        }
    }

    init();
});