

const parseEmployeeArrayObj = (data) => {
    const transformedData = data.map((datum) => {
        switch (datum.getRole()) {
            case "Intern":
                return `
                    <div>
                        <p>${datum.getName()}</p>
                        <p>${datum.getId()}</p>
                        <p>${datum.getEmail()}</p>
                        <p>${datum.getSchool()}</p>
                    </div>
                `
            case "Engineer":
                return `
                    <div>
                        <p>${datum.getName()}</p>
                        <p>${datum.getId()}</p>
                        <p>${datum.getEmail()}</p>
                        <p>${datum.getGithub()}</p>
                    </div>
                `       
            case "Manager":
                return `
                    <div>
                        <p>${datum.getName()}</p>
                        <p>${datum.getId()}</p>
                        <p>${datum.getEmail()}</p>
                        <p>${datum.getOfficeNumber()}</p>
                    </div>
                ` 
            default:
                break;
        }
    });
    //concat array of string to one string
    return transformedData.join("\n");
};

function generateMarkdown(data){
return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Organization Chart</title>
</head>
<body>
<h1>My Team</h1>
${parseEmployeeArrayObj(data)}
</body>
</body>
</html>`
};

module.exports = generateMarkdown;