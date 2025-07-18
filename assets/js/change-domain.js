// Auto-update schema links based on current domain
document.addEventListener('DOMContentLoaded', function() {

    // Update API example code block
    const examples = document.getElementsByTagName('code');
    if(examples){
        for( const el of examples ){
            el.innerHTML = el.innerHTML.replace(
                /https:\/\/your-domain\.com/g,
                window.location.origin
            )
        }
    }
});
