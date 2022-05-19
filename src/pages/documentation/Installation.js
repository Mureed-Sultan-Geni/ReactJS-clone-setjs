import React from "react";
import Product from "../../components/docs/Product";
import tailwind from "../../images/tailwindcss.svg";
import bootstrap from "../../images/bootstrap.svg";
import realword from "../../images/realworld.svg";
import prismic from "../../images/prismic.svg";

function Installation() {
  return (
    <>
      <div className="install">
        <h2>Installtion</h2>
        <h3>Release Notes</h3>
        <p>
          Detailed release notes for each version are{" "}
          <a href="google.com">available on GitHub.</a>
        </p>
        <h3>Trying out SETJS</h3>
        <p>Clone one of the Quickstart projects (given below) and then:</p>
        <div className="box">
          <p>npm i</p>
          <p>npm run start</p>
        </div>
        <h3>Quickstart projects</h3>
        <p>
          Here's some of our handy project ready builds to get started quickly,
          ones that we're either using in the field ourselves or the community
          at large has pulled together.
        </p>
        <p>
          Something missing? <a href="google.com">Let us know.</a>
        </p>
        <div className="products">
          <Product
            image={tailwind}
            title="Post CSS"
            textDetail="Production ready setup of setjs with PostCSS for styles"
          />
          <Product
            image={bootstrap}
            title="Bootstrap"
            textDetail="Using Bootstrap 4 and our internal bootstrapped build."
          />
</div>
        <div className="products">
          <Product
            image={realword}
            title="Real World Demo
"
            textDetail="A fullstack application including CRUD ops, auth, routing, pagination and more."
          />
          <Product
            image={prismic}
            title="Prismic-Comming Soon
"
            textDetail="Our internal Prismic (Headless CMS) with Tailwind build and setup"
          />
        </div>
      </div>
    </>
  );
}

export default Installation;
