

document.addEventListener('DOMContentLoaded', function() {
  
    const moodParagraphs = document.querySelectorAll('.mood-paragraph');


    function updateMood(mood) {
        const moodColors = {
            happy: '#ff0',  
            calm: '#00f',   
            cheerful: '#f0f',
            relaxed: '#0f0'  
        };

        const moodText = {
            happy: 'Feeling Happy!',
            calm: 'Feeling Calm!',
            cheerful: 'Feeling Cheerful!',
            relaxed: 'Feeling Relaxed!'
        };

        document.body.style.backgroundColor = moodColors[mood];
        moodParagraphs.forEach(p => {
            if (p.getAttribute('data-mood') === mood) {
                p.textContent = moodText[mood];
            } else {
                p.textContent = p.getAttribute('data-mood') === mood ? moodText[mood] : `Feeling ${p.getAttribute('data-mood').charAt(0).toUpperCase() + p.getAttribute('data-mood').slice(1)}.`;
            }
        });
    }


    moodParagraphs.forEach(p => {
        p.addEventListener('mouseover', function() {
            updateMood(this.getAttribute('data-mood'));
        });
    });


    document.addEventListener('mouseout', function(e) {
        if (!e.target.classList.contains('mood-paragraph')) {
            document.body.style.backgroundColor = '';
            moodParagraphs.forEach(p => {
                p.textContent = `Feeling ${p.getAttribute('data-mood').charAt(0).toUpperCase() + p.getAttribute('data-mood').slice(1)}.`;
            });
        }
    });
});
