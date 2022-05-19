import React from "react";

function SetPages() {
  return (
    <>
      <div className="pages">
        <h1>Pages</h1>
        <p>
          Each page is an object with only one required field <span>comp,</span>{" "}
          which is a function that returns a SetJS component created using the{" "}
          <spam>getComp</spam>
          function. The comp function receives the <span>pageData </span>object
          as its first parameter. Another few optional fields are also used. The
          default page object can have the following full form (you can always
          add more fields according to your app’s needs).
        </p>
        <h3>templates</h3>
        <p>
          A list of template files to load e.g<span> site/home.</span>
        </p>
        <h3>role</h3>
        <p>
          Specifies whether the page requires a certain access privilege for
          viewing. The flag creation will typically be done by calling
          <span>roleFlag()</span> or <span>cascadeRoleFlag()</span> functions
          defined in
          <span>setjs/kernel/roles.js</span> module.
        </p>
        <h3>getRole</h3>
        <p>
          Uses a function instead of a fixed role to return the access flag.
          Otherwise, works similar to the role field.
        </p>
        <h3>Assets</h3>
        <p>
          An array of JS or CSS URL arrays to be loaded by the
          <span>core/asset-loader.js </span>module
        </p>
        <h3>getAssets</h3>
        <p>
          Similar to <span>getRole.</span> Instead of a fixed
          <span> assets[] </span>array, uses a function to dynamically decide
          what assets to load
        </p>
        <h3>handleRoute</h3>
        <p>
          Returns a truthy value if the page wants to handle the route change
          instead of allowing the page loader to load the route
        </p>
        <h3>Once</h3>
        <p>
          For one-time loading e.g. loading some scripts etc. Must call either
          <span>opts.success()</span> or<span> opts.error()</span> for page
          loader to proceed. once will be called again on next visit if you end
          it with <span>opts.error().</span>
        </p>
        <h3>preload</h3>
        <p>
          For preloading. Must call either<span> opts.success()</span> or{" "}
          <span>opts.error()</span> for page loader to proceed.
        </p>
        <h3>loaded</h3>
        <p>Called after the page has loaded.</p>
        <h3>unload</h3>
        <p>
          Called when the page is being unloaded. You can perform any cleanup
          here.
        </p>
        <h3>comp</h3>
        <p>
          Create and return a SetJS component to be inserted as the main content
          of the page.
        </p>
      </div>
    </>
  );
}

export default SetPages;
