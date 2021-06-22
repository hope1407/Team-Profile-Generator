

const parseEmployeeArrayObj = (data) => {
    const transformedData = data.map((datum) => {
        switch (datum.getRole()) {
            case "Intern":
                return `
                    <div class="card custom-card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title name">${datum.getName()}</h5>
                      <p class="card-text employeeTitle">Intern</p>
                      <p class="card-text">Employee ID: ${datum.getId()}</p>
                      <p class="card-text">School: ${datum.getSchool()}</p>
                      <a href="mailto: ${datum.getEmail()}" class="btn btn-primary emailBtn">Email Me!</a>
                    </div>
                  </div>
                `
            case "Engineer":
                return `
                <div class="card custom-card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title name">${datum.getName()}</h5>
                  <p class="card-text employeeTitle">Engineer</p>
                  <p class="card-text">Employee ID: ${datum.getId()}</p>
                  <p class="card-text"><a href="https://github.com/${datum.getGithub()}" class="card-text" id="gitHubLink">Check out my Github!</a></p>
                  <a href="mailto: ${datum.getEmail()}" class="btn btn-primary emailBtn">Email Me!</a>
                </div>
              </div>
                `
            case "Manager":
                return `
                <div class="card custom-card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title name">${datum.getName()}</h5>
                  <p class="card-text employeeTitle">Manager</p>
                  <p class="card-text">Employee ID: ${datum.getId()}</p>
                  <p class="card-text">Office Number: ${datum.getOfficeNumber()}</p>
                  <a href="mailto: ${datum.getEmail()}" class="btn btn-primary emailBtn">Email Me!</a>
                </div>
              </div>
                `
            default:
                break;
        }
    });
    //concat array of string to one string
    return transformedData.join("\n");
};

function generateMarkdown(data) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Organization Chart</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" rel="stylesheet">
<link rel="stylesheet" href="./style.css">
</head>
<body>
<h1 class="title">My Team</h1>
<div class="container">
  <div class="row" id="cardPlacement">
  ${parseEmployeeArrayObj(data)}
  </div>
</div>
</body>
</body>
</html>`
};

module.exports = generateMarkdown;