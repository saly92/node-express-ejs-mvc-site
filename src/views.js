export const siteView = ({
    nouns,
    books,
    techPersons,
    settings,
    translations,
    jobs,
    landscapePhotos
}) => {
    return `

   
    <h2><b>Local JSON file: </b>There are ${books.length} books.</h2>	
    <div class="content">
        ${books
            .filter((m, i) => i < 3)
            .map((m) => m.title)
            .join(', ')}, ...
    </div>

    <h2><b>Local SQLite file: </b>There are ${techPersons.length} tech persons.</h2>	
    <div class="content">
        ${techPersons
            .filter((m, i) => i < 3)
            .map((m) => m.fullName)
            .join(', ')}, ...
    </div>

    <h2><b>Local XML file: </b>There are ${Object.entries(settings).length} settings.</h2>	
    <div class="content">
        ${Object.entries(settings)
            .filter((m, i) => i < 3)
            .map((m) => `${m[0]}: ${m[1]}`)
            .join(', ')}, ...
    </div>

    <h2><b>Local Excel file: </b>There are ${
        translations.length
    } translations.</h2>	
    <div class="content">
        ${translations
            .filter((m, i) => i < 3)
            .map((m) => m.fromPhrase)
            .join(', ')}, ...
    </div>

    <h2><b>Local directory of images: </b>There are ${
        landscapePhotos.length
    } landscape photos.</h2>
    <div class="content">
        ${landscapePhotos
            .map((fileName) => `<img src="images/${fileName}"/>`)
            .join('')}
    </div>

    <h2><b>Local directory of markdown files: </b>There are ${
        jobs.length
    } jobs.</h2>
    <div class="content">
        ${jobs
            .map((job) => {
                return `
                <div class="job">
                    ID-CODE: ${job.idCode}
                    ${job.html}
                </div>
                `;
            })
            .join('')}
    </div>


`;
};
