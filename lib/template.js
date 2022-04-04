module.exports = {
  HTML: (title, word) => {
    return `
        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style rel="stylesheet">
    body {
      margin: 0;
    }
    
    .nav-container {
      display: flex;
      flex-direction: row;
      width: 100%;
      margin: 0;
      padding: 0;
      background-color: blanchedalmond;
      list-style-type: none;
    }
    
    .nav-item {
      padding: 15px;
      cursor: pointer;
    }
    
    .nav-item a {
      text-align: center;
      text-decoration: none;
      color: black;
    }
    
    </style>
    <title>${title}</title>
  </head>
  <body>
    <nav>
      <ul class="nav-container">
        <li class="nav-item"><a>Contact Book</a></li>
        <li class="nav-item"><a href="/contacts">Index</a></li>
        <li class="nav-item"><a href="/contacts/new">New</a></li>
      </ul>
    </nav>
    <h1>${title}</h1>
    ${word}
  </body>
</html>

        `;
  },
};
