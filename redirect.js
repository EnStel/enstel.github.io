// redirect.js
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const project = params.get('w');
    const test = params.get('test');

    if (project) {
        window.location.href = `./w/${project}/index.html`;
    } else if (test) {
        if (test === 'one') {
            window.location.href = `/test/one/index.html`;
        } else if (test === 'two') {
            window.location.href = `/test/two/index.html`;
        }
    }
};
