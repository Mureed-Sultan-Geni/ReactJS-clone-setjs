import React from "react";

function GetStart() {
  return (
    <div>
      <div className="get-start">

      <h1>Getting Started</h1>
      <p>
        So, we have things installed. Now is the time to understand pages and
        how we can add one.
      </p>
      <h4>The page concept</h4>
      <p>
        The main power of SetJS comes from its focus on pages rather than
        components which is the norm these days. This is one of the greatest
        differences between major frameworks and SetJS.
      </p>
      <p>
        A page is associated with one or more routes. Each page in SetJS has a
        template and typically an associated JS file (optional).
      </p>
      <p>
        A template file contains one or more elements with an attribute called
        “data-template” present. This becomes their identity name. The name can
        be anything, but a typical application uses the folder structure.
      </p>
      <h4>Adding a new page</h4>
      <p>
        Let's start with some basics using what we already have in the build.
      </p>
      <div className="code-area">
        <p>
          Create a new HTML file under src/views/page/templates/site. To test
          things out copy src/views/page/templates/site/home.html as a new file
          test.html.
        </p>
        <p>Open that file and change the highlighted snippet below</p>
      </div>
      </div>
    </div>
  );
}

export default GetStart;
